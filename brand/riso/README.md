# Effet riso

La marque de fabrique visuelle de Reskif : une photo transformée en **trame de points bichrome** (une encre foncée sur un papier coloré), comme une impression risographe.

## Principe
Image → luminosité/contraste → luminance → trame de points tournée (45° par défaut) dont la taille dépend de l'ombre → mélange encre/papier, plus un léger grain. Rendu en WebGL, une seule fois par redimensionnement (pas d'animation, peu coûteux).

## Utiliser
- **Site HTML/vanilla** : `riso.js` (sans dépendance).
```html
<section style="position:relative;min-height:70vh">
  <div data-riso data-image="/img/equipe.jpg" data-ink="#7c2d12" data-paper="#fb923c"
       data-contrast="0.3" data-shader-contrast="0.9" data-dot-size="7"
       style="position:absolute;inset:0"></div>
  <div style="position:absolute;inset:0;background:linear-gradient(to top,#7c2d12,transparent)"></div>
  <div style="position:relative">… contenu …</div>
</section>
<script src="/js/riso.js" defer></script>
```
- **React / Next** : `Riso.tsx` (même API que reskif.org : `<Riso image ink paper … />`).
- **Couleurs** : piocher dans `presets.json` (hero = sections plein écran avec dégradé par-dessus ; carte = vignettes 4/3).

## Règles
- Toujours un couple **encre foncée + papier vif de la même famille** (voir presets).
- Sections plein écran : ajouter un **dégradé** de la couleur d'encre pour garder le texte lisible ; texte blanc ou encre selon le fond. Focus clavier en jaune `#ffcc00`.
- Images : servies depuis le projet (même origine) ou avec CORS ; sinon le repli (niveaux de gris) s'affiche.
- Ne jamais appliquer l'effet au logo.
