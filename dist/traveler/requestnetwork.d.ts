import { IInvoice } from '../lib/invoice';
import { Traveler } from '../lib/shared';
import { ITransaction } from '../lib/transaction';
export interface IRequestNetworkTransaction {
}
export interface IRequestNetworkAccountAddress {
    'street-address': string;
    'extended-address'?: string;
    'post-office-box'?: string;
    'locality': string;
    'region': string;
    'postal-code': string;
    'country-name': string;
}
export interface IRequestNetworkAccountInfo {
    email: string;
    firstName: string;
    lastName: string;
    businessName: string;
    phone: string;
    address: IRequestNetworkAccountAddress;
    taxRegistration: string;
    companyRegistration: string;
    miscellaneous: any;
}
export interface IRequestNetworkInvoicePaymentTerms {
    dueDate: string;
    lateFeesPercent: number;
    lateFeesFix: string;
    miscellaneous: any;
}
export interface IRequestNetworkInvoiceItem {
    name: string;
    quantity: number;
    unitPrice: string;
    taxPercent: number;
    currency: string;
}
export interface IRequestNetworkInvoiceMeta {
    format: string | 'rnf_invoice';
    version: string | '0.0.2';
}
export interface IRequestNetworkInvoice {
    meta: IRequestNetworkInvoiceMeta;
    invoiceNumber: string;
    creationDate: string;
    invoiceItems: Array<any>;
    purchaseOrderId?: string;
    note?: string;
    terms?: string;
    sellerInfo?: IRequestNetworkAccountInfo;
    buyerInfo?: IRequestNetworkAccountInfo;
    paymentTerms?: IRequestNetworkInvoicePaymentTerms;
    miscellaneous?: any;
}
export declare class RequestNetworkTraveler implements Traveler {
    validateRequestNetworkData(dataObject: any): any;
    convertTransactionTo(txn: ITransaction): ITransaction;
    convertTransactionFrom(txn: IRequestNetworkTransaction): IRequestNetworkTransaction;
    convertInvoiceTo(invoice: IInvoice): IRequestNetworkInvoice;
    convertInvoiceFrom(requestInvoice: any): IInvoice;
}
