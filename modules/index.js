var pub = require('./publication');
var app = require('./application');
var title = require('./title');
var citation = require('./citation');
var classification = require('./classification');

module.exports = {
  application: app,
  citation: citation,
  classification: classification,
  inventionTitle: title,
  publication: pub
};