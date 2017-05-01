// node --max-old-space-size=4076 index.js

var fs = require('fs');
var xml2js = require('xml2js');
var _ = require('lodash');

var docdb = require('./modules/index');

function snakeCase(name) {
  return _.snakeCase(name);
}

var parser = new xml2js.Parser({
  tagNameProcessors: [snakeCase],
  attrNameProcessors: [snakeCase],
  explicitRoot: false,
  normalizeTags: true,
  normalize: true,
  strict: false,
  explicitArray: false,
  attrkey: 'attrkey',
  charkey: 'charkey'
});

var folder = 'xml/';

function xmlToJson(files, count) {

  var xmlFileName = __dirname + '/' + folder + files[count];

  var jsonFileName = __dirname + '/json/' + files[count] + '.json';

  console.log(xmlFileName);

  var start = (new Date()).getTime();

  fs.readFile(xmlFileName, function (err, data) {
    parser.parseString(data, function (err, result) {
      console.log(((new Date()).getTime() - start) / 1000);

      var documents = result['exch_exchange_document'];

      var rows = childDocuments(documents);

      fs.writeFile(jsonFileName, JSON.stringify(rows, null, '  '), 'utf8', function (err) {
        if (err) {
          console.log(err);
        }
        console.log(jsonFileName);
        // if (count < files.length) {
        //   ++count;
        //   xmlToJson(files, count);
        // }
      });

    });
  });
}

function childDocuments(documents) {
  var rows = [];

  _.forEach(documents, function (element) {
    var row = element.attrkey;
    var child = [];

    var pub = docdb.publication(element);
    if (pub && pub.length > 0) {
      child = _.concat(child, pub);
    }

    var app = docdb.application(element);
    if (app && app.length > 0) {
      child = _.concat(child, app);
    }

    var cit = docdb.citation(element);
    if (cit && cit.length > 0) {
      child = _.concat(child, cit);
    }

    var cls = docdb.classification(element);
    if (cls && cls.length > 0) {
      child = _.concat(child, cls);
    }

    row['path'] = "root";
    row['_childDocuments_'] = child;

    row['id'] = row.doc_id;
    row['title'] = docdb.inventionTitle(element);

    rows.push(row);
  });

  return rows;
}

function flat(documents) {
  var rows = [];

  _.forEach(documents.splice(0, 10), function (element) {
    var row = element.attrkey;
    var child = {};

    row['pub'] = docdb.publication(element);
    row['app'] = docdb.application(element);

    var cit = docdb.citation(element);
    if (cit && cit.length > 0) {
      row['cit'] = cit;

    }
    row['id'] = row.doc_id;
    row['title'] = docdb.inventionTitle(element);

    rows.push(row);
  });

  return rows;
}

fs.readdir(folder, (err, files) => {
  xmlToJson(files, 0);
})
