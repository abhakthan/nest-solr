var _ = require('lodash');

function get(doc) {

  var json = [];
  var id = doc.attrkey.doc_id;

  if (doc.exch_bibliographic_data &&
    doc.exch_bibliographic_data.exch_application_reference) {

    var app_ref = doc.exch_bibliographic_data.exch_application_reference;

    _.forEach(app_ref, function (element) {
      if (element.document_id && element.attrkey.data_format === 'docdb') {
        var docdb = element.document_id;
        json.push({
          id: id + '-' + docdb.doc_number,
          path: 'application.docdb',
          country: docdb.country,
          doc_number: docdb.doc_number,
          kind: docdb.kind,
          date: docdb.date
        });
      } else if (element.document_id && element.attrkey.data_format === 'original') {
        var original = element.document_id;
        json.push({
          id: id + '-' + original.doc_number,
          path: 'application.original',
          doc_number: original.doc_number,
        })
      }
    });
    return json;
  }
}

module.exports = get;