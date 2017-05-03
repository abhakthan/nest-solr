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
          id: id + '-' + element.attrkey.sequence,
          level: 'classification',
          scheme: element.classification_scheme.attrkey.scheme,
          classificationSymbol: element.classification_symbol,
          symbolPosition: element.symbol_position,
          classificationValue: element.classification_value,
          classificationStatus: element.classification_status,
          classificationDataSource: element.classification_data_source
        }
        json.push(classification)
      }
    });
    return json;
  }
}

module.exports = get;
