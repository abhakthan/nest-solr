var _ = require('lodash');

function get(doc) {

  var json = [];
  var id = doc.attrkey.doc_id;

  if (doc.exch_bibliographic_data &&
    doc.exch_bibliographic_data.exch_publication_reference) {

    var pub_ref = doc.exch_bibliographic_data.exch_publication_reference;

    _.forEach(pub_ref, function (element) {
      if (element.document_id && element.attrkey.data_format === 'docdb') {
        var docdb = element.document_id;
        json.push({
          id: id + '-' + docdb.doc_number,
          level: 'publication',
          dataType: 'docdb',
          country: docdb.country,
          docNumber: docdb.doc_number,
          kind: docdb.kind,
          date: docdb.date
        });
      }
    });
    return json;
  }
}

module.exports = get;
