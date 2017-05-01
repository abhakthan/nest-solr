var _ = require('lodash');

function get(doc) {

  var json = [];
  var id = doc.attrkey.doc_id;

  if (doc.exch_bibliographic_data &&
    doc.exch_bibliographic_data.exch_references_cited &&
    doc.exch_bibliographic_data.exch_references_cited.exch_citation) {

    var cit_ref = doc.exch_bibliographic_data.exch_references_cited.exch_citation;

    _.forEach(cit_ref, function (element) {

      var cit = {};

      if (element.patcit && element.patcit.document_id) {
        var docdb = element.patcit.document_id;
        cit = {
          id: id + '-' + docdb.doc_number,
          path: 'citation.docdb',
          country: docdb.country,
          doc_number: docdb.doc_number,
          kind: docdb.kind,
          name: docdb.name,
          date: docdb.date
        }

        if (element.attrkey && element.attrkey.cited_phase) {
          cit['cited_phase'] = element.attrkey.cited_phase;
        }

        json.push(cit)
      }
    });
    return json;
  }
}

module.exports = get;
