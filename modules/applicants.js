var _ = require('lodash');

function get(doc) {

  var json = [];
  var id = doc.attrkey.doc_id;

  if (doc.exch_bibliographic_data &&
    doc.exch_bibliographic_data.exch_parties &&
    doc.exch_bibliographic_data.exch_parties.exch_applicants) {

    var applicants = doc.exch_bibliographic_data.exch_parties.exch_applicants.exch_applicant;

    _.forEach(applicants, function (applicant) {
      var el = {
      };

      if (applicant.exch_applicant_name) {
        el['id'] = id + '-' + applicant.attrkey.sequence;
        el['level'] = 'applicants';
        el['personName'] = applicant.exch_applicant_name.name;

        if (applicant.residence) {
          el['country'] = applicant.residence.country;
        }
      }

      if (!_.isEmpty(el)) {
        json.push(el);
      }

    });
    return json;
  }
}

module.exports = get;
