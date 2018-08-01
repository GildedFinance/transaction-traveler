"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Transaction types are relative to the user viewing them
var ETransactionTypes;
(function (ETransactionTypes) {
    ETransactionTypes[ETransactionTypes["send"] = 0] = "send";
    ETransactionTypes[ETransactionTypes["request"] = 1] = "request";
    ETransactionTypes[ETransactionTypes["transfer"] = 2] = "transfer";
    ETransactionTypes[ETransactionTypes["buy"] = 3] = "buy";
    ETransactionTypes[ETransactionTypes["sell"] = 4] = "sell";
    ETransactionTypes[ETransactionTypes["fiat_deposit"] = 5] = "fiat_deposit";
    ETransactionTypes[ETransactionTypes["fiat_withdrawal"] = 6] = "fiat_withdrawal";
    ETransactionTypes[ETransactionTypes["exchange_deposit"] = 7] = "exchange_deposit";
    ETransactionTypes[ETransactionTypes["exchange_withdrawal"] = 8] = "exchange_withdrawal";
    ETransactionTypes[ETransactionTypes["vault_withdrawal"] = 9] = "vault_withdrawal";
})(ETransactionTypes = exports.ETransactionTypes || (exports.ETransactionTypes = {}));
var ETransactionStatuses;
(function (ETransactionStatuses) {
    ETransactionStatuses[ETransactionStatuses["pending"] = 0] = "pending";
    ETransactionStatuses[ETransactionStatuses["completed"] = 1] = "completed";
    ETransactionStatuses[ETransactionStatuses["failed"] = 2] = "failed";
    ETransactionStatuses[ETransactionStatuses["expired"] = 3] = "expired";
    ETransactionStatuses[ETransactionStatuses["canceled"] = 4] = "canceled";
    ETransactionStatuses[ETransactionStatuses["waiting_for_signature"] = 5] = "waiting_for_signature";
    ETransactionStatuses[ETransactionStatuses["waiting_for_clearing"] = 6] = "waiting_for_clearing";
})(ETransactionStatuses = exports.ETransactionStatuses || (exports.ETransactionStatuses = {}));
var ENetwork;
(function (ENetwork) {
    ENetwork[ENetwork["coinbase"] = 0] = "coinbase";
    ENetwork[ENetwork["etherscan"] = 1] = "etherscan";
    ENetwork[ENetwork["quickbooks"] = 2] = "quickbooks";
    ENetwork[ENetwork["requestnetwork"] = 3] = "requestnetwork";
})(ENetwork = exports.ENetwork || (exports.ENetwork = {}));
var TransactionTraveler = (function () {
    function TransactionTraveler() {
    }
    TransactionTraveler.prototype.from = function (txn, network) {
    };
    TransactionTraveler.prototype.to = function (txn, network) {
    };
    return TransactionTraveler;
}());
exports.TransactionTraveler = TransactionTraveler;
