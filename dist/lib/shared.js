"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Network;
(function (Network) {
    Network[Network["Base"] = 0] = "Base";
    Network[Network["Coinbase"] = 1] = "Coinbase";
    Network[Network["Etherscan"] = 2] = "Etherscan";
    Network[Network["QuickBooks"] = 3] = "QuickBooks";
    Network[Network["RequestNetwork"] = 4] = "RequestNetwork";
    // always keep this in the existing order since this is an enum
})(Network = exports.Network || (exports.Network = {}));
var Traveler = /** @class */ (function () {
    function Traveler() {
    }
    Traveler.prototype.convertTransactionTo = function (txn) {
    };
    Traveler.prototype.convertTransactionFrom = function (txn) {
    };
    Traveler.prototype.convertInvoiceTo = function (invoice) {
    };
    Traveler.prototype.convertInvoiceFrom = function (invoice) {
        return invoice;
    };
    return Traveler;
}());
exports.Traveler = Traveler;
