/* ========================================================
   Application Principale - Coloriage Magique iPad
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- Éléments du DOM ---
  const bgCanvas = document.getElementById('bg-canvas');
  const paintCanvas = document.getElementById('paint-canvas');
  const outlineCanvas = document.getElementById('outline-canvas');
  const fxCanvas = document.getElementById('fx-canvas');
  const canvasWrapper = document.getElementById('canvas-wrapper');
  const canvasContainer = document.getElementById('canvas-container');

  const bgCtx = bgCanvas.getContext('2d');
  const paintCtx = paintCanvas.getContext('2d', { willReadFrequently: true });
  const outlineCtx = outlineCanvas.getContext('2d', { willReadFrequently: true });
  const fxCtx = fxCanvas.getContext('2d');

  // Boutons et contrôles
  const toolBtns = document.querySelectorAll('.tool-btn');
  const sizeBtns = document.querySelectorAll('.size-btn');
  const paletteContainer = document.getElementById('palette-colors');
  const stampSelector = document.getElementById('stamp-selector');
  const stampChoices = document.querySelectorAll('.stamp-choice');

  const btnUndo = document.getElementById('btn-undo');
  const btnRedo = document.getElementById('btn-redo');
  const btnSound = document.getElementById('btn-sound');
  const soundIcon = document.getElementById('sound-icon');
  const btnClear = document.getElementById('btn-clear');
  const btnPrint = document.getElementById('btn-print');
  const btnSave = document.getElementById('btn-save');

  const btnGallery = document.getElementById('btn-gallery');
  const galleryModal = document.getElementById('gallery-modal');
  const galleryClose = document.getElementById('gallery-close');
  const galleryCards = document.getElementById('gallery-cards');

  const btnUpload = document.getElementById('btn-upload');
  const fileInput = document.getElementById('file-input');
  const converterModal = document.getElementById('converter-modal');
  const converterClose = document.getElementById('converter-close');
  const btnSelectFile = document.getElementById('btn-select-file');
  const sourcePreview = document.getElementById('source-preview');
  const noImageText = document.getElementById('no-image-text');
  const btnApplyConvert = document.getElementById('btn-apply-convert');

  // Sliders du convertisseur
  const sliderThreshold = document.getElementById('slider-threshold');
  const valThreshold = document.getElementById('val-threshold');
  const sliderThickness = document.getElementById('slider-thickness');
  const valThickness = document.getElementById('val-thickness');
  const sliderSmoothing = document.getElementById('slider-smoothing');
  const valSmoothing = document.getElementById('val-smoothing');
  const modeBtns = document.querySelectorAll('.mode-btn');

  // --- Palette de couleurs vives enfantines ---
  const PALETTE = [
    { color: '#ff4757', name: 'Rouge' },
    { color: '#ff7f50', name: 'Orange' },
    { color: '#ffa502', name: 'Jaune' },
    { color: '#2ed573', name: 'Vert' },
    { color: '#1dd1a1', name: 'Menthe' },
    { color: '#70a1ff', name: 'Bleu ciel' },
    { color: '#1e90ff', name: 'Bleu' },
    { color: '#a55eea', name: 'Violet' },
    { color: '#ff6b8b', name: 'Rose' },
    { color: '#ff9ff3', name: 'Rose clair' },
    { color: '#8b572a', name: 'Marron' },
    { color: '#f5cd79', name: 'Beige' },
    { color: '#a4b0be', name: 'Gris' },
    { color: '#2f3542', name: 'Noir' },
    { color: '#ffffff', name: 'Blanc' },
    { color: 'rainbow', name: 'Arc-en-ciel', isRainbow: true }
  ];

  // --- État de l'application ---
  const state = {
    tool: 'bucket',           // 'bucket', 'brush', 'crayon', 'glitter', 'sticker', 'eraser'
    color: '#ff4757',         // Couleur hex courante
    isRainbow: false,
    rainbowHue: 0,
    brushSize: 28,
    selectedStamp: '⭐',
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    history: [],              // Pile d'annulation (snapshots de paintCanvas)
    redoHistory: [],
    maxHistory: 15,
    canvasWidth: 800,
    canvasHeight: 800,
    currentTemplateId: null
  };

  const converter = new window.ImageColoringConverter();

  // ========================================================
  // INITIALISATION DU CANVAS ET REDIMENSIONNEMENT
  // ========================================================
  function initCanvasDimensions() {
    const rect = canvasContainer.getBoundingClientRect();
    const padding = 24;
    const availW = Math.max(300, rect.width - padding);
    const availH = Math.max(300, rect.height - padding);

    // Dimension carrée ou 4:3 optimale pour coloriage
    let size = Math.min(availW, availH);
    size = Math.min(size, 850); // Plafond netteté/performance

    state.canvasWidth = size;
    state.canvasHeight = size;

    canvasWrapper.style.width = `${size}px`;
    canvasWrapper.style.height = `${size}px`;

    [bgCanvas, paintCanvas, outlineCanvas, fxCanvas].forEach(canv => {
      canv.width = size;
      canv.height = size;
    });

    // Fond papier blanc doux
    bgCtx.fillStyle = '#ffffff';
    bgCtx.fillRect(0, 0, size, size);
  }

  // ========================================================
  // GESTION DE LA PALETTE DE COULEURS
  // ========================================================
  function buildPalette() {
    paletteContainer.innerHTML = '';
    PALETTE.forEach((item, index) => {
      const swatch = document.createElement('button');
      swatch.className = 'color-swatch';
      swatch.title = item.name;

      if (item.isRainbow) {
        swatch.classList.add('rainbow');
      } else {
        swatch.style.backgroundColor = item.color;
      }

      if (index === 0) swatch.classList.add('active');

      swatch.addEventListener('click', () => {
        document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');

        if (item.isRainbow) {
          state.isRainbow = true;
        } else {
          state.isRainbow = false;
          state.color = item.color;
        }

        // Si l'outil était la gomme, repasser sur le pinceau par commodité
        if (state.tool === 'eraser') {
          selectTool('brush');
        }

        window.soundManager.playPop();
      });

      paletteContainer.appendChild(swatch);
    });
  }

  // ========================================================
  // SÉLECTION DES OUTILS ET TAILLES
  // ========================================================
  function selectTool(toolName) {
    state.tool = toolName;
    toolBtns.forEach(btn => {
      if (btn.dataset.tool === toolName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Basculer l'affichage du panneau tampons ou couleurs
    if (toolName === 'sticker') {
      stampSelector.classList.remove('hidden');
      paletteContainer.classList.add('hidden');
    } else {
      stampSelector.classList.add('hidden');
      paletteContainer.classList.remove('hidden');
    }
  }

  toolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectTool(btn.dataset.tool);
      window.soundManager.playPop();
    });
  });

  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.brushSize = parseInt(btn.dataset.size, 10);
      window.soundManager.playPop();
    });
  });

  stampChoices.forEach(choice => {
    choice.addEventListener('click', () => {
      stampChoices.forEach(c => c.classList.remove('active'));
      choice.classList.add('active');
      state.selectedStamp = choice.dataset.stamp;
      window.soundManager.playSparkle();
    });
  });

  // ========================================================
  // HISTORIQUE (ANNULER / RÉTABLIR)
  // ========================================================
  function saveSnapshot() {
    const snapshot = paintCtx.getImageData(0, 0, state.canvasWidth, state.canvasHeight);
    state.history.push(snapshot);
    if (state.history.length > state.maxHistory) {
      state.history.shift();
    }
    state.redoHistory = []; // Reset redo
    updateUndoRedoButtons();
  }

  function undo() {
    if (state.history.length > 0) {
      const current = paintCtx.getImageData(0, 0, state.canvasWidth, state.canvasHeight);
      state.redoHistory.push(current);
      const prev = state.history.pop();
      paintCtx.putImageData(prev, 0, 0);
      window.soundManager.playUndo();
      updateUndoRedoButtons();
    }
  }

  function redo() {
    if (state.redoHistory.length > 0) {
      const current = paintCtx.getImageData(0, 0, state.canvasWidth, state.canvasHeight);
      state.history.push(current);
      const next = state.redoHistory.pop();
      paintCtx.putImageData(next, 0, 0);
      window.soundManager.playPop();
      updateUndoRedoButtons();
    }
  }

  function updateUndoRedoButtons() {
    btnUndo.style.opacity = state.history.length > 0 ? '1' : '0.4';
    btnRedo.style.opacity = state.redoHistory.length > 0 ? '1' : '0.4';
  }

  btnUndo.addEventListener('click', undo);
  btnRedo.addEventListener('click', redo);

  // ========================================================
  // ALGORITHME DE REMPLISSAGE PAR ZONE (FLOOD FILL)
  // Respecte les contours noirs de l'image de coloriage !
  // ========================================================
  function floodFill(startX, startY, fillColorHex) {
    const w = state.canvasWidth;
    const h = state.canvasHeight;

    startX = Math.floor(startX);
    startY = Math.floor(startY);

    if (startX < 0 || startX >= w || startY < 0 || startY >= h) return;

    // Récupérer les pixels de dessin et de contours
    const paintImgData = paintCtx.getImageData(0, 0, w, h);
    const outlineImgData = outlineCtx.getImageData(0, 0, w, h);

    const paintData = paintImgData.data;
    const outlineData = outlineImgData.data;

    // Décomposer la couleur de remplissage
    const fillRgb = hexToRgb(fillColorHex);

    const startIndex = (startY * w + startX) * 4;

    // Ne rien faire si on clique sur un trait noir de contour
    const outR = outlineData[startIndex];
    const outG = outlineData[startIndex + 1];
    const outB = outlineData[startIndex + 2];
    const outA = outlineData[startIndex + 3];
    const isLine = (outA > 80 && (0.299 * outR + 0.587 * outG + 0.114 * outB) < 135);
    if (isLine) {
      return; // Clic sur le trait noir
    }

    // Couleur cible sur le calque de peinture
    const targetR = paintData[startIndex];
    const targetG = paintData[startIndex + 1];
    const targetB = paintData[startIndex + 2];
    const targetA = paintData[startIndex + 3];

    // Si déjà exactement la même couleur, éviter une boucle inutile
    if (
      Math.abs(targetR - fillRgb.r) < 5 &&
      Math.abs(targetG - fillRgb.g) < 5 &&
      Math.abs(targetB - fillRgb.b) < 5 &&
      targetA > 200
    ) {
      return;
    }

    // Queue BFS pour le remplissage
    const pixelStack = [startX, startY];
    const visited = new Uint8Array(w * h);

    // Fonction de test d'éligibilité d'un pixel
    function canFill(px, py) {
      const idx = py * w + px;
      if (visited[idx]) return false;

      const pOffset = idx * 4;

      // Est-ce un trait noir dans l'outline ?
      const oA = outlineData[pOffset + 3];
      if (oA > 70) {
        const lum = 0.299 * outlineData[pOffset] + 0.587 * outlineData[pOffset + 1] + 0.114 * outlineData[pOffset + 2];
        if (lum < 135) return false; // C'est un contour !
      }

      // Est-ce la couleur cliquée à l'origine sur paintCanvas ?
      const pR = paintData[pOffset];
      const pG = paintData[pOffset + 1];
      const pB = paintData[pOffset + 2];
      const pA = paintData[pOffset + 3];

      // Tolérance pour zones transparentes (non encore coloriées)
      if (targetA < 20) {
        return pA < 20;
      }

      // Pour zones déjà coloriées, vérifier la similitude de couleur
      if (pA < 120) return false;
      const diff = Math.abs(pR - targetR) + Math.abs(pG - targetG) + Math.abs(pB - targetB);
      return diff < 60;
    }

    while (pixelStack.length > 0) {
      const cy = pixelStack.pop();
      const cx = pixelStack.pop();

      let y1 = cy;
      while (y1 >= 0 && canFill(cx, y1)) {
        y1--;
      }
      y1++;

      let spanLeft = false;
      let spanRight = false;

      while (y1 < h && canFill(cx, y1)) {
        const curIdx = y1 * w + cx;
        visited[curIdx] = 1;

        const pOffset = curIdx * 4;
        paintData[pOffset] = fillRgb.r;
        paintData[pOffset + 1] = fillRgb.g;
        paintData[pOffset + 2] = fillRgb.b;
        paintData[pOffset + 3] = 255;

        // Voisin gauche
        if (cx > 0) {
          if (canFill(cx - 1, y1)) {
            if (!spanLeft) {
              pixelStack.push(cx - 1, y1);
              spanLeft = true;
            }
          } else if (spanLeft) {
            spanLeft = false;
          }
        }

        // Voisin droit
        if (cx < w - 1) {
          if (canFill(cx + 1, y1)) {
            if (!spanRight) {
              pixelStack.push(cx + 1, y1);
              spanRight = true;
            }
          } else if (spanRight) {
            spanRight = false;
          }
        }

        y1++;
      }
    }

    paintCtx.putImageData(paintImgData, 0, 0);
    window.soundManager.playPop();
  }

  function hexToRgb(hex) {
    if (hex === 'rainbow') {
      const rgb = hslToRgb((state.rainbowHue % 360) / 360, 1.0, 0.5);
      state.rainbowHue += 30;
      return rgb;
    }
    const cleanHex = hex.replace('#', '');
    const num = parseInt(cleanHex, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  }

  function hslToRgb(h, s, l) {
    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    };
  }

  // ========================================================
  // ÉVÉNEMENTS TACTILES & SOURIS (DESSIN AU DOIGT / PENCIL)
  // ========================================================
  function getCanvasCoords(e) {
    const rect = paintCanvas.getBoundingClientRect();
    const scaleX = paintCanvas.width / rect.width;
    const scaleY = paintCanvas.height / rect.height;

    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if (e.changedTouches && e.changedTouches.length > 0) {
      clientX = e.changedTouches[0].clientX;
      clientY = e.changedTouches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  }

  function getCurrentColor() {
    if (state.isRainbow) {
      state.rainbowHue = (state.rainbowHue + 3) % 360;
      return `hsl(${state.rainbowHue}, 100%, 55%)`;
    }
    return state.color;
  }

  function onPointerDown(e) {
    e.preventDefault();
    const coords = getCanvasCoords(e);
    state.lastX = coords.x;
    state.lastY = coords.y;

    // Outil Remplissage (Pot de peinture)
    if (state.tool === 'bucket') {
      saveSnapshot();
      const col = state.isRainbow ? 'rainbow' : state.color;
      floodFill(coords.x, coords.y, col);
      return;
    }

    // Outil Tampons / Stickers
    if (state.tool === 'sticker') {
      saveSnapshot();
      drawSticker(coords.x, coords.y, state.selectedStamp);
      return;
    }

    // Outils de dessin continu (pinceau, craie, paillettes, gomme)
    saveSnapshot();
    state.isDrawing = true;

    if (state.tool === 'glitter') {
      drawGlitter(coords.x, coords.y);
      window.soundManager.playSparkle();
    } else {
      window.soundManager.playBrush();
      drawStroke(coords.x, coords.y, coords.x, coords.y);
    }
  }

  function onPointerMove(e) {
    if (!state.isDrawing) return;
    e.preventDefault();
    const coords = getCanvasCoords(e);

    if (state.tool === 'glitter') {
      drawGlitter(coords.x, coords.y);
    } else {
      drawStroke(state.lastX, state.lastY, coords.x, coords.y);
    }

    state.lastX = coords.x;
    state.lastY = coords.y;
  }

  function onPointerUp(e) {
    if (state.isDrawing) {
      state.isDrawing = false;
    }
  }

  function drawStroke(x1, y1, x2, y2) {
    paintCtx.save();

    if (state.tool === 'eraser') {
      paintCtx.globalCompositeOperation = 'destination-out';
      paintCtx.strokeStyle = 'rgba(0,0,0,1)';
      paintCtx.lineWidth = state.brushSize * 1.5;
      paintCtx.lineCap = 'round';
      paintCtx.lineJoin = 'round';
    } else if (state.tool === 'crayon') {
      paintCtx.globalCompositeOperation = 'source-over';
      paintCtx.strokeStyle = getCurrentColor();
      paintCtx.lineWidth = state.brushSize;
      paintCtx.lineCap = 'round';
      paintCtx.lineJoin = 'round';
      paintCtx.globalAlpha = 0.65;
    } else {
      // Pinceau standard
      paintCtx.globalCompositeOperation = 'source-over';
      paintCtx.strokeStyle = getCurrentColor();
      paintCtx.lineWidth = state.brushSize;
      paintCtx.lineCap = 'round';
      paintCtx.lineJoin = 'round';
      paintCtx.globalAlpha = 1.0;
    }

    paintCtx.beginPath();
    paintCtx.moveTo(x1, y1);
    paintCtx.lineTo(x2, y2);
    paintCtx.stroke();
    paintCtx.restore();
  }

  function drawGlitter(x, y) {
    const numStars = 4;
    paintCtx.save();
    for (let i = 0; i < numStars; i++) {
      const offsetX = (Math.random() - 0.5) * state.brushSize * 1.6;
      const offsetY = (Math.random() - 0.5) * state.brushSize * 1.6;
      const starSize = Math.random() * (state.brushSize * 0.4) + 6;
      const col = getCurrentColor();

      drawStar(paintCtx, x + offsetX, y + offsetY, 5, starSize, starSize / 2, col);
    }
    paintCtx.restore();
  }

  function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius, color) {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  function drawSticker(x, y, emoji) {
    const size = state.brushSize * 2.2;
    paintCtx.save();
    paintCtx.font = `${size}px "Apple Color Emoji", "Segoe UI Emoji", sans-serif`;
    paintCtx.textAlign = 'center';
    paintCtx.textBaseline = 'middle';
    paintCtx.fillText(emoji, x, y);
    paintCtx.restore();
    window.soundManager.playSparkle();
  }

  // Attachement des écouteurs tactiles et souris sur le wrapper du canvas
  canvasWrapper.addEventListener('touchstart', onPointerDown, { passive: false });
  canvasWrapper.addEventListener('touchmove', onPointerMove, { passive: false });
  window.addEventListener('touchend', onPointerUp, { passive: false });
  window.addEventListener('touchcancel', onPointerUp, { passive: false });

  canvasWrapper.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  // ========================================================
  // CHARGEMENT D'UN MODÈLE DE COLORIAGE
  // ========================================================
  async function loadTemplate(template) {
    state.currentTemplateId = template.id;
    // Réinitialiser le calque de peinture
    paintCtx.clearRect(0, 0, state.canvasWidth, state.canvasHeight);
    state.history = [];
    state.redoHistory = [];
    updateUndoRedoButtons();

    try {
      const img = await window.loadTemplateToImage(template);
      outlineCtx.clearRect(0, 0, state.canvasWidth, state.canvasHeight);
      outlineCtx.drawImage(img, 0, 0, state.canvasWidth, state.canvasHeight);
      window.soundManager.playPop();
    } catch (err) {
      console.error('Erreur chargement template:', err);
    }
  }

  let activeCategory = 'all';

  function populateGallery(category = 'all') {
    activeCategory = category;
    galleryCards.innerHTML = '';
    const filtered = category === 'all' 
      ? COLORING_TEMPLATES 
      : COLORING_TEMPLATES.filter(tpl => tpl.category === category);

    filtered.forEach(tpl => {
      const card = document.createElement('div');
      card.className = 'gallery-card';

      // Aperçu miniature (Image externe ou SVG vectoriel)
      let thumb;
      if (tpl.imageSrc) {
        thumb = document.createElement('img');
        thumb.className = 'gallery-thumb';
        thumb.src = tpl.imageSrc;
        thumb.alt = tpl.title;
      } else {
        thumb = document.createElement('div');
        thumb.className = 'gallery-thumb';
        thumb.innerHTML = tpl.svg;
      }

      const title = document.createElement('h4');
      title.textContent = tpl.title;

      card.appendChild(thumb);
      card.appendChild(title);

      card.addEventListener('click', () => {
        loadTemplate(tpl);
        galleryModal.classList.add('hidden');
      });

      galleryCards.appendChild(card);
    });
  }

  const catTabs = document.querySelectorAll('.cat-tab');
  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      populateGallery(tab.dataset.cat);
      window.soundManager.playPop();
    });
  });

  btnGallery.addEventListener('click', () => {
    galleryModal.classList.remove('hidden');
    window.soundManager.playPop();
  });

  galleryClose.addEventListener('click', () => {
    galleryModal.classList.add('hidden');
  });

  // ========================================================
  // MODALE CONVERTISSEUR D'IMAGE / PHOTO IPAD
  // ========================================================
  btnUpload.addEventListener('click', () => {
    converterModal.classList.remove('hidden');
    window.soundManager.playPop();
  });

  converterClose.addEventListener('click', () => {
    converterModal.classList.add('hidden');
  });

  btnSelectFile.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        sourcePreview.src = event.target.result;
        sourcePreview.style.display = 'block';
        noImageText.style.display = 'none';
        btnApplyConvert.disabled = false;

        converter.setSourceImage(img);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });

  // Gestion des modes de conversion
  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.dataset.mode;

      if (mode === 'direct') {
        sliderThreshold.value = 160;
        valThreshold.textContent = 160;
        sliderThickness.value = 1;
        valThickness.textContent = 'Fin';
        sliderSmoothing.value = 0;
        valSmoothing.textContent = 'Aucun';
      } else if (mode === 'photo') {
        sliderThreshold.value = 140;
        valThreshold.textContent = 140;
        sliderThickness.value = 2;
        valThickness.textContent = 'Moyen';
        sliderSmoothing.value = 1;
        valSmoothing.textContent = 'Normal';
      } else {
        // Smart Enfant
        sliderThreshold.value = 128;
        valThreshold.textContent = 128;
        sliderThickness.value = 2;
        valThickness.textContent = 'Moyen';
        sliderSmoothing.value = 1;
        valSmoothing.textContent = 'Normal';
      }

      converter.updateSettings({
        mode: mode,
        threshold: parseInt(sliderThreshold.value, 10),
        thickness: parseInt(sliderThickness.value, 10),
        smoothing: parseInt(sliderSmoothing.value, 10)
      });
    });
  });

  sliderThreshold.addEventListener('input', (e) => {
    valThreshold.textContent = e.target.value;
    converter.updateSettings({ threshold: parseInt(e.target.value, 10) });
  });

  sliderThickness.addEventListener('input', (e) => {
    const t = parseInt(e.target.value, 10);
    const names = ['', 'Fin', 'Moyen', 'Épais', 'Très épais'];
    valThickness.textContent = names[t] || t;
    converter.updateSettings({ thickness: t });
  });

  sliderSmoothing.addEventListener('input', (e) => {
    const s = parseInt(e.target.value, 10);
    const names = ['Aucun', 'Normal', 'Fort', 'Maxi'];
    valSmoothing.textContent = names[s] || s;
    converter.updateSettings({ smoothing: s });
  });

  // Validation de l'image convertie dans l'espace de coloriage
  btnApplyConvert.addEventListener('click', () => {
    const processedCanvas = converter.processImage(state.canvasWidth, state.canvasHeight);
    if (!processedCanvas) return;

    paintCtx.clearRect(0, 0, state.canvasWidth, state.canvasHeight);
    outlineCtx.clearRect(0, 0, state.canvasWidth, state.canvasHeight);

    // Dessiner le coloriage généré sur outlineCanvas
    outlineCtx.drawImage(processedCanvas, 0, 0, state.canvasWidth, state.canvasHeight);

    state.history = [];
    state.redoHistory = [];
    updateUndoRedoButtons();

    converterModal.classList.add('hidden');
    window.soundManager.playCelebration();
    triggerConfetti();
  });

  // ========================================================
  // ACTIONS GLOBALES (RECOMMENCER, SON, SAUVER, IMPRIMER)
  // ========================================================
  btnClear.addEventListener('click', () => {
    if (confirm('Veux-tu effacer tout ton coloriage et recommencer ? 🎨')) {
      saveSnapshot();
      paintCtx.clearRect(0, 0, state.canvasWidth, state.canvasHeight);
      window.soundManager.playUndo();
    }
  });

  btnSound.addEventListener('click', () => {
    const enabled = window.soundManager.toggleSound();
    soundIcon.textContent = enabled ? '🔊' : '🔇';
  });

  // Imprimer pour AirPrint sur iPad
  btnPrint.addEventListener('click', () => {
    window.soundManager.playPop();
    const backupBg = bgCtx.getImageData(0, 0, state.canvasWidth, state.canvasHeight);
    bgCtx.drawImage(paintCanvas, 0, 0);
    bgCtx.globalCompositeOperation = 'multiply';
    bgCtx.drawImage(outlineCanvas, 0, 0);
    bgCtx.globalCompositeOperation = 'source-over';

    setTimeout(() => {
      window.print();
      setTimeout(() => {
        bgCtx.putImageData(backupBg, 0, 0);
      }, 800);
    }, 200);
  });

  // Sauvegarder dans la photothèque iPad / Télécharger
  btnSave.addEventListener('click', () => {
    window.soundManager.playCelebration();
    triggerConfetti();

    // Fusionner les 3 calques (fond blanc + peinture + contours noirs)
    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = state.canvasWidth;
    exportCanvas.height = state.canvasHeight;
    const expCtx = exportCanvas.getContext('2d');

    expCtx.fillStyle = '#ffffff';
    expCtx.fillRect(0, 0, state.canvasWidth, state.canvasHeight);
    expCtx.drawImage(paintCanvas, 0, 0);
    expCtx.globalCompositeOperation = 'multiply';
    expCtx.drawImage(outlineCanvas, 0, 0);

    const dataUrl = exportCanvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `mon_coloriage_${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

  // ========================================================
  // FEU D'ARTIFICE / CONFETTI DE FÉLICITATION
  // ========================================================
  function triggerConfetti() {
    const confettiCanvas = document.getElementById('confetti-canvas');
    const confCtx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#ff4757', '#ffa502', '#2ed573', '#1e90ff', '#a55eea', '#ff9ff3', '#feca57'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: confettiCanvas.width / 2,
        y: confettiCanvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.8) * 18,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
        alpha: 1.0
      });
    }

    let frame = 0;
    function anim() {
      confCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravité
        p.rotation += p.vRot;
        p.alpha -= 0.012;

        if (p.alpha > 0) {
          alive = true;
          confCtx.save();
          confCtx.globalAlpha = Math.max(0, p.alpha);
          confCtx.translate(p.x, p.y);
          confCtx.rotate((p.rotation * Math.PI) / 180);
          confCtx.fillStyle = p.color;
          confCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          confCtx.restore();
        }
      });

      frame++;
      if (alive && frame < 120) {
        requestAnimationFrame(anim);
      } else {
        confCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      }
    }
    requestAnimationFrame(anim);
  }

  // ========================================================
  // DÉMARRAGE INITIAL
  // ========================================================
  initCanvasDimensions();
  buildPalette();
  populateGallery();

  // Charger le premier modèle par défaut (Bébé Dinosaure)
  if (COLORING_TEMPLATES.length > 0) {
    loadTemplate(COLORING_TEMPLATES[0]);
  }

  // Recalcul sur rotation d'écran iPad (portrait <-> paysage)
  window.addEventListener('resize', () => {
    // Si l'utilisateur a déjà peint, on sauvegarde la peinture
    const tempPaint = document.createElement('canvas');
    tempPaint.width = paintCanvas.width;
    tempPaint.height = paintCanvas.height;
    tempPaint.getContext('2d').drawImage(paintCanvas, 0, 0);

    const tempOutline = document.createElement('canvas');
    tempOutline.width = outlineCanvas.width;
    tempOutline.height = outlineCanvas.height;
    tempOutline.getContext('2d').drawImage(outlineCanvas, 0, 0);

    initCanvasDimensions();

    paintCtx.drawImage(tempPaint, 0, 0, state.canvasWidth, state.canvasHeight);
    outlineCtx.drawImage(tempOutline, 0, 0, state.canvasWidth, state.canvasHeight);
  });
});
