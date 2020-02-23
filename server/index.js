const express = require('express');
const app = express();
const port = 3000;

const getSubscriberInventoryIdResponse       = '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Header><ns1:RequestHeader xmlns:ns1="https://www.google.com/apis/ads/publisher/v202002" soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0"><ns1:networkCode>123456</ns1:networkCode><ns1:applicationName>DfpApi-Java-2.1.0-dfp_test</ns1:applicationName></ns1:RequestHeader></soapenv:Header><soapenv:Body><getSubscriberInventoryIdResponse xmlns="https://www.google.com/apis/ads/publisher/v202002">VODA001</getSubscriberInventoryIdResponse></soapenv:Body></soapenv:Envelope>';
const getSubscriberConnectionHistoryResponse = '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><soapenv:Header><ns1:RequestHeader xmlns:ns1="https://www.google.com/apis/ads/publisher/v202002" soapenv:actor="http://schemas.xmlsoap.org/soap/actor/next" soapenv:mustUnderstand="0"><ns1:networkCode>123456</ns1:networkCode><ns1:applicationName>DfpApi-Java-2.1.0-dfp_test</ns1:applicationName></ns1:RequestHeader></soapenv:Header><soapenv:Body><GetSubscriberConnectionHistoryResponse><ServiceType>PAYG</ServiceType><ListofServiceCharacteristics><Status>Connected</Status><Product>BROADBAND</Product></ListofServiceCharacteristics></GetSubscriberConnectionHistoryResponse></soapenv:Body></soapenv:Envelope>';

app.post('/GetSubscriberInventoryId', (req, res) => {
    res.set('Content-Type', 'text/xml');
    res.send(getSubscriberInventoryIdResponse);
});

app.post('/GetSubscriberConnectionHistory', (req, res) => {
    res.set('Content-Type', 'text/xml');
    res.send(getSubscriberConnectionHistoryResponse);

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))