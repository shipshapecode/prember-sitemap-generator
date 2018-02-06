'use strict';

const currentDate = new Date();

/**
 * Formats the date in a YYYY-MM-DD format, to comply with sitemaps
 * @returns {string|*} The formatted date string
 */
function formatDate() {
  let date, year, month, day;
  day = currentDate.getDate();
  month = currentDate.getMonth() + 1;
  year = currentDate.getFullYear();
  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;
  date = year + '-' + month + '-' + day;
  return date;
}

module.exports = {
  /**
   * Generates the sitemap content by iterating through the urls
   * @param {string} baseRoot The root to prepend to all your urls
   * @param [{string}] urls The urls provided to prember
   * @returns {string} The sitemap.xml file content
   */
  generateSitemap(baseRoot, urls) {
    let fileData = '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

    urls.forEach(function (url) {
      fileData += ('\n  <url>\n    <loc>');
      fileData += (`${baseRoot}${url}`);
      fileData += ('</loc>\n    <lastmod>' + formatDate(currentDate) + '</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>');
    });

    fileData += ('\n</urlset>');

    return fileData;
  }
};
