'use strict';
const Funnel = require('broccoli-funnel');
const chalk = require('chalk');
const generateSitemap = require('./lib/sitemap-generator').generateSitemap;
const writeFile = require('broccoli-file-creator');

let urls = [];

module.exports = {
  name: require('./package').name,

  urlsFromPrember(premberUrls) {
    urls = premberUrls || [];
  },

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
      const tree = writeFile('/prember-sitemap-generator/sitemap.xml', generateSitemap(baseRoot, urls));

      this.ui.writeLine(chalk.green('sitemap.xml successfully created!'));

      return new Funnel(tree, {
        srcDir: 'prember-sitemap-generator'
      });
    }
  }
};
