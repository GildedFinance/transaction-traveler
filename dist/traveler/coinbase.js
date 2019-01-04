"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoinbaseTraveler = /** @class */ (function () {
    function CoinbaseTraveler() {
    }
    CoinbaseTraveler.prototype.convertTransactionTo = function (txn) {
    };
    CoinbaseTraveler.prototype.convertTransactionFrom = function (txn) {
    };
    CoinbaseTraveler.prototype.convertInvoiceTo = function (invoice) {
        return invoice;
    };
    CoinbaseTraveler.prototype.convertInvoiceFrom = function (invoice) {
        return invoice;
    };
    return CoinbaseTraveler;
}());
exports.CoinbaseTraveler = CoinbaseTraveler;
