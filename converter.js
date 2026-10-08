/* ========================================================
   Convertisseur d'images en pages de coloriage
   Transforme photos ou dessins en contours nets et intérieurs blancs
   Optimisé pour iPad et rendu enfantin (traits francs et continus)
   ======================================================== */

class ImageColoringConverter {
  constructor() {
    this.sourceImage = null;
    this.previewCanvas = document.getElementById('converted-preview-canvas');
    this.previewCtx = this.previewCanvas ? this.previewCanvas.getContext('2d') : null;

    // Paramètres par défaut
    this.settings = {
      mode: 'smart',      // 'smart' | 'photo' | 'direct'
      threshold: 128,     // Seuil de détection de contours
      thickness: 2,       // Dilatation / épaisseur du trait
      smoothing: 1        // Rayon de flou pour éliminer les grains de texture
    };
  }

  setSourceImage(img) {
    this.sourceImage = img;
    this.processAndPreview();
  }

  updateSettings(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
    if (this.sourceImage) {
      this.processAndPreview();
    }
  }

  // Traite l'image source et génère un Canvas au format coloriage
  processImage(targetWidth = 1000, targetHeight = 1000) {
    if (!this.sourceImage) return null;

    // Calcul du ratio pour conserver les proportions
    let w = this.sourceImage.naturalWidth || this.sourceImage.width;
    let h = this.sourceImage.naturalHeight || this.sourceImage.height;

    // Normalisation à une résolution standard fluide (max 1200px)
    const maxDim = 1200;
    if (w > maxDim || h > maxDim) {
      if (w > h) {
        h = Math.round((h * maxDim) / w);
        w = maxDim;
      } else {
        w = Math.round((w * maxDim) / h);
        h = maxDim;
      }
    }

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');

    // Remplissage fond blanc propre
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(this.sourceImage, 0, 0, w, h);

    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;

    if (this.settings.mode === 'direct') {
      // Mode direct : Coloriage déjà prêt téléchargé sur le web
      // Nettoyage des niveaux de gris et suppression des bruits JPEG
      this.cleanExistingColoringPage(data, w, h, this.settings.threshold);
    } else if (this.settings.mode === 'photo') {
      // Mode photo : Détection de contours réaliste avec contraste adaptatif
      this.convertPhotoToColoring(data, w, h, this.settings);
    } else {
      // Mode "Magique Enfant" (recommandé pour 4 ans) :
      // Contours francs, simplification des formes et suppression du fouillis
      this.convertChildFriendlyColoring(data, w, h, this.settings);
    }

    ctx.putImageData(imgData, 0, 0);

    // Si épaississement souhaité, appliquer une dilatation morphologique
    if (this.settings.thickness > 1) {
      this.dilateLines(canvas, this.settings.thickness);
    }

    return canvas;
  }

  // Rafraîchit l'aperçu dans la modale
  processAndPreview() {
    if (!this.sourceImage || !this.previewCanvas) return;

    // Taille adaptée pour la prévisualisation rapide
    const previewSize = 400;
    let w = this.sourceImage.naturalWidth || this.sourceImage.width;
    let h = this.sourceImage.naturalHeight || this.sourceImage.height;

    if (w > previewSize || h > previewSize) {
      if (w > h) {
        h = Math.round((h * previewSize) / w);
        w = previewSize;
      } else {
        w = Math.round((w * previewSize) / h);
        h = previewSize;
      }
    }

    this.previewCanvas.width = w;
    this.previewCanvas.height = h;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = w;
    tempCanvas.height = h;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.fillStyle = '#ffffff';
    tempCtx.fillRect(0, 0, w, h);
    tempCtx.drawImage(this.sourceImage, 0, 0, w, h);

    const imgData = tempCtx.getImageData(0, 0, w, h);
    const data = imgData.data;

    if (this.settings.mode === 'direct') {
      this.cleanExistingColoringPage(data, w, h, this.settings.threshold);
    } else if (this.settings.mode === 'photo') {
      this.convertPhotoToColoring(data, w, h, this.settings);
    } else {
      this.convertChildFriendlyColoring(data, w, h, this.settings);
    }

    this.previewCtx.putImageData(imgData, 0, 0);

    if (this.settings.thickness > 1) {
      this.dilateLines(this.previewCanvas, this.settings.thickness);
    }
  }

  // 1. Nettoyage d'une page de coloriage déjà existante
  cleanExistingColoringPage(data, w, h, threshold) {
    const len = data.length;
    // Seuil de binarisation douce
    const thresh = threshold;

    for (let i = 0; i < len; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;

      // Si le pixel est sombre -> trait noir franc (#1e293b), sinon blanc pur (#ffffff)
      if (lum < thresh) {
        data[i] = 30;
        data[i + 1] = 41;
        data[i + 2] = 59;
      } else {
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
      }
      data[i + 3] = 255;
    }
  }

  // 2. Mode Magique Enfant : Filtre DoG (Difference of Gaussians / Gradient fort)
  convertChildFriendlyColoring(data, w, h, settings) {
    const gray = new Float32Array(w * h);
    const len = data.length;

    // Conversion niveau de gris
    for (let i = 0, j = 0; i < len; i += 4, j++) {
      gray[j] = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    }

    // Flou de lissage initial pour supprimer les petits détails gênants pour un enfant de 4 ans
    const smoothRadius = Math.max(1, settings.smoothing + 1);
    const blurred1 = this.boxBlurGrayscale(gray, w, h, smoothRadius);
    const blurred2 = this.boxBlurGrayscale(gray, w, h, smoothRadius + 2);

    const thresh = settings.threshold / 255.0;

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const idx = y * w + x;
        const p1 = blurred1[idx];
        const p2 = blurred2[idx];

        // Différence de flous (met en relief les grands contours de la forme)
        const diff = p2 - p1;

        // Détection de Sobel sur le premier flou
        const gx = (x > 0 && x < w - 1) ? (blurred1[idx + 1] - blurred1[idx - 1]) : 0;
        const gy = (y > 0 && y < h - 1) ? (blurred1[idx + w] - blurred1[idx - w]) : 0;
        const grad = Math.sqrt(gx * gx + gy * gy);

        const isEdge = (diff > 4.5 || grad > (255 - settings.threshold) * 0.45);

        const pixelIdx = idx * 4;
        if (isEdge) {
          data[pixelIdx] = 30;
          data[pixelIdx + 1] = 41;
          data[pixelIdx + 2] = 59;
        } else {
          data[pixelIdx] = 255;
          data[pixelIdx + 1] = 255;
          data[pixelIdx + 2] = 255;
        }
        data[pixelIdx + 3] = 255;
      }
    }
  }

  // 3. Mode Photo : Filtre de Sobel avec seuil adaptatif
  convertPhotoToColoring(data, w, h, settings) {
    const gray = new Float32Array(w * h);
    const len = data.length;

    for (let i = 0, j = 0; i < len; i += 4, j++) {
      gray[j] = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    }

    const blurred = settings.smoothing > 0 
      ? this.boxBlurGrayscale(gray, w, h, settings.smoothing) 
      : gray;

    const thresholdVal = 255 - settings.threshold;

    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        const idx = y * w + x;
        // Noyau de Sobel classique 3x3
        const gx =
          -blurred[idx - w - 1] + blurred[idx - w + 1] +
          -2 * blurred[idx - 1] + 2 * blurred[idx + 1] +
          -blurred[idx + w - 1] + blurred[idx + w + 1];

        const gy =
          -blurred[idx - w - 1] - 2 * blurred[idx - w] - blurred[idx - w + 1] +
           blurred[idx + w - 1] + 2 * blurred[idx + w] + blurred[idx + w + 1];

        const mag = Math.sqrt(gx * gx + gy * gy);

        const pixelIdx = idx * 4;
        if (mag > thresholdVal * 0.7) {
          data[pixelIdx] = 30;
          data[pixelIdx + 1] = 41;
          data[pixelIdx + 2] = 59;
        } else {
          data[pixelIdx] = 255;
          data[pixelIdx + 1] = 255;
          data[pixelIdx + 2] = 255;
        }
        data[pixelIdx + 3] = 255;
      }
    }
  }

  // Flou boîte rapide 1D séparable (O(N) efficace sur mobile/iPad)
  boxBlurGrayscale(src, w, h, radius) {
    if (radius <= 0) return src;
    const dest = new Float32Array(w * h);
    const temp = new Float32Array(w * h);
    const r = Math.min(radius, 5);

    // Passe horizontale
    for (let y = 0; y < h; y++) {
      const rowOffset = y * w;
      for (let x = 0; x < w; x++) {
        let sum = 0;
        let count = 0;
        for (let k = -r; k <= r; k++) {
          const nx = x + k;
          if (nx >= 0 && nx < w) {
            sum += src[rowOffset + nx];
            count++;
          }
        }
        temp[rowOffset + x] = sum / count;
      }
    }

    // Passe verticale
    for (let x = 0; x < w; x++) {
      for (let y = 0; y < h; y++) {
        let sum = 0;
        let count = 0;
        for (let k = -r; k <= r; k++) {
          const ny = y + k;
          if (ny >= 0 && ny < h) {
            sum += temp[ny * w + x];
            count++;
          }
        }
        dest[y * w + x] = sum / count;
      }
    }

    return dest;
  }

  // Épaissit les traits noirs pour faciliter le coloriage de l'enfant
  dilateLines(canvas, thickness) {
    if (thickness <= 1) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;
    const copy = new Uint8Array(data);

    const t = Math.min(thickness - 1, 2);

    for (let y = t; y < h - t; y++) {
      for (let x = t; x < w - t; x++) {
        const idx = (y * w + x) * 4;
        // Si ce pixel n'est pas déjà noir, regarde si un voisin est un trait noir
        if (copy[idx] > 100) {
          let hasDarkNeighbor = false;
          for (let dy = -t; dy <= t && !hasDarkNeighbor; dy++) {
            for (let dx = -t; dx <= t; dx++) {
              const nIdx = ((y + dy) * w + (x + dx)) * 4;
              if (copy[nIdx] < 80) {
                hasDarkNeighbor = true;
                break;
              }
            }
          }
          if (hasDarkNeighbor) {
            data[idx] = 30;
            data[idx + 1] = 41;
            data[idx + 2] = 59;
          }
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }
}

window.ImageColoringConverter = ImageColoringConverter;
