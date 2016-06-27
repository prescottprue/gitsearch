# Gitsearch

[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][climate-image]][climate-url]
[![Code Coverage][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Code Style][code-style-image]][code-style-url]

> Basic Github search app

## Libraries
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [react-router-redux](https://github.com/rackt/react-router-redux)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [koa](https://github.com/koajs/koa)
* [karma](https://github.com/karma-runner/karma)
* [eslint](http://eslint.org)

## Requirements
* node `^4.2.0`
* npm `^3.0.0`

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements), you can follow these steps to get the project up and running:

```bash
$ git clone https://github.com/prescottprue/gitsearch.git
$ cd gitsearch
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

If everything works, you should see the following:

<img src="http://i.imgur.com/zR7VRG6.png?2" />

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`dev:no-debug`|Same as `npm run dev` but disables devtool instrumentation.|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

## Application Structure

The application structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type.

```
.
├── bin                      # Build/Start scripts
├── blueprints               # Blueprint files for redux-cli
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # Project configuration settings
├── server                   # Koa application (uses webpack middleware)
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── main.js              # Application bootstrap and rendering
│   ├── components           # Reusable Presentational Components
│   ├── containers           # Reusable Container Components
│   ├── layouts              # Components that dictate major page structure
│   ├── static               # Static assets (not imported anywhere in source code)
│   ├── styles               # Application-wide styles (generally settings)
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   └── reducers.js      # Reducer registry and injection
│   └── routes               # Main route definitions and async split points
│       ├── index.js         # Bootstrap main application routes with store
│       ├── Root.js          # Wrapper component for context-aware providers
│       └── Home             # Fractal route
│           ├── index.js     # Route definitions and async split points
│           ├── assets       # Assets required to render components
│           ├── components   # Presentational React Components
│           ├── container    # Connect components to actions and store
│           ├── modules      # Collections of reducers/constants/actions
│           └── routes **    # Fractal sub-routes (** optional)
└── tests                    # Unit tests
```

## Development

#### Developer Tools

### Root Resolve
Webpack is configured to make use of [resolve.root](http://webpack.github.io/docs/configuration.html#resolve-root), which lets you import local packages as if you were traversing from the root of your `~/src` directory. Here's an example:

```js
// current file: ~/src/views/some/nested/View.js
// What used to be this:
import SomeComponent from '../../../components/SomeComponent'

// Can now be this:
import SomeComponent from 'components/SomeComponent' // Hooray!
```


### Styles

Both `.scss` and `.css` file extensions are supported out of the box and are configured to use [CSS Modules](https://github.com/css-modules/css-modules). After being imported, styles will be processed with [PostCSS](https://github.com/postcss/postcss) for minification and autoprefixing, and will be extracted to a `.css` file during production builds.


[travis-image]: https://img.shields.io/travis/prescottprue/gitsearch/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/prescottprue/gitsearch
[daviddm-image]: https://img.shields.io/david/prescottprue/gitsearch.svg?style=flat-square
[daviddm-url]: https://david-dm.org/prescottprue/gitsearch
[climate-image]: https://img.shields.io/codeclimate/github/prescottprue/gitsearch.svg?style=flat-square
[climate-url]: https://codeclimate.com/github/prescottprue/gitsearch
[![codecov]()](https://codecov.io/gh/prescottprue/gitsearch)
// [coverage-image]: https://img.shields.io/codeclimate/coverage/github/prescottprue/gitsearch.svg?style=flat-square
[coverage-image]: https://img.shields.io/codecov/c/github/prescottprue/gitsearch.svg?style=flat-square
// [coverage-url]: https://codeclimate.com/github/prescottprue/gitsearch
[coverage-url]: https://codecov.io/gh/prescottprue/gitsearch
[license-image]: https://img.shields.io/npm/l/gitsearch.svg?style=flat-square
[license-url]: https://github.com/prescottprue/gitsearch/blob/master/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[code-style-url]: http://standardjs.com/
