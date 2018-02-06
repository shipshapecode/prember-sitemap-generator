'use strict';
const chalk = require('chalk');
const generateSitemap = require('./lib/sitemap-generator').generateSitemap;

module.exports = {
  name: 'prember-sitemap-generator',

  postBuild() {
    const premberOptions = this.app.options['prember'];
    const baseRoot = premberOptions.baseRoot;
    if (!baseRoot) {
      return this.ui.writeLine(chalk.red(
        'ERROR: You must define `baseRoot` for prember-sitemap-generator to generate sitemaps.'
      ));
    }
    const urls = premberOptions && premberOptions.urls ? premberOptions.urls : [];
    generateSitemap(baseRoot, urls);
  }
};
