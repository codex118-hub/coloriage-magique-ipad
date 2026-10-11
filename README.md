# 🎨 Coloriage Magique pour iPad

Jeu de coloriage pour enfant (dès 3-4 ans), au doigt ou à l'Apple Pencil.
Pot de peinture qui ne déborde pas, pinceau, craie, étoiles, tampons, gomme, sons,
modèles (Pat' Patrouille, Ninjago, dinosaures, mignons) et conversion d'une photo en coloriage.

## Installer sur l'iPad

1. Sur l'iPad, ouvrir **Safari** à l'adresse du site (GitHub Pages).
2. Bouton **Partager** → **« Sur l'écran d'accueil »**.
3. Lancer depuis l'icône : plein écran, et ça marche ensuite sans Internet.

Astuce : **Réglages → Accessibilité → Accès guidé** pour bloquer l'iPad sur le jeu.

- **⭐ Sauver** ouvre le partage → « Enregistrer l'image » pour la mettre dans Photos.
- **Mises à jour** : automatiques au prochain lancement avec Internet.

## Tester sur le Mac

```bash
python3 -m http.server 8080
```
puis ouvrir http://localhost:8080

## Fichiers

- `index.html`, `style.css` : interface
- `app.js` : dessin, remplissage, annuler/rétablir, sauvegarde
- `templates.js` : liste des modèles (SVG intégrés ou images de `assets/`)
- `converter.js` : photo → coloriage
- `audio.js` : sons (Web Audio, aucun fichier)
- `sw.js`, `manifest.json` : mode application et hors-ligne
- `GEMINI.md` : règles pour l'agent qui fait évoluer le projet
