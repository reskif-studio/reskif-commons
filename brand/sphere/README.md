# Scène « sphère » (accueil de reskif.org)

Copie de la maquette de Julien : `vjuju/design@2df7fba`, dossier `sphere/`. Fichier unique `index.html` (HTML + CSS + JS), three.js 0.132.2 chargé depuis jsDelivr, modèle `models/LeePerrySmith.json`.

## Ce qu'elle fait
1. Panneau 0 : logo + « Le virtuel au service du réel » sur une sphère organique (shaders d'Organic Sphere, Bruno Simon). Survoler le cœur accélère la sphère.
2. Panneau 1 : définition de dictionnaire de Reskif, rôles en chaud/froid ; plongée dans la sphère.
3. Panneau 2 : « Et vous, qui êtes-vous ? », quatre choix en verre avec pictos ; croissance d'un arbre.
4. Branches : feu (financeur·se), air (éclaireur·se, particules The Spirit), eau (expert·e), terre (porteur·se, buste qui se rassemble).
Navigation : molette, flèches, points à droite. Repli texte si three.js ne charge pas.

## Réutiliser
- Copier `index.html`, `models/`, `LICENSE-The-Spirit.md` et le logo dans le projet, garder les crédits affichés.
- Changer le texte des panneaux et les styles en tête du fichier ; ne pas réécrire la scène.
- Exemple d'intégration avec ajouts (lien Studio, actions par branche) : `reskif-studio/reskif-org/public/index.html`.

## Licences
Organic Sphere (Bruno Simon, MIT) · The Spirit (Edan Kwan, MIT, `LICENSE-The-Spirit.md`) · Lee Perry-Smith par Infinite-Realities (CC BY 3.0, `models/LeePerrySmith-LICENSE.txt`) · arbre d'après les croissances procédurales de Marius Ballot.
