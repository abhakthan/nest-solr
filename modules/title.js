function get(doc) {
  if (doc.exch_bibliographic_data &&
    doc.exch_bibliographic_data.exch_invention_title) {
    return doc.exch_bibliographic_data.exch_invention_title.charkey;
  } else {
    return '';
  }
}

module.exports = get;