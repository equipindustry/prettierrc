# EquipIndustry Prettier Config

[![npm](https://img.shields.io/npm/v/@equipindustry/prettierrc.svg)](https://www.npmjs.com/package/@equipindustry/prettierrc)
[![downloads](https://img.shields.io/npm/dt/@equipindustry/prettierrc.svg)](https://www.npmjs.com/package/@equipindustry/prettierrc)
[![build](https://travis-ci.org/equipindustry/prettierrc.svg?branch=master)](https://travis-ci.org/equipindustry/prettierrc)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Prettier config for projects at EquipIndustry.

## Usage

```
npm install --save-dev @equipindustry/prettierrc
```

Then add this `prettier.config.js` to the project:

```js
module.exports = require('@equipindustry/prettierrc');
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

## Release

Releases are done automatically in CI when commits are merged into master by analyzing [Conventional Commit Messages](https://conventionalcommits.org/).
After running `yarn`, commit messages will be linted automatically when committing though a git hook.
The git hook can be circumvented for fixup commits with [git's `fixup!` autosquash feature](https://fle.github.io/git-tip-keep-your-branch-clean-with-fixup-and-autosquash.html), or by passing `--no-verify` to `git commit`.
You may have to rebase a branch before merging to ensure it has a proper commit history, or squash merge with a manually edited commit message that conforms to the convention.
