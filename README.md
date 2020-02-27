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
This mock server is data driven.<BR>
Any request with MSISDN `07777777777` shall be responded with a success response.<BR>
Any request with MSISDN `09999999999` shall be responded with a success response.<BR> 
<BR>
The above behaviour is coded in ./server/index.js. Feel free to change them.<BR>

To call the SOAP operation `GetSubscriberInventoryId` with a happy case MSISDN issue the following command

```
curl --location --request POST 'http://localhost:3000/GetSubscriberInventoryId' \
--header 'Content-Type: application/atom+xml' \
--data-raw '<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.cdyne.com/"><soapenv:Header /><soapenv:Body><ws:GetSubscriberInventoryId><ws:SubscriberId>07777777777</ws:SubscriberId></ws:GetSubscriberInventoryId></soapenv:Body></soapenv:Envelope>'
```

To call the SOAP operation `GetSubscriberConnectionHistory` issue the following command

```
curl --location --request POST 'http://localhost:3000/GetSubscriberConnectionHistory' \
--header 'Content-Type: application/xml' \
--data-raw '<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.cdyne.com/"><soapenv:Header /><soapenv:Body><ws:GetSubscriberInventoryId><ws:SubscriberId>07777722222</ws:SubscriberId></ws:GetSubscriberInventoryId></soapenv:Body></soapenv:Envelope>'
```
<BR>
Alternatively, use postman collections that are available in this repository.