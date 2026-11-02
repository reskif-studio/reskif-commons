# Usage de la marque — design system « sphère »

Référence vivante : https://reskif.org (accueil) et https://reskif.org/studio/. Maquette d'origine : `brand/sphere/` (vjuju/design@2df7fba).

## Logo
- Fichier : `brand/logo/reskif_logo.svg` (pastille noire, lettres blanches) : il se pose tel quel sur la nuit.
- Navbar : hauteur 28 px, `alt="Reskif"`, lien vers https://reskif.org. Hero : `clamp(120px, 22vmin, 200px)` avec `filter: drop-shadow(0 0 18px rgba(0,0,0,.6))`.
- Ne pas déformer, recolorer ni lui appliquer d'effet lumineux.

## Univers
- **Un seul univers : la nuit** (`--night #010101`), texte blanc. Pas de fond clair, pas d'aplats colorés.
- **Chaud / froid** ne décorent pas : ils disent un rôle. Financeur·se (feu) et expert·e (eau) = chaud `#ffb08a` ; éclaireur·se (air) et porteur·se (terre) = froid `#9cc0ff`.
- Les couleurs vives (`#ff6a2b`, `#4d8dff`, `#5b1cff`) ne vivent que dans la lumière : scène 3D, lueurs, pictos.

## Composants (voir `brand/reskif.css`)
- **Verre** : `background: var(--glass)`, bordure `var(--line)` 1 px, `border-radius: 18px`, `backdrop-filter: blur(10px)`. Survol : bordure chaude ou froide selon le rôle.
- **Pilule** : Syne 500 capitales 12 px, `border-radius: 999px`, padding 12-14 × 18-20 px. Pleine (blanc sur nuit) pour l'action principale, verre pour la secondaire.
- **Surtitre** : Syne 500 12 px capitales espacées, en chaud ou froid.
- **Navigation par points** : ronds de 8 px, plein blanc pour l'étape courante.
- **Pictos des quatre éléments** : `brand/pictos/` (feu, air, eau, terre), 48 px, animés, toujours associés à leur profil.
- **Focus clavier** : `outline: 2px solid var(--warm); outline-offset: 3px`.

## Mouvement
- Sur un site vitrine, la 3D (`brand/sphere/`) est le seul grand moment. Les autres pages restent sobres : une lueur floue au plus, les pictos animés.
- Toujours respecter `prefers-reduced-motion`.

## Projets tiers
Un projet du Studio garde son identité ; il affiche seulement le bandeau « Un projet du Studio Reskif » (`snippets/footer-reskif.html`).
