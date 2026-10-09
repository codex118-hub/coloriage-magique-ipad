# 🎨 Coloriage Magique pour iPad

Une application web interactive de coloriage spécialement conçue pour les jeunes enfants (dès 3-4 ans) et optimisée pour l'iPad (tactile au doigt et à l'Apple Pencil).

Elle intègre un **convertisseur intelligent d'images et de photos en coloriages** ainsi qu'un **lecteur de pages de coloriage préexistantes**.

---

## ✨ Fonctionnalités clés

### 1. 🪄 Convertisseur d'images en coloriage
- **Mode Enfant Magique (Recommandé) :** Extrait les contours principaux, élimine les bruits et détails superflus d'une photo pour créer des lignes franches et faciles à colorier.
- **Mode Photo Réelle :** Détection de contours plus fine avec seuil adaptatif.
- **Mode Coloriage Déjà Prêt :** Si vous téléchargez un coloriage depuis Google Images ou Pinterest, ce mode nettoie automatiquement le papier, enlève les artefacts JPEG et rehausse les noirs pour un tracé parfait.
- **Contrôles intuitifs :** Réglage du contraste/seuil, de l'épaisseur du trait et du lissage avec aperçu en temps réel.

### 2. 👶 Expérience adaptée pour un enfant de 4 ans
- **Remplissage Magique (Pot de peinture) :** Touchez n'importe quelle zone fermée pour la remplir instantanément de couleur, sans déborder !
- **Les traits noirs restent toujours au-dessus :** L'enfant peut gribouiller ou peindre au pinceau sans jamais masquer ou abîmer les contours du dessin.
- **Gomme magique :** Efface la peinture de l'enfant sans effacer le dessin original.
- **Paillettes scintillantes ✨ et Tampons amusants 🦄 :** Des étoiles et des stickers (animaux, cœurs, dinosaures, couronnes).
- **Couleur Arc-en-ciel 🌈 :** Change automatiquement de teinte à chaque coup de pinceau.
- **Sons stimulants :** Petits bruits rigolos (plop, scintillements, fanfares de fête) entièrement synthétisés via l'API Web Audio (aucun chargement de fichier externe, 100% autonome et fluide).
- **Confettis festifs 🎉 :** Une pluie de confettis célèbre l'enregistrement du chef-d'œuvre !
- **Bibliothèque thématique avec onglets de tri :**
  - 🐶 **Pat' Patrouille :** Chase le policier, Marcus le pompier, Stella l'aviatrice.
  - 🥷 **Lego Ninjago :** Kai le ninja du feu (avec ses katanas et flammes), Lloyd le ninja vert (tourbillon Spinjitzu).
  - 🦖 **Dinosaures Prédateurs Réalistes (Grands Traits & Épurés) :** Dessins réalistes et percutants avec de grands aplats faciles à colorier, sans plantes ni textures excessives (💥 **Duel T-Rex vs Spinosaure**, T-Rex rugissant, Spinosaure et sa voile dorsale compartimentée, Carnotaure cornu).
  - 🎨 **Mignons & Classiques :** Bébé dinosaure, fusée spatiale, chaton rigolo, papillon, voiture, licorne.

### 3. 📱 Optimisation iPad (Safari & Écran d'accueil)
- Aucun zoom involontaire lors du dessin (`touch-action: none`, désactivation des gestes parasites de Safari).
- Compatible doigt et Apple Pencil.
- **PWA (Progressive Web App) :** Peut être ajoutée à l'écran d'accueil de l'iPad pour tourner en plein écran sans barre d'adresse comme une vraie application de l'App Store.
- **Impression AirPrint (🖨️) :** Permet d'imprimer la feuille de coloriage (vierge ou coloriée) directement depuis l'iPad sur votre imprimante.
- **Sauvegarde (⭐) :** Télécharge l'image haute définition dans la photothèque.

---

## 🚀 Comment lancer le jeu sur iPad ou Mac

### Option A : Depuis votre Mac
Ouvrez simplement le fichier `index.html` dans Safari, Chrome ou Firefox :
- Double-cliquez sur `index.html` ou tapez dans votre terminal :
  ```bash
  open index.html
  ```

### Option B : Jouer sur l'iPad (sur le même réseau Wi-Fi)
1. Lancez un serveur web local sur votre Mac dans le dossier du projet :
   ```bash
   python3 -m http.server 8080
   ```
2. Sur votre iPad, ouvrez **Safari** et rendez-vous sur :
   `http://<IP-DE-VOTRE-MAC>:8080` (ex: `http://192.168.1.25:8080`)
3. Appuyez sur le bouton de partage de Safari (carré avec une flèche vers le haut) et sélectionnez **« Sur l'écran d'accueil »**.
4. L'icône de l'application apparaît sur l'iPad : vous pouvez désormais la lancer en **plein écran**, même sans connexion Internet !

---

## 📁 Structure du projet

- `index.html` : Interface principale, modales et mise en page responsive iPad.
- `style.css` : Design ergonomique pour enfants, gros boutons tactiles, gestion des calques Canvas.
- `app.js` : Moteur de dessin, remplissage par zone (Flood Fill), gestion de l'historique Annuler/Rétablir.
- `converter.js` : Algorithmes de traitement d'image (différence de gaussiennes, Sobel, dilatation, binarisation).
- `templates.js` : Bibliothèque de modèles vectoriels inclus (Dino, Fusée, Chaton, Papillon, Voiture, Licorne).
- `audio.js` : Moteur sonore sans dépendance Web Audio API.
- `manifest.json` & `sw.js` : Configuration PWA et support hors-ligne pour iPad.
