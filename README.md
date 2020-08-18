<h1 align="center">Browser Extension Boilerplate</h1>

## Install

```sh
git clone git@github.com:DaddyWarbucks/browser-extension-boilerplate.git
cd browser-extension-boilerplate
yarn install
```

## Usage

```sh
yarn start
```

Runs webpack in watch mode. Automatically reloads the page after changes in files. Thanks to [webpack-extension-reloader](https://github.com/rubenspgcavalcante/webpack-extension-reloader).

```sh
yarn build
```

Builds the extension in production mode. This version can be shipped to the store.

## How to increment version

Use [npm version](https://docs.npmjs.com/cli/version) cli command to bump a version of your package.json. The version of manifest will stay in sync with version specified in package.json.

For example:

```sh
npm version patch
```

This will increase your patch package.json version. During the next build output manifest file will have the same version.

## Content Security Policy (CSP)
"unsafe-eval" in directive "script-src" and "connect-src" are needed for auto reloading, and should be removed from production manifest.json.

## Useful links

- [Manifest File Format](https://developer.chrome.com/apps/manifest)
- [Content Security Policy (CSP)](https://developer.chrome.com/extensions/contentSecurityPolicy)
- [Chrome i18n](https://developer.chrome.com/extensions/i18n)
- [Porting a Google Chrome extension to Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension)
- [Firefox add-ons examples](https://github.com/mdn/webextensions-examples)
- [exthouse - tool for performance testing](https://github.com/treosh/exthouse)
- [webext-redux - a set o utilities to use redux in web extensions](https://github.com/tshaddix/webext-redux)
- [webpack-manifest-version-sync-plugin](https://github.com/ElForastero/webpack-manifest-version-sync-plugin)

## License

Copyright © 2020 [Beau Shaw](https://github.com/DaddyWarbucks).<br />
This project is [MIT](https://github.com/DaddyWarbucks/browser-extension-boilerplate/blob/master/LICENSE) licensed.
