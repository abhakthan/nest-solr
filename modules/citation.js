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
          level: 'citation',
          dataType: 'patcit',
          country: docdb.country,
          docNumber: docdb.doc_number,
          kind: docdb.kind,
          personName: docdb.name,
          date: docdb.date
        }

        json.push(cit)
      } else if (element.nplcit && element.nplcit.text) {
        var data = element.nplcit;
        cit = {
          id: id + '-' + data.attrkey.num,
          level: 'citation',
          dataType: 'nplcit',
          nplType: data.attrkey.npl_type,
          text: data.text
        }
        json.push(cit)
      }
    });
    return json;
  }
}

module.exports = get;
