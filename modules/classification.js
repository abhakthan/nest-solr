var _ = require('lodash');

function get(doc) {

  var json = [];
  var id = doc.attrkey.doc_id;

  if (doc.exch_bibliographic_data &&
    doc.exch_bibliographic_data.exch_patent_classifications &&
    doc.exch_bibliographic_data.exch_patent_classifications.patent_classification) {

    var class_ref = doc.exch_bibliographic_data.exch_patent_classifications.patent_classification;

    _.forEach(class_ref, function (element) {

      var classification = {};

      if (element.classification_scheme.attrkey.scheme) {
        classification = {
          id: id + '-' + element.classification_symbol,
          path: 'classification',
          scheme: element.classification_scheme.attrkey.scheme,
          classification_symbol: element.classification_symbol,
          symbol_position: element.symbol_position,
          classification_value: element.classification_value,
          classification_status: element.classification_status,
          classification_data_source: element.classification_data_source
        }
        json.push(classification)
      }
    });
    return json;
  }
}

module.exports = get;
