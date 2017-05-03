var abstract = require('./abstract');
var applicants = require('./applicants');
var application = require('./application');
var citation = require('./citation');
var claims = require('./claims');
var classification = require('./classification');
var inventors = require('./inventors');
var pub = require('./publication');
var title = require('./title');

module.exports = {
  abstract: abstract,
  applicants: applicants,
  application: application,
  citation: citation,
  claims: claims,
  classification: classification,
  inventionTitle: title,
  inventors: inventors,
  publication: pub
};