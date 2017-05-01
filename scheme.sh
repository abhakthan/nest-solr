curl -X POST -H 'Content-type:application/json' --data-binary '{
  "add-field": {
     "name": "family_id",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "country",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "doc_number",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "kind",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "name",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "title",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "path",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "scheme",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "classification_symbol",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "symbol_position",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "classification_value",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "classification_status",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "classification_data_source",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "cited_phase",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "date",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "date_added_docdb",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "date_of_last_exchange",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "date_publ",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "doc_id",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "is_representative",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "originating_office",
     "type": "strings",
     "indexed": false,
     "multiValued": false }
}' http://localhost:8983/solr/docdb/schema
