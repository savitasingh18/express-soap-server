const express = require('express');
var xmlparser = require('express-xml-bodyparser');

const app = express();
const port = 3000;
app.use(xmlparser());

const UNHAPPY_CASE_MSISDN = '09999999999';

const getSubscriberInventoryIdHapppyResponse       = '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Header><ns1:RequestHeader xmlns:ns1="https://www.google.com/apis/ads/publisher/v202002" soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0"><ns1:networkCode>123456</ns1:networkCode><ns1:applicationName>DfpApi-Java-2.1.0-dfp_test</ns1:applicationName></ns1:RequestHeader></soapenv:Header><soapenv:Body><getSubscriberInventoryIdResponse xmlns="https://www.google.com/apis/ads/publisher/v202002">VODA001</getSubscriberInventoryIdResponse></soapenv:Body></soapenv:Envelope>';
const getSubscriberInventoryIdErrorResponse        = '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/1999/XMLSchema" xmlns:xsi="http://www.w3.org/1999/XMLSchema-instance"><SOAP-ENV:Body><SOAP-ENV:Fault><faultcode xsi:type="xsd:string">SOAP-ENV:Client</faultcode><faultstring xsi:type="xsd:string">Failed to fetch Inventory records</faultstring></SOAP-ENV:Fault></SOAP-ENV:Body></SOAP-ENV:Envelope>';
const getSubscriberConnectionHistoryHappyResponse = '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Header><ns1:RequestHeader xmlns:ns1="https://www.google.com/apis/ads/publisher/v202002" soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0"><ns1:networkCode>123456</ns1:networkCode><ns1:applicationName>DfpApi-Java-2.1.0-dfp_test</ns1:applicationName></ns1:RequestHeader></soapenv:Header><soapenv:Body><GetSubscriberConnectionHistoryResponse><ServiceType>PAYG</ServiceType><ListofServiceCharacteristics><Status>Connected</Status><Product>BROADBAND</Product></ListofServiceCharacteristics></GetSubscriberConnectionHistoryResponse></soapenv:Body></soapenv:Envelope>';
const getSubscriberConnectionHistoryErrorResponse = '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/1999/XMLSchema" xmlns:xsi="http://www.w3.org/1999/XMLSchema-instance"><SOAP-ENV:Body><SOAP-ENV:Fault><faultcode xsi:type="xsd:string">SOAP-ENV:Client</faultcode><faultstring xsi:type="xsd:string">No Connection history Exists for this Subscriber</faultstring></SOAP-ENV:Fault></SOAP-ENV:Body></SOAP-ENV:Envelope>';

app.post('/GetSubscriberInventoryId', (req, res) => {
    res.set('Content-Type', 'text/xml');
    let body = JSON.stringify(req.body);
    if (body.includes(UNHAPPY_CASE_MSISDN)) { 
        res.send(getSubscriberInventoryIdErrorResponse);
    } else {
        res.send(getSubscriberInventoryIdHapppyResponse);
    }
});

app.post('/GetSubscriberConnectionHistory', (req, res) => {
    res.set('Content-Type', 'text/xml');
    let body = JSON.stringify(req.body);
    if (body.includes(UNHAPPY_CASE_MSISDN)) { 
        res.send(getSubscriberConnectionHistoryErrorResponse);
    } else {
        res.send(getSubscriberConnectionHistoryHappyResponse);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))