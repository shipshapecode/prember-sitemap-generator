'use strict';

const generateSitemap = require('./lib/sitemap-generator').generateSitemap;

module.exports = {
  name: 'prember-sitemap-generator',

  postBuild() {
    const premberOptions = this.app.options['prember'];
    const baseRoot = premberOptions.baseRoot;
    const urls = premberOptions && premberOptions.urls ? premberOptions.urls : [];
    generateSitemap(baseRoot, urls);
  }
};
