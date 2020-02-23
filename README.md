# EXPRESS SOAP SERVER

This repository implements a simple soap server that uses express framwwork.

## Install application
```
> # Install the application
> npm install
```

## Run server
```
> # Run the server
> npm run start
```

# Test SOAP operations
To call the SOAP operation `GetSubscriberInventoryId` issue the following command
```
curl --location --request POST 'http://localhost:3000/GetSubscriberInventoryId' \
--header 'Content-Type: application/xml' \
--data-raw '<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.cdyne.com/"><soapenv:Header /><soapenv:Body><ws:GetSubscriberInventoryId><ws:SubscriberId>07777722222</ws:SubscriberId></ws:GetSubscriberInventoryId></soapenv:Body></soapenv:Envelope>'
```

To call the SOAP operation `GetSubscriberConnectionHistory` issue the following command
```
curl --location --request POST 'http://localhost:3000/GetSubscriberConnectionHistory' \
--header 'Content-Type: text/plain' \
--data-raw '<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.cdyne.com/"><soapenv:Header /><soapenv:Body><ws:GetSubscriberInventoryId><ws:SubscriberId>07777722222</ws:SubscriberId></ws:GetSubscriberInventoryId></soapenv:Body></soapenv:Envelope>'
```
