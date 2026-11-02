# Typographie

Trois familles, trois rôles (Google Fonts) :
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Syne:wght@500;700;800&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Fraunces:ital,opsz,wght@1,9..144,300;1,9..144,500&display=swap">
```

| Famille | Usage |
|---|---|
| **Syne** 800, CAPITALES, interlignage .9-.95, approche -.01em | titres (`clamp(30px, 8.4vmin, 92px)` pour un hero) |
| **Syne** 500, CAPITALES 11-12 px, approche .14-.16em | navigation, boutons, surtitres (« kicker ») |
| **Syne** 700 | intitulés de cartes (« Je suis financeur·se ») |
| **Fraunces** italique 300 (500 pour l'emphase) | texte courant, accroches, descriptions |
| **EB Garamond** 400 + petites capitales | définitions façon dictionnaire : « <span style="font-variant:small-caps">Association</span>, contraction de *réseau de kif*. » |

- Rôles dans une phrase : Syne 500 coloré chaud (`--warm`) ou froid (`--cold`), en alternance.
- Ombre portée légère sur les titres posés sur la 3D : `text-shadow: 0 0 10-14px rgba(0,0,0,.7-.8)`.
- L'ancienne police (Rubik) n'est plus utilisée.
