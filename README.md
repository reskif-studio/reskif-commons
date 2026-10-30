# Reskif Commons

Les communs de Reskif : identité, éléments de design et règles partagées par **tous les projets du Studio**.
Dépôt public, en lecture pour tout le monde. Seul Julien (ou Jean-Claude depuis `#admin`) le modifie, via PR.

## Sommaire : « j'ai besoin de… → je regarde… »
| Besoin | Fichier |
|---|---|
| Comprendre Reskif, la mission, le Studio | [`reskif.md`](reskif.md) |
| Le logo | [`brand/logo/`](brand/logo/) + règles dans [`brand/usage.md`](brand/usage.md) |
| Les couleurs | [`brand/colors.json`](brand/colors.json), [`brand/colors.css`](brand/colors.css), [`brand/tailwind.preset.js`](brand/tailwind.preset.js) |
| La typo | [`brand/typography.md`](brand/typography.md) |
| L'effet riso (marque de fabrique) | [`brand/riso/`](brand/riso/) |
| Le ton, la façon d'écrire | [`voice/ton.md`](voice/ton.md) |
| Ajouter le logo dans une navbar | [`snippets/navbar-logo.html`](snippets/navbar-logo.html) |
| Bandeau « un projet Reskif » en footer | [`snippets/footer-reskif.html`](snippets/footer-reskif.html) |
| Règles pour les agents Jean-Claude | [`AGENTS.md`](AGENTS.md) |

## Principe d'usage
- **On copie, on ne pointe pas** : un projet copie les fichiers dont il a besoin dans son propre dépôt (il reste autonome). Indiquer en commentaire la version des communs utilisée (`reskif-commons@<commit>`).
- **Rien de secret ici.** Jamais de clé, token, mot de passe ou donnée personnelle.
- Historique des changements : [`CHANGELOG.md`](CHANGELOG.md).

Source des éléments de design : le site https://reskif.org (dépôt `vjuju/reskif-org`).
