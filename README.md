# Url Rewriter

## Description

Ce script permet de récupérer les paramètres présent dans une url pour les ajouter ou les concaténer avec des liens présent dans la page.

## Installation

```bash
npm i url-params-rewriter
```

```html
<script src="node-modules/url-params-rewriter/dist/url-rewriter.min.js"></script>
```

## Utilisation

Pour activer la réécriture des url de liens est activé grace à la présence d'une class :

Ajoutez la class `url-rewriter` à tous les liens devant être réécrit.

```html
<a href="https://mon-lien.fr/?paramA=toto&paramB=tata" class="url-rewriter">
```