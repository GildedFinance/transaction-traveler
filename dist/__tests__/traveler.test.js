"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var shared_1 = require("../lib/shared");
test('My Transaction Traveler', function () {
    var tt = new index_1.TransactionTraveler();
    tt.getTraveler(shared_1.Network.RequestNetwork);
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
                "amount": 0,
                "description": "item",
                "quantity": 1,
                "unit_price": null
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
    var result = tt.convertInvoice(fakeInvoice, shared_1.Network.Base, shared_1.Network.RequestNetwork);
    console.log(result);
    // first test
    expect(1).toBe(1);
});
