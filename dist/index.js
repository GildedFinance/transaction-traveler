"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("./lib/shared");
var Travelers = require("./traveler");
var TransactionTraveler = (function () {
    function TransactionTraveler() {
    }
    TransactionTraveler.prototype.convertTransaction = function (txn, from, to) {
        var base = txn;
        if (from !== shared_1.Network.Base) {
            var f = this.getTraveler(from);
            base = f.convertTransactionFrom(txn);
        }
        if (to) {
            var t = this.getTraveler(to);
            return t.convertTransactionTo(base);
        }
        return base;
    };
    TransactionTraveler.prototype.convertInvoice = function (invoice, from, to) {
        var base = invoice;
        if (from !== shared_1.Network.Base) {
            var f = this.getTraveler(from);
            base = f.convertInvoiceFrom(invoice);
        }
        if (to) {
            var t = this.getTraveler(to);
            return t.convertInvoiceTo(base);
        }
        return base;
    };
    TransactionTraveler.prototype.getTraveler = function (network) {
        switch (network) {
            case shared_1.Network.Coinbase: return new Travelers.CoinbaseTraveler();
            case shared_1.Network.QuickBooks: return new Travelers.QuickBooksTraveler();
            case shared_1.Network.RequestNetwork: return new Travelers.RequestNetworkTraveler();
            default: throw new Error('Unknown network: ' + network);
        }
    };
    return TransactionTraveler;
}());
exports.TransactionTraveler = TransactionTraveler;
