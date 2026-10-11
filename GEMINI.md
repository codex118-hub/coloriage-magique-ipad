# Règles du projet (à lire avant toute modification)

Jeu de coloriage pour un enfant de 4 ans, sur iPad (Safari, ajouté à l'écran d'accueil).
Site statique : pas de framework, pas de build, pas de dépendance.

## Principes
- Faire uniquement ce qui est demandé. Pas de fonctionnalité bonus, pas de refonte.
- Ne jamais remplacer ou supprimer un dessin existant sans demande explicite.
- Messages de commit factuels et courts, en français. Pas de superlatifs.
- Le README décrit ce qui marche vraiment, rien de plus.
- Tester dans un navigateur (`python3 -m http.server 8080`) avant de commit.

## Ajouter un dessin
1. Image : **PNG 1024×1024**, fond **blanc pur**, traits **noirs uniquement**
   (pas de gris, pas d'ombres, pas de hachures, pas de texture).
2. **Traits épais** (≈ 8 px à 1024) et **zones fermées** : sinon le pot de peinture déborde.
   Vérifier que le contour extérieur du personnage est continu.
3. Peu de détails, de grandes zones à colorier (doigts d'enfant de 4 ans). Pas de décor chargé.
4. Fichier dans `assets/<categorie>/nom_simple.png` (minuscules, sans accents).
5. Ajouter une entrée dans `templates.js` :
   `{ id: 'nom-simple', category: 'predators', title: '🦖 Titre court', imageSrc: 'assets/dinos/nom_simple.png' }`
   Catégories : `patrouille`, `ninjago`, `predators`, `classic`. Nouvelle catégorie = ajouter un onglet dans `index.html`.
6. C'est tout : **ne pas toucher à `sw.js`** (le cache se met à jour tout seul).

## Ne pas casser
- Canvas interne fixe 1024×1024 (`CANVAS_SIZE` dans `app.js`) : ne pas le lier à la taille de l'écran.
- `sw.js` est en « réseau d'abord » : pas de numéro de version à gérer.
- Le calque des contours (`outline-canvas`) reste au-dessus de la peinture, en `multiply`.
