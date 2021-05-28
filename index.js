'use strict';
const chalk = require('chalk');
const generateSitemap = require('./lib/sitemap-generator').generateSitemap;
const fs = require('fs');

let urls = [];

module.exports = {
  name: require('./package').name,

  async urlsFromPrember(premberUrls) {
    urls = await premberUrls || [];
  },

  outputReady() {
    if (process.env.EMBER_ENV === 'production') {
      const premberOptions = this.app.options['prember'];
      const baseRoot = premberOptions.baseRoot;
      if (!baseRoot) {
        return this.ui.writeLine(chalk.red(
          'ERROR: You must define `baseRoot` for prember-sitemap-generator to generate sitemaps.'
        ));
      }
      fs.writeFileSync('dist/sitemap.xml', generateSitemap(baseRoot, urls));
      this.ui.writeLine(chalk.green('sitemap.xml successfully created!'));
    }
  }
};
