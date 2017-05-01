

https://artillery.io/docs/gettingstarted.html

## Run load test
DEBUG=http:response artillery run solr.yml

## Convert Data
node --max-old-space-size=4076 index.js

## Ingest Data
bin/post -c docdb ../json/ -format solr

### Ref
https://github.com/alisatl/solr-revolution-2016-nested-demo
https://artillery.io/docs/gettingstarted.html

### Other Commands
http://localhost:8983/solr/docdb/schema/fields
http://localhost:8983/solr/docdb/select?q=title:*articles*&wt=json&indent=true
http://localhost:8983/solr/docdb/select?q={!child of="path:root"}title:*articles*&wt=json&indent=true
http://localhost:8983/solr/docdb/select?q={!parent which="path:root"}doc_number:09273962&wt=json&indent=true

http://localhost:8983/solr/docdb/select?q={!parent which="family_id:23046183"}doc_number:09273962&wt=json&indent=true

curl http://localhost:8983/solr/docdb/update?commit=true -d '{delete:{query:"*:*"}}'
curl 'http://localhost:8983/solr/docdb/update?commit=true' --data-binary @data.json -H 'Content-type:application/json'
curl 'http://localhost:8983/solr/docdb/update/json/docs?commit=true' --data-binary @data_0.json


