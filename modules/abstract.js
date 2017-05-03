function get(doc) {
  if (doc.exch_abstract) {
    return doc.exch_abstract.exch_p;
  }
}

module.exports = get;