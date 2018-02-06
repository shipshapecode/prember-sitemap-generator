'use strict';
const Funnel = require('broccoli-funnel');
const chalk = require('chalk');
const generateSitemap = require('./lib/sitemap-generator').generateSitemap;
const writeFile = require('broccoli-file-creator');

module.exports = {
  name: 'prember-sitemap-generator',

  treeForPublic() {
    this._super.treeForPublic && this._super.treeForPublic.apply(this, arguments);

    if (process.env.EMBER_ENV === 'production') {
      const premberOptions = this.app.options['prember'];
      const baseRoot = premberOptions.baseRoot;
      if (!baseRoot) {
        return this.ui.writeLine(chalk.red(
          'ERROR: You must define `baseRoot` for prember-sitemap-generator to generate sitemaps.'
        ));
      }
      const urls = premberOptions && premberOptions.urls ? premberOptions.urls : [];
      const tree = writeFile('/prember-sitemap-generator/sitemap.xml', generateSitemap(baseRoot, urls));

      return new Funnel(tree, {
        srcDir: 'prember-sitemap-generator'
      });
    }
  }
};
