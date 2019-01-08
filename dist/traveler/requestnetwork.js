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
        // very simple data
        var invoiceItems = [];
        if (undefined !== invoice.items) {
            invoiceItems = invoice.items.map(function (item, index) {
                return {
                    name: item.description,
                    quantity: item.quantity,
                    unitPrice: (item.unit_price) ? item.unit_price.toString() : '0',
                    taxPercent: 0,
                    currency: item.currency || invoice.fiat_currency
                };
            });
        }
        return {
            meta: { format: 'rnf_invoice', version: '0.0.2' },
            invoiceNumber: invoice.invoice_number.toString(),
            creationDate: invoice.created_at,
            invoiceItems: invoiceItems,
            purchaseOrderId: invoice.ref,
            note: invoice.notes
        };
    };
    RequestNetworkTraveler.prototype.convertInvoiceFrom = function (requestInvoice) {
        var paymentTerms = requestInvoice.paymentTerms;
        var dueDate = (undefined !== paymentTerms) ? paymentTerms.dueDate : null;
        var invoiceItems = requestInvoice.invoiceItems.map(function (item) {
            return {
                description: item.name,
                quantity: item.quantity,
                unit_price: Number(item.unitPrice),
                currency: item.currency
            };
        });
        return {
            invoice_number: Number(requestInvoice.invoiceNumber),
            user_id: '',
            client_id: '',
            title: '',
            items: invoiceItems,
            terms: '',
            total_amount: 0,
            discount: 0,
            currency: '',
            fiat_currency: invoiceItems[0].currency,
            receive_currency: '',
            notes: requestInvoice.note || '',
            status: '',
            created_at: requestInvoice.creationDate,
            updated_at: requestInvoice.creationDate,
            date_due: dueDate,
            invoice_method: 'requestnetwork',
            requestId: requestInvoice.miscellaneous.id || '',
            creator: (requestInvoice.sellerInfo) ? requestInvoice.sellerInfo.email : '',
            payer: (requestInvoice.buyerInfo) ? requestInvoice.buyerInfo.email : '',
        };
    };
    return RequestNetworkTraveler;
}());
exports.RequestNetworkTraveler = RequestNetworkTraveler;
