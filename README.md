prember-sitemap-generator
==============================================================================
<a href="https://shipshape.io/"><img src="http://i.imgur.com/KVqNjgO.png" alt="Ship Shape" width="100" height="100"/></a>

**[prember-sitemap-generator is built and maintained by Ship Shape. Contact us for Ember.js consulting, development, and training for your project](https://shipshape.io/ember-consulting/)**.

[![npm version](https://badge.fury.io/js/prember-sitemap-generator.svg)](http://badge.fury.io/js/prember-sitemap-generator)

A sitemap generator for [prember](https://github.com/ef4/prember) apps.

Installation
------------------------------------------------------------------------------

```
ember install prember-sitemap-generator
```


Usage
------------------------------------------------------------------------------
This should mostly be automatic, and use the `urls` you define in `ENV.prember.urls`.

The one thing you do need to configure is `baseRoot`. This is what will be prepended to your paths.

For example, this is our configuration for our site:

```js
// ember-cli-build.js
...
const app = new EmberApp(defaults, {
  prember: {
    baseRoot: 'https://shipshape.io',
    urls: buildPremberUrls()
  }
};
...
```


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
