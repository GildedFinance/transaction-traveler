"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var shared_1 = require("../lib/shared");
test('My Transaction Traveler', function () {
    var tt = new index_1.TransactionTraveler();
    tt.getTraveler(shared_1.Network.RequestNetwork);
    var result = tt.convertInvoice({ name: 'test' }, shared_1.Network.Base, shared_1.Network.RequestNetwork);
    console.log(result);
    expect(result).toBe('Hello Carl');
});
