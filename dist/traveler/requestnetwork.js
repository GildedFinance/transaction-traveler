"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RequestNetworkTraveler = /** @class */ (function () {
    function RequestNetworkTraveler() {
    }
    RequestNetworkTraveler.prototype.validateRequestNetworkData = function (dataObject) {
        return RequestNetworkDataFormat.validate(dataObject);
    };
    RequestNetworkTraveler.prototype.convertTransactionTo = function (txn) {
        return txn;
    };
    RequestNetworkTraveler.prototype.convertTransactionFrom = function (txn) {
        return txn;
    };
    RequestNetworkTraveler.prototype.convertInvoiceTo = function (invoice) {
        return invoice;
    };
    RequestNetworkTraveler.prototype.convertInvoiceFrom = function (invoice) {
        return invoice;
    };
    return RequestNetworkTraveler;
}());
exports.RequestNetworkTraveler = RequestNetworkTraveler;
