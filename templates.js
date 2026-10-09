/* ========================================================
   Modèles de dessins prêts à colorier
   Catégories : Pat' Patrouille, Lego Ninjago, Dinosaures Prédateurs, Classiques
   ======================================================== */

const COLORING_TEMPLATES = [
  // ------------------------------------------------------
  // LA PAT' PATROUILLE
  // ------------------------------------------------------
  {
    id: 'chase',
    category: 'patrouille',
    title: '🐶 Chase le Policier',
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#ffffff"/>
      <!-- Fond : Étoiles et gyrophare -->
      <polygon points="90,70 96,88 115,88 100,99 105,117 90,106 75,117 80,99 65,88 84,88" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <polygon points="510,90 516,108 535,108 520,119 525,137 510,126 495,137 500,119 485,108 504,108" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <rect x="260" y="30" width="80" height="40" rx="12" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <line x1="285" y1="30" x2="285" y2="70" stroke="#1e293b" stroke-width="6"/>
      <line x1="315" y1="30" x2="315" y2="70" stroke="#1e293b" stroke-width="6"/>

      <!-- Sac à dos policier (Pup pack) -->
      <rect x="170" y="340" width="70" height="100" rx="20" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <rect x="360" y="340" width="70" height="100" rx="20" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Queue qui remue -->
      <path d="M 180 430 Q 120 400 110 350 Q 130 340 150 380 Q 165 410 180 430 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Corps et uniforme policier -->
      <path d="M 220 340 L 210 490 Q 210 540 260 540 L 270 480 L 330 480 L 340 540 Q 390 540 390 490 L 380 340 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      
      <!-- Pattes avant et coussinets -->
      <path d="M 225 480 L 220 540 Q 245 555 270 540 L 270 480 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <path d="M 330 480 L 330 540 Q 355 555 380 540 L 375 480 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Fermeture éclair & col de l'uniforme -->
      <path d="M 270 340 L 270 430 L 330 430 L 330 340" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <line x1="300" y1="340" x2="300" y2="430" stroke="#1e293b" stroke-width="6" stroke-dasharray="10 6"/>

      <!-- Écusson médaille Pat' Patrouille étoile de police -->
      <polygon points="300,380 324,395 315,425 285,425 276,395" fill="#ffffff" stroke="#1e293b" stroke-width="7" stroke-linejoin="round"/>
      <polygon points="300,390 304,402 316,402 306,410 310,420 300,413 290,420 294,410 284,402 296,402" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>

      <!-- Tête de berger allemand -->
      <ellipse cx="300" cy="245" rx="100" ry="85" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Grandes oreilles dressées -->
      <path d="M 215 210 Q 140 140 160 80 Q 220 120 235 180 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <path d="M 180 140 Q 170 100 185 95 Q 210 120 215 170" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <path d="M 385 210 Q 460 140 440 80 Q 380 120 365 180 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <path d="M 420 140 Q 430 100 415 95 Q 390 120 385 170" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>

      <!-- Casquette de police -->
      <path d="M 210 185 Q 300 145 390 185 Q 400 125 300 100 Q 200 125 210 185 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Visière casquette -->
      <path d="M 205 185 Q 300 160 395 185 Q 410 205 390 205 Q 300 185 210 205 Q 190 205 205 185 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <!-- Écusson sur la casquette -->
      <polygon points="300,120 318,135 312,155 288,155 282,135" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <circle cx="300" cy="138" r="6" fill="#1e293b"/>

      <!-- Museau et joues douces -->
      <ellipse cx="300" cy="275" rx="50" ry="36" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <!-- Truffe de chiot -->
      <path d="M 285 255 Q 300 248 315 255 Q 318 270 300 274 Q 282 270 285 255 Z" fill="#1e293b"/>
      <!-- Bouche souriante et langue -->
      <path d="M 288 275 Q 300 285 300 275 Q 300 285 312 275" fill="none" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
      <path d="M 292 282 Q 300 300 308 282" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>

      <!-- Yeux grands et expressifs -->
      <ellipse cx="260" cy="225" rx="18" ry="24" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <circle cx="260" cy="225" r="13" fill="#1e293b"/>
      <circle cx="264" cy="220" r="5" fill="#ffffff"/>

      <ellipse cx="340" cy="225" rx="18" ry="24" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <circle cx="340" cy="225" r="13" fill="#1e293b"/>
      <circle cx="344" cy="220" r="5" fill="#ffffff"/>

      <!-- Sourcils expressifs -->
      <path d="M 245 195 Q 260 188 275 195" fill="none" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
      <path d="M 325 195 Q 340 188 355 195" fill="none" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'marcus',
    category: 'patrouille',
    title: '🚒 Marcus le Pompier',
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#ffffff"/>
      <!-- Fond : Gouttes d'eau et borne d'incendie -->
      <path d="M 100 130 Q 100 90 85 70 Q 70 90 70 130 A 15 15 0 0 0 100 130 Z" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <path d="M 520 150 Q 520 110 505 90 Q 490 110 490 150 A 15 15 0 0 0 520 150 Z" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <!-- Borne d'incendie en bas à gauche -->
      <path d="M 60 480 L 100 480 L 100 540 L 60 540 Z" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <path d="M 70 480 Q 80 450 90 480 Z" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <circle cx="80" cy="505" r="10" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>

      <!-- Corps et uniforme de pompier -->
      <path d="M 220 340 L 210 490 Q 210 540 260 540 L 270 480 L 330 480 L 340 540 Q 390 540 390 490 L 380 340 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Pattes avant et griffes douces -->
      <path d="M 225 480 L 220 540 Q 245 555 270 540 L 270 480 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <path d="M 330 480 L 330 540 Q 355 555 380 540 L 375 480 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Taches de dalmatien sur les pattes et le corps -->
      <circle cx="235" cy="510" r="10" fill="#1e293b"/>
      <circle cx="360" cy="510" r="9" fill="#1e293b"/>
      <ellipse cx="240" cy="390" rx="12" ry="16" fill="#1e293b"/>
      <ellipse cx="360" cy="400" rx="14" ry="12" fill="#1e293b"/>

      <!-- Veste de pompier & bandes réfléchissantes -->
      <line x1="220" y1="450" x2="380" y2="450" stroke="#1e293b" stroke-width="8"/>
      <line x1="220" y1="465" x2="380" y2="465" stroke="#1e293b" stroke-width="6"/>

      <!-- Écusson médaille Pat' Patrouille Flamme de pompier -->
      <polygon points="300,375 325,390 316,420 284,420 275,390" fill="#ffffff" stroke="#1e293b" stroke-width="7" stroke-linejoin="round"/>
      <path d="M 300 388 Q 312 402 306 414 Q 296 414 294 404 Q 292 408 288 410 Q 288 398 300 388 Z" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>

      <!-- Tête de dalmatien -->
      <ellipse cx="300" cy="250" rx="98" ry="85" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Taches de dalmatien sur la tête -->
      <ellipse cx="230" cy="250" rx="14" ry="18" fill="#1e293b"/>
      <circle cx="370" cy="270" r="12" fill="#1e293b"/>

      <!-- Grandes oreilles tombantes de dalmatien -->
      <path d="M 215 195 Q 160 210 150 280 Q 155 330 195 320 Q 225 310 225 240 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <ellipse cx="180" cy="280" rx="16" ry="24" fill="#1e293b"/>
      <path d="M 385 195 Q 440 210 450 280 Q 445 330 405 320 Q 375 310 375 240 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <ellipse cx="420" cy="275" rx="15" ry="22" fill="#1e293b"/>

      <!-- Casque de pompier rouge -->
      <path d="M 205 185 Q 300 135 395 185 Q 405 105 300 85 Q 195 105 205 185 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Bord du casque -->
      <path d="M 195 185 Q 300 165 405 185 Q 425 205 395 205 Q 300 185 205 205 Q 175 205 195 185 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <!-- Écusson flamme sur le casque -->
      <polygon points="300,105 318,120 312,142 288,142 282,120" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <path d="M 300 115 Q 308 125 304 135 Q 296 135 294 128 Q 292 130 290 132 Q 290 124 300 115 Z" fill="#ffffff" stroke="#1e293b" stroke-width="3"/>

      <!-- Museau et truffe -->
      <ellipse cx="300" cy="278" rx="48" ry="34" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <path d="M 285 260 Q 300 252 315 260 Q 318 273 300 277 Q 282 273 285 260 Z" fill="#1e293b"/>
      <!-- Grand sourire amusé -->
      <path d="M 285 278 Q 300 290 300 278 Q 300 290 315 278" fill="none" stroke="#1e293b" stroke-width="6" stroke-linecap="round"/>
      <path d="M 290 286 Q 300 308 310 286" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>

      <!-- Yeux rieurs -->
      <ellipse cx="260" cy="225" rx="18" ry="24" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <circle cx="260" cy="225" r="13" fill="#1e293b"/>
      <circle cx="264" cy="220" r="5" fill="#ffffff"/>

      <ellipse cx="340" cy="225" rx="18" ry="24" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <circle cx="340" cy="225" r="13" fill="#1e293b"/>
      <circle cx="344" cy="220" r="5" fill="#ffffff"/>
    </svg>`
  },
  {
    id: 'stella',
    category: 'patrouille',
    title: '🚁 Stella l\'Aviatrice',
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#ffffff"/>
      <!-- Nuages dans le ciel -->
      <path d="M 80 120 Q 110 80 150 100 Q 190 70 220 110 Q 250 140 210 160 Q 120 170 80 120 Z" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <path d="M 400 90 Q 430 60 470 75 Q 510 55 530 90 Q 560 120 520 140 Q 450 145 400 90 Z" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>

      <!-- Ailes de vol déployées (Pup pack ailes d'hélicoptère) -->
      <path d="M 230 320 Q 90 260 50 330 Q 100 390 220 380 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <line x1="80" y1="330" x2="190" y2="350" stroke="#1e293b" stroke-width="6"/>
      <path d="M 370 320 Q 510 260 550 330 Q 500 390 380 380 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <line x1="520" y1="330" x2="410" y2="350" stroke="#1e293b" stroke-width="6"/>

      <!-- Corps et combinaison rose -->
      <path d="M 230 350 L 220 490 Q 220 540 270 540 L 280 480 L 320 480 L 330 540 Q 380 540 380 490 L 370 350 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <path d="M 235 480 L 230 540 Q 255 555 280 540 L 280 480 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <path d="M 320 480 L 320 540 Q 345 555 370 540 L 365 480 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Écusson hélice d'hélicoptère -->
      <polygon points="300,380 324,395 315,425 285,425 276,395" fill="#ffffff" stroke="#1e293b" stroke-width="7" stroke-linejoin="round"/>
      <ellipse cx="300" cy="405" rx="16" ry="5" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
      <ellipse cx="300" cy="405" rx="5" ry="16" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>

      <!-- Tête mignonne de Cockapoo -->
      <ellipse cx="300" cy="255" rx="95" ry="80" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Longues oreilles duveteuses qui volent dans le vent -->
      <path d="M 215 210 Q 130 200 120 320 Q 150 380 200 330 Q 225 300 225 240 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <path d="M 385 210 Q 470 200 480 320 Q 450 380 400 330 Q 375 300 375 240 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Lunettes de pilote aviateur sur le front -->
      <path d="M 210 180 Q 300 165 390 180 L 380 205 Q 300 190 220 205 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <ellipse cx="255" cy="190" rx="30" ry="20" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <ellipse cx="345" cy="190" rx="30" ry="20" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <line x1="285" y1="190" x2="315" y2="190" stroke="#1e293b" stroke-width="7"/>

      <!-- Museau et truffe -->
      <ellipse cx="300" cy="285" rx="44" ry="30" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <path d="M 288 270 Q 300 264 312 270 Q 315 280 300 284 Q 285 280 288 270 Z" fill="#1e293b"/>
      <path d="M 288 285 Q 300 295 300 285 Q 300 295 312 285" fill="none" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>

      <!-- Yeux doux aux longs cils -->
      <ellipse cx="260" cy="240" rx="17" ry="22" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <circle cx="260" cy="240" r="12" fill="#1e293b"/>
      <circle cx="264" cy="235" r="5" fill="#ffffff"/>
      <path d="M 245 228 L 235 220" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
      <path d="M 248 236 L 236 235" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>

      <ellipse cx="340" cy="240" rx="17" ry="22" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <circle cx="340" cy="240" r="12" fill="#1e293b"/>
      <circle cx="344" cy="235" r="5" fill="#ffffff"/>
      <path d="M 355 228 L 365 220" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
      <path d="M 352 236 L 364 235" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
    </svg>`
  },

  // ------------------------------------------------------
  // LEGO NINJAGO
  // ------------------------------------------------------
  {
    id: 'kai',
    category: 'ninjago',
    title: '🥷 Kai le Ninja du Feu',
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#ffffff"/>
      <!-- Flammes élémentaires d'arrière-plan -->
      <path d="M 90 520 Q 70 380 120 320 Q 90 390 140 430 Q 120 350 170 300 Q 150 420 180 520 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <path d="M 510 520 Q 530 380 480 320 Q 510 390 460 430 Q 480 350 430 300 Q 450 420 420 520 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Katanas dans le dos en diagonale -->
      <!-- Katana gauche -->
      <line x1="80" y1="80" x2="260" y2="280" stroke="#1e293b" stroke-width="12" stroke-linecap="round"/>
      <line x1="80" y1="80" x2="260" y2="280" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
      <rect x="70" y="70" width="30" height="30" rx="4" fill="#ffffff" stroke="#1e293b" stroke-width="6" transform="rotate(-45 85 85)"/>
      <rect x="50" y="45" width="22" height="40" rx="5" fill="#ffffff" stroke="#1e293b" stroke-width="6" transform="rotate(-45 61 65)"/>

      <!-- Katana droit -->
      <line x1="520" y1="80" x2="340" y2="280" stroke="#1e293b" stroke-width="12" stroke-linecap="round"/>
      <line x1="520" y1="80" x2="340" y2="280" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
      <rect x="500" y="70" width="30" height="30" rx="4" fill="#ffffff" stroke="#1e293b" stroke-width="6" transform="rotate(45 515 85)"/>
      <rect x="528" y="45" width="22" height="40" rx="5" fill="#ffffff" stroke="#1e293b" stroke-width="6" transform="rotate(45 539 65)"/>

      <!-- Jambes de figurine Lego -->
      <rect x="235" y="430" width="55" height="110" rx="6" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <rect x="310" y="430" width="55" height="110" rx="6" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <rect x="235" y="515" width="55" height="25" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <rect x="310" y="515" width="55" height="25" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Torse trapézoïdal Lego (Tunique de Ninja) -->
      <polygon points="230,250 370,250 395,430 205,430" fill="#ffffff" stroke="#1e293b" stroke-width="9" stroke-linejoin="round"/>
      <!-- Ceinture et ruban de ninja -->
      <rect x="210" y="380" width="180" height="26" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <path d="M 285 406 L 275 450 L 295 450 L 300 406" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <path d="M 300 406 L 310 445 L 325 440 L 315 406" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      
      <!-- Motif d'armure / symbole du dragon de feu -->
      <path d="M 255 250 L 290 340 L 300 380" stroke="#1e293b" stroke-width="6"/>
      <path d="M 345 250 L 310 340 L 300 380" stroke="#1e293b" stroke-width="6"/>
      <circle cx="300" cy="310" r="22" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <!-- Petite flamme dans le médaillon -->
      <path d="M 300 295 Q 308 308 304 320 Q 296 320 295 312 Q 292 315 290 318 Q 290 306 300 295 Z" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>

      <!-- Bras articulés Lego -->
      <!-- Bras gauche -->
      <path d="M 230 260 Q 170 300 175 370" fill="none" stroke="#1e293b" stroke-width="26" stroke-linecap="round"/>
      <path d="M 230 260 Q 170 300 175 370" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round"/>
      <!-- Main pince Lego gauche -->
      <path d="M 160 370 Q 130 380 145 410 Q 175 420 185 390" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Bras droit -->
      <path d="M 370 260 Q 430 300 425 370" fill="none" stroke="#1e293b" stroke-width="26" stroke-linecap="round"/>
      <path d="M 370 260 Q 430 300 425 370" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round"/>
      <!-- Main pince Lego droite -->
      <path d="M 440 370 Q 470 380 455 410 Q 425 420 415 390" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Tête de figurine Lego cylindrique -->
      <rect x="250" y="140" width="100" height="110" rx="20" fill="#ffffff" stroke="#1e293b" stroke-width="9"/>
      <rect x="275" y="125" width="50" height="20" rx="6" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Cagoule / Masque de Ninja Ninjago -->
      <path d="M 235 150 Q 300 115 365 150 L 370 230 Q 300 255 230 230 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Bandeau frontal avec insigne ninja -->
      <path d="M 240 140 Q 300 120 360 140 L 362 175 Q 300 155 238 175 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <polygon points="300,140 310,152 300,165 290,152" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>

      <!-- Fente des yeux du masque ninja -->
      <rect x="255" y="175" width="90" height="36" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <!-- Yeux déterminés et cicatrice de Kai -->
      <path d="M 268 185 L 285 192" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
      <circle cx="277" cy="196" r="6" fill="#1e293b"/>
      <!-- Cicatrice emblématique de Kai sur l'œil droit -->
      <line x1="328" y1="178" x2="322" y2="204" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
      <path d="M 332 185 L 315 192" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
      <circle cx="323" cy="196" r="6" fill="#1e293b"/>
    </svg>`
  },
  {
    id: 'lloyd',
    category: 'ninjago',
    title: '⚔️ Lloyd le Ninja Vert',
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#ffffff"/>
      <!-- Tourbillon d'énergie Spinjitzu en bas -->
      <path d="M 120 540 Q 300 480 480 540 Q 560 570 300 580 Q 40 570 120 540 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <path d="M 160 520 Q 300 490 440 520" fill="none" stroke="#1e293b" stroke-width="6"/>
      <path d="M 200 500 Q 300 480 400 500" fill="none" stroke="#1e293b" stroke-width="5"/>

      <!-- Deux katanas dorés tenus en mains -->
      <line x1="70" y1="200" x2="220" y2="350" stroke="#1e293b" stroke-width="12" stroke-linecap="round"/>
      <line x1="70" y1="200" x2="220" y2="350" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
      <line x1="530" y1="200" x2="380" y2="350" stroke="#1e293b" stroke-width="12" stroke-linecap="round"/>
      <line x1="530" y1="200" x2="380" y2="350" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>

      <!-- Jambes de figurine Lego -->
      <rect x="235" y="420" width="55" height="100" rx="6" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <rect x="310" y="420" width="55" height="100" rx="6" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <rect x="235" y="495" width="55" height="25" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <rect x="310" y="495" width="55" height="25" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Torse Lego (Tunique verte de Lloyd) -->
      <polygon points="230,240 370,240 395,420 205,420" fill="#ffffff" stroke="#1e293b" stroke-width="9" stroke-linejoin="round"/>
      <!-- Ceinture noire et dorée -->
      <rect x="210" y="375" width="180" height="26" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <!-- Grand dragon doré sur le torse -->
      <path d="M 270 260 Q 330 280 290 320 Q 340 340 320 370" fill="none" stroke="#1e293b" stroke-width="7"/>
      <polygon points="300,265 315,280 300,295 285,280" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>

      <!-- Bras Lego gauche en posture d'action -->
      <path d="M 230 250 Q 150 280 170 350" fill="none" stroke="#1e293b" stroke-width="26" stroke-linecap="round"/>
      <path d="M 230 250 Q 150 280 170 350" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round"/>
      <path d="M 155 350 Q 130 360 145 390 Q 175 400 185 370" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Bras Lego droit -->
      <path d="M 370 250 Q 450 280 430 350" fill="none" stroke="#1e293b" stroke-width="26" stroke-linecap="round"/>
      <path d="M 370 250 Q 450 280 430 350" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round"/>
      <path d="M 445 350 Q 470 360 455 390 Q 425 400 415 370" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Tête et masque de Lloyd -->
      <rect x="250" y="130" width="100" height="110" rx="20" fill="#ffffff" stroke="#1e293b" stroke-width="9"/>
      <rect x="275" y="115" width="50" height="20" rx="6" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Cagoule verte de Ninja -->
      <path d="M 235 140 Q 300 105 365 140 L 370 220 Q 300 245 230 220 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Visière avec yeux verts étincelants -->
      <rect x="255" y="165" width="90" height="36" rx="8" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <path d="M 268 175 L 285 182" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
      <circle cx="277" cy="186" r="6" fill="#1e293b"/>
      <path d="M 332 175 L 315 182" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
      <circle cx="323" cy="186" r="6" fill="#1e293b"/>
    </svg>`
  },

  // ------------------------------------------------------
  // DINOSAURES PRÉDATEURS RÉALISTES (PLUS DÉTAILLÉS & ÂGÉS)
  // ------------------------------------------------------
  {
    id: 'trex-predator',
    category: 'predators',
    title: '🦖 T-Rex Prédateur Féroce',
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#ffffff"/>
      <!-- Paysage crétacé : Volcan en éruption et ptérodactyle -->
      <polygon points="50,420 180,240 280,420" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <path d="M 160 240 Q 180 210 180 160 Q 200 210 200 240" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>
      <!-- Nuage de fumée volcanique -->
      <circle cx="180" cy="140" r="28" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <circle cx="210" cy="110" r="32" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <circle cx="240" cy="90" r="26" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>

      <!-- Ptérodactyle au loin dans le ciel -->
      <path d="M 460 120 Q 480 90 510 110 L 490 125 Q 520 115 540 135 L 500 135 Z" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>

      <!-- Sol rocheux et fougères préhistoriques -->
      <path d="M 0 540 Q 250 510 600 540 L 600 600 L 0 600 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Fougère géante à droite -->
      <path d="M 540 540 Q 560 460 510 420 Q 570 480 540 540" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <path d="M 540 500 Q 580 450 590 410 Q 560 460 540 500" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>

      <!-- Queue massive du T-Rex en contrepoids -->
      <path d="M 180 340 Q 80 300 20 220 Q 40 310 140 390 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Cuisse et patte gauche (en arrière) -->
      <path d="M 180 360 Q 160 440 200 480 L 190 540 L 140 545 L 145 525 L 160 520 L 170 470" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Corps musclé, côtes et dos épineux -->
      <path d="M 180 340 Q 240 280 320 260 L 380 290 Q 320 390 260 410 Q 180 430 180 340 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Stries de musculature et écailles du dos -->
      <path d="M 220 290 L 230 270 L 245 285" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <path d="M 260 275 L 275 255 L 285 270" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <path d="M 300 265 L 315 245 L 325 260" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>

      <!-- Bras court de prédateur à 2 griffes acérées -->
      <path d="M 310 350 Q 330 380 345 370 L 360 380 L 350 365 L 362 360 L 335 345" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>

      <!-- Patte droite puissante (au premier plan) -->
      <ellipse cx="270" cy="380" rx="45" ry="60" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Mollet et jarret puissant -->
      <path d="M 260 430 Q 295 450 280 500 L 270 545" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Pied theropode à 3 grandes serres acérées -->
      <path d="M 240 545 L 200 550 L 230 535 L 270 535 L 310 550 L 280 535 L 270 510" fill="#ffffff" stroke="#1e293b" stroke-width="8" stroke-linejoin="round"/>
      <!-- Griffes tranchantes courbées -->
      <polygon points="195,550 180,560 205,552" fill="#1e293b"/>
      <polygon points="250,555 245,570 260,555" fill="#1e293b"/>
      <polygon points="310,550 325,562 305,553" fill="#1e293b"/>

      <!-- Cou musclé tendu en avant -->
      <path d="M 320 260 Q 380 210 420 180 L 450 240 Q 380 290 350 310" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Tête imposante et mâchoire de prédateur grand ouverte ! -->
      <!-- Crâne supérieur avec arcade sourcilière menaçante -->
      <path d="M 400 190 Q 420 130 500 130 Q 570 140 580 190 L 530 200 Q 480 195 460 220 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Oeil reptilien féroce et creux temporal -->
      <polygon points="450,165 470,160 460,175" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <ellipse cx="460" cy="167" rx="4" ry="7" fill="#1e293b"/>
      <ellipse cx="495" cy="155" rx="14" ry="9" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <circle cx="550" cy="165" r="5" fill="#1e293b"/> <!-- Narine -->

      <!-- Dents supérieures acérées et recourbées -->
      <polygon points="565,190 560,208 552,192" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <polygon points="545,193 540,215 532,195" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <polygon points="525,195 518,220 510,197" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <polygon points="500,198 494,218 488,200" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <polygon points="480,202 475,216 470,204" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>

      <!-- Gueule ouverte et langue -->
      <path d="M 460 220 Q 500 240 520 210" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>

      <!-- Mâchoire inférieure puissante -->
      <path d="M 450 250 L 565 240 Q 575 255 550 270 L 440 280 Q 430 260 450 250 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Dents inférieures pointues qui s'imbriquent -->
      <polygon points="555,242 550,225 542,243" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <polygon points="535,244 528,226 522,245" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <polygon points="515,246 508,230 502,247" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <polygon points="492,248 488,234 480,250" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
    </svg>`
  },
  {
    id: 'velociraptor',
    category: 'predators',
    title: '⚡ Vélociraptor à l\'Affût',
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#ffffff"/>
      <!-- Jungle crétacée : Grandes feuilles de fougères et roche -->
      <path d="M 0 530 Q 300 500 600 530 L 600 600 L 0 600 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <path d="M 40 450 Q 120 410 80 530" fill="none" stroke="#1e293b" stroke-width="6"/>
      <path d="M 50 480 Q 150 460 110 530" fill="none" stroke="#1e293b" stroke-width="5"/>
      <!-- Boulders / Rochers sous ses pattes -->
      <path d="M 320 530 Q 360 490 440 510 Q 480 540 450 550 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Longue queue rigide et tendue pour l'équilibre -->
      <path d="M 210 320 Q 110 260 20 250 Q 80 300 180 360 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Plumes/crêtes le long de la queue du raptor -->
      <path d="M 30 255 L 20 240 L 45 255" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <path d="M 70 265 L 60 245 L 85 265" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <path d="M 110 280 L 100 258 L 125 280" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>

      <!-- Patte arrière gauche (en arrière-plan) -->
      <path d="M 190 350 Q 170 420 220 450 L 210 515 L 180 520" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>

      <!-- Corps aérodynamique et musclé -->
      <path d="M 210 320 Q 280 270 360 280 Q 370 340 310 380 Q 230 400 210 320 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Patte arrière droite avec la redoutable GRIFFE EN FAUCILLE levée ! -->
      <ellipse cx="260" cy="370" rx="35" ry="50" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <path d="M 255 420 Q 285 450 270 490 L 300 515" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Le pied du raptor : orteil porteur + Griffe géante relevée -->
      <path d="M 290 515 L 340 525 L 310 510 L 280 500" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <!-- LA GRIFFE EN FAUCILLE (emblème du vélociraptor) recourbée vers le haut -->
      <path d="M 270 495 Q 260 450 285 440 Q 295 460 285 495 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <polygon points="280,442 288,430 292,448" fill="#1e293b"/>
      <!-- Griffes des autres orteils au sol -->
      <polygon points="340,525 355,530 338,530" fill="#1e293b"/>

      <!-- Bras agile avec plumes/ailes de chasseur et 3 griffes saisissantes -->
      <path d="M 330 320 Q 370 360 385 345 L 420 360 L 400 340 L 425 335 L 390 320" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <!-- Aigrettes de plumes sur l'avant-bras -->
      <path d="M 345 330 L 330 365 L 360 345" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <path d="M 365 340 L 350 375 L 380 350" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>

      <!-- Cou en S de prédateur rapide -->
      <path d="M 340 280 Q 400 240 430 180 L 470 220 Q 410 290 370 300" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Tête allongée de vélociraptor avec mâchoires garnies de dents acérées -->
      <path d="M 430 180 Q 490 140 560 160 Q 570 180 540 195 L 470 215 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Œil perçant et narine -->
      <circle cx="465" cy="175" r="10" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <ellipse cx="465" cy="175" rx="3" ry="7" fill="#1e293b"/>
      <circle cx="535" cy="170" r="4" fill="#1e293b"/>

      <!-- Dents acérées de prédateur -->
      <polygon points="545,185 540,196 535,186" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
      <polygon points="528,187 523,200 518,188" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
      <polygon points="510,190 505,203 500,192" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
      <polygon points="492,195 487,208 482,197" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>

      <!-- Mâchoire inférieure prête à claquer -->
      <path d="M 470 215 L 545 205 Q 550 218 530 225 L 460 235 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <polygon points="535,208 530,198 525,208" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
      <polygon points="515,210 510,200 505,212" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'spinosaurus',
    category: 'predators',
    title: '🐊 Spinosaure Géant',
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#ffffff"/>
      <!-- Rivière préhistorique et berge -->
      <path d="M 0 510 Q 300 480 600 510 L 600 600 L 0 600 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Vagues d'eau au premier plan -->
      <path d="M 50 550 Q 120 530 190 550 Q 260 570 330 550 Q 400 530 470 550" fill="none" stroke="#1e293b" stroke-width="6"/>
      <!-- Poisson préhistorique sauté hors de l'eau -->
      <path d="M 80 470 Q 110 440 140 470 Q 110 490 80 470 Z" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <polygon points="75,470 60,455 65,485" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>

      <!-- LA GRANDE VOILE DORSALE EMBLÉMATIQUE (Spines neurales géantes) -->
      <path d="M 190 320 Q 230 110 320 100 Q 390 120 410 270 Z" fill="#ffffff" stroke="#1e293b" stroke-width="9"/>
      <!-- Rayons / épines osseuses de la voile -->
      <line x1="220" y1="300" x2="245" y2="135" stroke="#1e293b" stroke-width="6"/>
      <line x1="260" y1="280" x2="280" y2="110" stroke="#1e293b" stroke-width="6"/>
      <line x1="300" y1="270" x2="315" y2="102" stroke="#1e293b" stroke-width="6"/>
      <line x1="340" y1="270" x2="350" y2="110" stroke="#1e293b" stroke-width="6"/>
      <line x1="375" y1="275" x2="385" y2="140" stroke="#1e293b" stroke-width="6"/>

      <!-- Queue palmée natatoire de spinosaure -->
      <path d="M 190 320 Q 90 280 20 260 Q 60 340 160 390 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Crête caudale natatoire -->
      <path d="M 30 265 Q 90 230 160 280" fill="#ffffff" stroke="#1e293b" stroke-width="6"/>

      <!-- Corps massif semi-aquatique -->
      <path d="M 190 320 Q 280 270 410 270 Q 420 360 330 400 Q 210 420 190 320 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Patte arrière robuste -->
      <ellipse cx="260" cy="380" rx="40" ry="55" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <path d="M 250 430 Q 280 460 270 500 L 260 540 L 210 545 L 245 530" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <polygon points="205,545 190,555 215,550" fill="#1e293b"/>
      <polygon points="260,542 275,555 255,552" fill="#1e293b"/>

      <!-- Patte avant puissante avec GRANDE GRIFFE DE PÊCHEUR TRIDACTYLE -->
      <path d="M 360 340 Q 410 410 415 440 L 440 455 L 420 440 L 445 435 L 390 340" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <polygon points="440,455 455,465 435,460" fill="#1e293b"/>
      <polygon points="445,435 460,442 440,440" fill="#1e293b"/>

      <!-- Cou épais tendu vers l'avant -->
      <path d="M 400 270 Q 450 240 470 230 L 490 280 Q 440 330 380 340" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>

      <!-- Museau allongé crocodilien caractéristique du spinosaure -->
      <path d="M 470 230 Q 530 210 580 215 Q 585 230 560 240 L 480 260 Z" fill="#ffffff" stroke="#1e293b" stroke-width="8"/>
      <!-- Petite crête nasale au-dessus des yeux -->
      <polygon points="485,225 495,208 505,225" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <!-- Œil et narine reculée -->
      <circle cx="490" cy="235" r="8" fill="#ffffff" stroke="#1e293b" stroke-width="5"/>
      <ellipse cx="490" cy="235" rx="3" ry="6" fill="#1e293b"/>
      <circle cx="530" cy="225" r="4" fill="#1e293b"/>

      <!-- Dents coniques interverrouillées faites pour attraper les proies glissantes -->
      <polygon points="565,225 560,238 554,226" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
      <polygon points="545,228 540,242 534,228" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
      <polygon points="525,232 520,246 514,233" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
      <polygon points="505,236 500,250 494,238" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>

      <!-- Mâchoire inférieure allongée -->
      <path d="M 480 260 L 570 242 Q 575 255 555 265 L 470 280 Z" fill="#ffffff" stroke="#1e293b" stroke-width="7"/>
      <polygon points="555,248 550,236 544,248" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
      <polygon points="535,252 530,240 524,252" fill="#ffffff" stroke="#1e293b" stroke-width="4"/>
    </svg>`
  },

  // ------------------------------------------------------
  // MODÈLES MIGNONS & CLASSIQUES (DÈS 3-4 ANS)
  // ------------------------------------------------------
  {
    id: 'dino',
    category: 'classic',
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
    category: 'classic',
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
    category: 'classic',
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
    category: 'classic',
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
    category: 'classic',
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
    category: 'classic',
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
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    };
    img.onerror = reject;
    img.src = url;
  });
}
