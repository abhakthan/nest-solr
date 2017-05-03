curl -X POST -H 'Content-type:application/json' --data-binary '{
  "add-field": {
     "name": "familyId",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "country",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "docNumber",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "kind",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "personName",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "dataType",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "title",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "abstract",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "level",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "scheme",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "classificationSymbol",
     "type": "strings",
     "indexed": true,
     "multiValued": false },
  "add-field": {
     "name": "symbolPosition",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "classificationValue",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "classificationStatus",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "classificationDataSource",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "date",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "datePubl",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "originatingOffice",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "nplType",
     "type": "strings",
     "indexed": false,
     "multiValued": false },
  "add-field": {
     "name": "text",
     "type": "strings",
     "indexed": false,
     "multiValued": false }
}' http://localhost:8983/solr/docdb/schema
