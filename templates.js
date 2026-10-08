/* ========================================================
   Modèles de dessins prêts à colorier pour enfants (4 ans)
   Illustrations vectorielles nettes avec contours épais
   ======================================================== */

const COLORING_TEMPLATES = [
  {
    id: 'dino',
    title: '🦖 Bébé Dinosaure',
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#ffffff"/>
      <!-- Sol et herbe -->
      <path d="M 0 520 Q 300 490 600 520 L 600 600 L 0 600 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8" stroke-linecap="round"/>
      <path d="M 50 510 L 65 470 L 80 510" fill="none" stroke="#1e293b" stroke-width="7" stroke-linejoin="round"/>
      <path d="M 520 510 L 535 465 L 550 510" fill="none" stroke="#1e293b" stroke-width="7" stroke-linejoin="round"/>
      
      <!-- Queue -->
      <path d="M 180 430 Q 80 440 60 360 Q 120 370 190 390" fill="#ffffff" stroke="#1e293b" stroke-width="8" stroke-linejoin="round"/>
      
      <!-- Pattes arrières -->
      <path d="M 180 450 L 170 530 Q 200 545 230 530 L 235 460" fill="#ffffff" stroke="#1e293b" stroke-width="8" stroke-linejoin="round"/>
      <path d="M 290 460 L 290 530 Q 320 545 350 530 L 340 450" fill="#ffffff" stroke="#1e293b" stroke-width="8" stroke-linejoin="round"/>
      
      <!-- Corps -->
      <path d="M 180 430 Q 180 340 250 320 Q 350 310 370 410 Q 370 480 250 480 Q 190 480 180 430 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Ventre -->
      <path d="M 230 450 Q 230 360 320 350 Q 340 430 280 470" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Pattes avant -->
      <path d="M 320 370 Q 370 380 370 400 Q 350 410 320 390" fill="#ffffff" stroke="#1e293b" stroke-width="7" stroke-linejoin="round"/>

      <!-- Cou et Tête -->
      <path d="M 280 320 Q 310 220 340 180 Q 420 160 480 210 Q 490 270 420 280 Q 360 290 350 330" fill="#ffffff" stroke="#1e293b" stroke-width="8" stroke-linejoin="round"/>
      
      <!-- Œil mignon -->
      <circle cx="410" cy="210" r="18" fill="#1e293b"/>
      <circle cx="415" cy="204" r="6" fill="#ffffff"/>
      
      <!-- Sourire -->
      <path d="M 430 245 Q 450 255 465 240" fill="none" stroke="#1e293b" stroke-width="7" stroke-linecap="round"/>

      <!-- Épines dorsales -->
      <path d="M 220 320 L 210 280 L 245 305" fill="#ffffff" stroke="#1e293b" stroke-width="7" stroke-linejoin="round"/>
      <path d="M 260 275 L 260 235 L 290 260" fill="#ffffff" stroke="#1e293b" stroke-width="7" stroke-linejoin="round"/>
      <path d="M 305 220 L 310 180 L 335 205" fill="#ffffff" stroke="#1e293b" stroke-width="7" stroke-linejoin="round"/>

      <!-- Nuage et soleil -->
      <circle cx="100" cy="110" r="45" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <path d="M 440 90 Q 460 70 490 85 Q 520 70 540 95 Q 560 115 540 135 Q 500 145 450 130 Q 430 110 440 90 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
    </svg>`
  },
  {
    id: 'fusee',
    title: '🚀 Fusée dans l\'espace',
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#ffffff"/>
      <!-- Planète en bas à gauche -->
      <circle cx="100" cy="500" r="70" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <path d="M 40 500 Q 100 460 170 520" fill="none" stroke="#1e293b" stroke-width="7"/>
      
      <!-- Planète avec anneau en haut à droite -->
      <circle cx="490" cy="120" r="45" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <ellipse cx="490" cy="120" rx="75" ry="18" fill="none" stroke="#1e293b" stroke-width="6" transform="rotate(-20 490 120)"/>

      <!-- Étoiles mignonnes -->
      <path d="M 100 180 L 108 200 L 130 200 L 112 214 L 118 235 L 100 220 L 82 235 L 88 214 L 70 200 L 92 200 Z" fill="#ffffff" stroke="#1e293b" stroke-width="6" stroke-linejoin="round"/>
      <path d="M 480 380 L 486 395 L 502 395 L 488 406 L 493 422 L 480 410 L 467 422 L 472 406 L 458 395 L 474 395 Z" fill="#ffffff" stroke="#1e293b" stroke-width="6" stroke-linejoin="round"/>
      <circle cx="260" cy="100" r="8" fill="#1e293b"/>
      <circle cx="150" cy="340" r="7" fill="#1e293b"/>
      <circle cx="400" cy="480" r="7" fill="#1e293b"/>

      <!-- Flammes de la fusée -->
      <path d="M 270 410 Q 300 520 300 550 Q 300 520 330 410 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <path d="M 285 410 Q 300 480 300 500 Q 300 480 315 410 Z" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>

      <!-- Ailerons latéraux -->
      <path d="M 230 330 Q 180 380 200 420 L 250 400 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8" stroke-linejoin="round"/>
      <path d="M 370 330 Q 420 380 400 420 L 350 400 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8" stroke-linejoin="round"/>

      <!-- Corps de la fusée -->
      <path d="M 250 400 L 250 280 Q 250 150 300 110 Q 350 150 350 280 L 350 400 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8" stroke-linejoin="round"/>
      
      <!-- Pointe -->
      <path d="M 265 200 Q 300 130 300 110 Q 300 130 335 200 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Hublot avec astronaute / reflet -->
      <circle cx="300" cy="270" r="38" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <circle cx="300" cy="270" r="26" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
    </svg>`
  },
  {
    id: 'chat',
    title: '🐱 Chaton rigolo',
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#ffffff"/>
      <!-- Pelote de laine -->
      <circle cx="480" cy="490" r="45" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <path d="M 450 490 Q 480 460 510 490 Q 480 520 460 480" fill="none" stroke="#1e293b" stroke-width="5"/>
      <path d="M 440 500 Q 380 520 360 480" fill="none" stroke="#1e293b" stroke-width="5"/>

      <!-- Queue en l'air -->
      <path d="M 180 440 Q 110 400 120 300 Q 140 280 155 310 Q 145 380 210 410" fill="#ffffff" stroke="#1e293b" stroke-width="8" stroke-linejoin="round"/>

      <!-- Corps -->
      <ellipse cx="290" cy="430" rx="110" ry="90" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      
      <!-- Pattes avant -->
      <rect x="240" y="460" width="40" height="65" rx="20" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <rect x="310" y="460" width="40" height="65" rx="20" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Tête -->
      <circle cx="300" cy="250" r="105" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Oreilles -->
      <polygon points="215,190 230,95 295,160" fill="#ffffff" stroke="#1e293b" stroke-width="8" stroke-linejoin="round"/>
      <polygon points="385,190 370,95 305,160" fill="#ffffff" stroke="#1e293b" stroke-width="8" stroke-linejoin="round"/>
      <polygon points="230,175 240,120 280,165" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <polygon points="370,175 360,120 320,165" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>

      <!-- Yeux grands et mignons -->
      <circle cx="260" cy="240" r="22" fill="#1e293b"/>
      <circle cx="267" cy="233" r="8" fill="#ffffff"/>
      <circle cx="340" cy="240" r="22" fill="#1e293b"/>
      <circle cx="347" cy="233" r="8" fill="#ffffff"/>

      <!-- Petit nez triangulaire -->
      <polygon points="295,270 305,270 300,278" fill="#1e293b"/>

      <!-- Bouche de chat -->
      <path d="M 285 285 Q 300 295 300 280 Q 300 295 315 285" fill="none" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>

      <!-- Moustaches -->
      <line x1="240" y1="270" x2="170" y2="255" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
      <line x1="240" y1="285" x2="165" y2="290" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
      <line x1="360" y1="270" x2="430" y2="255" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
      <line x1="360" y1="285" x2="435" y2="290" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>

      <!-- Nœud papillon mignon -->
      <polygon points="275,345 300,360 275,375" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <polygon points="325,345 300,360 325,375" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <circle cx="300" cy="360" r="8" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
    </svg>`
  },
  {
    id: 'papillon',
    title: '🦋 Papillon & Fleurs',
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#ffffff"/>
      <!-- Fleur gauche -->
      <circle cx="120" cy="480" r="22" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <path d="M 120 458 Q 120 420 100 440 Q 80 460 105 475" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <path d="M 142 480 Q 180 480 160 460 Q 140 440 125 465" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <path d="M 120 502 Q 120 540 140 520 Q 160 500 135 485" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <path d="M 98 480 Q 60 480 80 500 Q 100 520 115 495" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>

      <!-- Fleur droite -->
      <circle cx="480" cy="480" r="22" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <circle cx="480" cy="445" r="16" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <circle cx="515" cy="480" r="16" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <circle cx="480" cy="515" r="16" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <circle cx="445" cy="480" r="16" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>

      <!-- Ailes supérieures papillon -->
      <path d="M 290 230 Q 160 80 90 170 Q 50 260 270 290 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <path d="M 310 230 Q 440 80 510 170 Q 550 260 330 290 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Ailes inférieures papillon -->
      <path d="M 285 300 Q 140 330 150 420 Q 210 470 290 350 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <path d="M 315 300 Q 460 330 450 420 Q 390 470 310 350 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Motifs à colorier dans les ailes -->
      <circle cx="160" cy="200" r="26" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <circle cx="440" cy="200" r="26" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <circle cx="210" cy="380" r="20" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <circle cx="390" cy="380" r="20" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>

      <!-- Corps du papillon -->
      <ellipse cx="300" cy="310" rx="20" ry="70" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <circle cx="300" cy="225" r="28" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Yeux et sourire -->
      <circle cx="292" cy="222" r="5" fill="#1e293b"/>
      <circle cx="308" cy="222" r="5" fill="#1e293b"/>
      <path d="M 293 234 Q 300 242 307 234" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>

      <!-- Antennes en spirale -->
      <path d="M 292 200 Q 270 140 245 155 Q 235 170 250 175" fill="none" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
      <path d="M 308 200 Q 330 140 355 155 Q 365 170 350 175" fill="none" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'voiture',
    title: '🚗 Petite Voiture',
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#ffffff"/>
      <!-- Route -->
      <line x1="30" y1="480" x2="570" y2="480" stroke="#1e293b" stroke-width="8" stroke-linecap="round"/>
      <line x1="80" y1="520" x2="160" y2="520" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
      <line x1="260" y1="520" x2="340" y2="520" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
      <line x1="440" y1="520" x2="520" y2="520" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>

      <!-- Roue arrière -->
      <circle cx="180" cy="440" r="48" fill="#ffffff" stroke="#1e293b" stroke-width="9"/>
      <circle cx="180" cy="440" r="22" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Roue avant -->
      <circle cx="420" cy="440" r="48" fill="#ffffff" stroke="#1e293b" stroke-width="9"/>
      <circle cx="420" cy="440" r="22" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Carrosserie de la voiture -->
      <path d="M 100 440 L 132 440 Q 180 390 228 440 L 372 440 Q 420 390 468 440 L 510 440 Q 530 440 530 400 L 500 370 L 410 360 L 360 230 Q 340 210 240 210 L 160 330 L 90 350 Q 70 370 70 410 Q 70 440 100 440 Z" fill="#ffffff" stroke="#1e293b" stroke-width="9" stroke-linejoin="round"/>

      <!-- Vitres -->
      <path d="M 235 240 L 175 330 L 285 330 L 285 240 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7" stroke-linejoin="round"/>
      <path d="M 305 240 L 305 330 L 400 330 L 350 240 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7" stroke-linejoin="round"/>

      <!-- Phares avant et arrière -->
      <rect x="500" y="380" width="22" height="25" rx="6" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <rect x="75" y="375" width="16" height="25" rx="5" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>

      <!-- Nuage de fumée mignon au pot d'échappement -->
      <circle cx="50" cy="425" r="14" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <circle cx="30" cy="415" r="9" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
    </svg>`
  },
  {
    id: 'licorne',
    title: '🦄 Licorne féerique',
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#ffffff"/>
      <!-- Grand nuage en bas -->
      <path d="M 120 510 Q 150 450 220 460 Q 260 410 330 430 Q 390 400 450 440 Q 520 450 510 520 Q 480 560 300 550 Q 140 560 120 510 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Étoile magique -->
      <polygon points="120,130 127,150 148,150 131,162 137,182 120,170 103,182 109,162 92,150 113,150" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      
      <!-- Corne magique -->
      <polygon points="260,110 320,180 270,200" fill="#ffffff" stroke="#1e293b" stroke-width="7" stroke-linejoin="round"/>
      <line x1="270" y1="135" x2="295" y2="155" stroke="#1e293b" stroke-width="5"/>
      <line x1="280" y1="165" x2="310" y2="185" stroke="#1e293b" stroke-width="5"/>

      <!-- Oreille -->
      <polygon points="340,190 375,130 380,210" fill="#ffffff" stroke="#1e293b" stroke-width="7" stroke-linejoin="round"/>

      <!-- Tête et Museau -->
      <path d="M 330 200 Q 250 200 210 240 Q 180 280 200 320 Q 230 340 260 320 Q 290 310 320 340 L 360 440 L 430 440 L 400 290 Q 400 220 330 200 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8" stroke-linejoin="round"/>

      <!-- Œil endormi / cils mignons -->
      <path d="M 280 265 Q 295 280 310 265" fill="none" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
      <line x1="295" y1="275" x2="295" y2="285" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
      <line x1="305" y1="272" x2="310" y2="282" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>

      <!-- Narienne et sourire -->
      <circle cx="215" cy="285" r="4" fill="#1e293b"/>
      <path d="M 215 305 Q 225 315 235 305" fill="none" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>

      <!-- Crinière bouclée -->
      <path d="M 370 210 Q 440 220 420 280 Q 480 300 450 360 Q 500 390 460 440" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
    </svg>`
  }
];

// Helper pour convertir un SVG en image exploitable par Canvas
function loadSvgToImage(svgString) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    img.onload = () => {
      resolve(img);
      // Ne pas révoquer immédiatement pour éviter un bug Safari
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    };
    img.onerror = reject;
    img.src = url;
  });
}
