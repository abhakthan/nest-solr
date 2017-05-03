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

      /*
        // write individual json file
        for (var i = 0; i < documents.length; i++) {
          fs.writeFile(__dirname + '/json/' + i + '.json', JSON.stringify(documents[i], null, '  '), 'utf8', function (err) {
            if (err) {
              console.log(err);
            }
            console.log(jsonFileName);
          });
        }
      */

      // /*
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
      // */

    });
  });
}

function childDocuments(documents) {
  var rows = [];

  _.forEach(documents, function (element) {

    var row = {
      id: element.attrkey.doc_id,
      country: element.attrkey.country,
      docNumber: element.attrkey.doc_number,
      kind: element.attrkey.kind,
      familyId: element.attrkey.family_id,
      datePubl: element.attrkey.date_publ,
      originatingOffice: element.attrkey.originating_office
    }

    var child = [];

    var pub = docdb.publication(element);
    if (pub && pub.length > 0) {
      child = _.concat(child, pub);
    }
    pub = undefined;

    var app = docdb.application(element);
    if (app && app.length > 0) {
      child = _.concat(child, app);
    }
    app = undefined;

    var cit = docdb.citation(element);
    if (cit && cit.length > 0) {
      child = _.concat(child, cit);
    }
    cit = undefined;

    var cls = docdb.classification(element);
    if (cls && cls.length > 0) {
      child = _.concat(child, cls);
    }
    cls = undefined;

    var claims = docdb.claims(element);
    if (claims && claims.length > 0) {
      child = _.concat(child, claims);
    }
    claims = undefined;

    var applicants = docdb.applicants(element);
    if (applicants && applicants.length > 0) {
      child = _.concat(child, applicants);
    }
    applicants = undefined;

    var inventors = docdb.inventors(element);
    if (inventors && inventors.length > 0) {
      child = _.concat(child, inventors);
    }
    inventors = undefined;

    row['level'] = "root";
    row['_childDocuments_'] = child;

    var title = docdb.inventionTitle(element);
    if (title) {
      row['title'] = title;
    }
    title = undefined;

    var abstract = docdb.abstract(element);
    if (abstract) {
      row['abstract'] = abstract;
    }
    abstract = undefined;

    rows.push(row);
  });

  return rows;
}

/**
 * Add the keys to the main json and only
 * add if there is data or has values in array
 * 
 * @param {*} row 
 * @param {*} key 
 * @param {*} value 
 * @param {*} isArray 
 */
function addToMain(row, key, value, isArray) {
  var data = docdb[key](value);
  if (isArray) {
    if (data && data.length > 0) {
      row[key] = data;
    }
  } else {
    if (data) {
      row[key] = data;
    }
  }
  data = undefined;
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
