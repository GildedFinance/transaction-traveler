"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
test('My Transaction Traveler', function () {
    var tt = new __1.TransactionTraveler();
    tt.getTraveler(__1.Network.RequestNetwork);
    var fakeInvoice = {
        "client_id": "57vbiFS7xb1pv9EeI4nR",
        "created_at": {
            "seconds": 1544636434,
            "nanoseconds": 230000000
        },
        "date_due": "2018-12-12",
        "date_send": {
            "seconds": 1544636434,
            "nanoseconds": 230000000
        },
        "discount": 0,
        "fiat_currency": "EUR",
        "invoice_method": "address",
        "invoice_number": 531,
        "items": [
            {
                "amount": 10,
                "description": "CryptoCoin",
                "quantity": 2,
                "unit_price": 100
            }
        ],
        "notes": "test",
        "payment_type": "send",
        "receive_currency": "BTC",
        "ref": "lacEHAFDbUXiTvlAIeJM",
        "status": "unpaid",
        "title": "Adres",
        "total_amount": 0,
        "updated_at": {
            "seconds": 1544636434,
            "nanoseconds": 230000000
        },
        "user_id": "h6pU6SwyloTOfPffOWsng4BINoj2",
        "user": {
            "_isScalar": false,
            "source": {
                "_isScalar": false
            },
            "operator": {}
        },
        "user_client": {
            "_isScalar": false,
            "source": {
                "_isScalar": false
            },
            "operator": {}
        },
        "transaction_data": {
            "_isScalar": false,
            "source": {
                "_isScalar": false
            },
            "operator": {}
        }
    };
    var result = tt.convertInvoice(fakeInvoice, __1.Network.Base, __1.Network.RequestNetwork);
    var expectedResult = { meta: { format: 'rnf_invoice', version: '0.0.2' },
        invoiceNumber: '531',
        creationDate: { seconds: 1544636434, nanoseconds: 230000000 },
        invoiceItems: [{ name: 'CryptoCoin',
                quantity: 2,
                unitPrice: '100',
                taxPercent: 0,
                currency: 'EUR' }],
        purchaseOrderId: 'lacEHAFDbUXiTvlAIeJM',
        note: 'test' };
    // match req format data
    expect(result).toMatchObject(expectedResult);
});
