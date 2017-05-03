var _ = require('lodash');

function get(doc) {

  var json = [];
  var id = doc.attrkey.doc_id;

  if (doc.exch_bibliographic_data &&
    doc.exch_bibliographic_data.exch_priority_claims) {

    var claims = doc.exch_bibliographic_data.exch_priority_claims.exch_priority_claim;

    _.forEach(claims, function (priority) {
      if (priority.document_id && priority.attrkey.data_format === 'docdb') {
        var docdb = priority.document_id;
        json.push({
          id: id + '-' + docdb.doc_number,
          level: 'priority',
          dataType: 'docdb',
          country: docdb.country,
          docNumber: docdb.doc_number,
          kind: docdb.kind,
          date: docdb.date
        });
      } else if (priority.document_id && priority.attrkey.data_format === 'original') {
        var docdb = priority.document_id;
        json.push({
          id: id + '-' + docdb.doc_number,
          level: 'priority',
          dataType: 'original',
          docNumber: docdb.doc_number,
        });
      }

    });
    return json;
  }
}

module.exports = get;
