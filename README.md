# EquipIndustry Prettier Config

[![npm](https://img.shields.io/npm/v/@equipindustry/prettierrc.svg)](https://www.npmjs.com/package/@equipindustry/prettierrc)
[![downloads](https://img.shields.io/npm/dt/@equipindustry/prettierrc.svg)](https://www.npmjs.com/package/@equipindustry/prettierrc)
[![build](https://travis-ci.org/equipindustry/prettierrc.svg?branch=master)](https://travis-ci.org/equipindustry/prettierrc)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Prettier config for projects at EquipIndustry.

## Usage

```
npm install --save-dev @equipindustry/prettierrc
```

Then add this `prettier.config.js` to the project:

```js
module.exports = require('@equipindustry/prettierrc')
```

## Making changes

```
npm link
cd <project>
npm link @equipindustry/prettierrc
npm run prettier
```

## Publish a new version

Follow [semver](http://semver.org/). **Changing or adding a rule is a breaking change and requires a new major version**.

```
npm version major|minor|patch
git push
git push --tags
npm publish
```
