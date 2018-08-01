"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Transaction types are relative to the user viewing them
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["send"] = 0] = "send";
    TransactionType[TransactionType["request"] = 1] = "request";
    TransactionType[TransactionType["transfer"] = 2] = "transfer";
    TransactionType[TransactionType["buy"] = 3] = "buy";
    TransactionType[TransactionType["sell"] = 4] = "sell";
    TransactionType[TransactionType["fiat_deposit"] = 5] = "fiat_deposit";
    TransactionType[TransactionType["fiat_withdrawal"] = 6] = "fiat_withdrawal";
    TransactionType[TransactionType["exchange_deposit"] = 7] = "exchange_deposit";
    TransactionType[TransactionType["exchange_withdrawal"] = 8] = "exchange_withdrawal";
    TransactionType[TransactionType["vault_withdrawal"] = 9] = "vault_withdrawal";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus[TransactionStatus["pending"] = 0] = "pending";
    TransactionStatus[TransactionStatus["completed"] = 1] = "completed";
    TransactionStatus[TransactionStatus["failed"] = 2] = "failed";
    TransactionStatus[TransactionStatus["expired"] = 3] = "expired";
    TransactionStatus[TransactionStatus["canceled"] = 4] = "canceled";
    TransactionStatus[TransactionStatus["waiting_for_signature"] = 5] = "waiting_for_signature";
    TransactionStatus[TransactionStatus["waiting_for_clearing"] = 6] = "waiting_for_clearing";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
