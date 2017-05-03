var _ = require('lodash');

function get(doc) {

  var json = [];
  var id = doc.attrkey.doc_id;

  if (doc.exch_bibliographic_data &&
    doc.exch_bibliographic_data.exch_parties &&
    doc.exch_bibliographic_data.exch_parties.exch_inventors) {

    var inventors = doc.exch_bibliographic_data.exch_parties.exch_inventors.exch_inventor;

    _.forEach(inventors, function (inventor) {
      var el = {
      };

      if (inventor.exch_inventor_name) {
        el['id'] = id + '-' + inventor.attrkey.sequence;
        el['level'] = 'inventors';
        el['personName'] = inventor.exch_inventor_name.name;

        if (inventor.residence) {
          el['country'] = inventor.residence.country;
        }
      } else if (inventor.residence) {
        el['id'] = id + '-' + _.random(1, 1000);
        el['level'] = 'inventors';
        el['country'] = inventor.residence.country;
      }

      if (!_.isEmpty(el)) {
        json.push(el);
      }

    });
    return json;
  }
}

module.exports = get;
