'use strict';

const fs = require('fs');
const path = require('path');

let fileData = '';
const currentDate = new Date();
const header = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

function formatDate() {
  let date, year, month, day;
  day = currentDate.getDate(), month = currentDate.getMonth() + 1, year = currentDate.getFullYear();
  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;
  date = year + '-' + month + '-' + day;
  return date;
}

module.exports = {
  generateSitemap(baseRoot, urls) {
    urls.forEach(function (url, index) {
      if (index === 0) fileData += header; // Write the header
      fileData += ('\n  <url>\n    <loc>');
      fileData += (`${baseRoot}${url}`);
      fileData += ('</loc>\n    <lastmod>' + formatDate(currentDate) + '</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>');
    });
    fileData += ('\n</urlset>');

    return fileData;
  }
};
