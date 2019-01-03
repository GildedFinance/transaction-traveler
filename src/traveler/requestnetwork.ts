import { IInvoice } from '../lib/invoice';
import { Network, Traveler } from '../lib/shared';
import { ITransaction } from '../lib/transaction';

export interface IRequestNetworkTransaction {
  // define the fields in this transaction type
}

export interface IRequestNetworkAccountInfo {
  email: string;
  firstName: string;
  lastName: string;
  businessName: string;
  phone: string;
  address: string;
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

export interface IRequestNetworkInvoice {
  // tslint:disable-next-line:max-line-length
  // https://github.com/RequestNetwork/requestNetwork/blob/master/packages/requestNetworkDataFormat/src/format/rnf_invoice/rnf_invoice-0.0.2.json
  // define the fields in this invoice type
  meta: {
    format: 'rnf_invoice',
    version: '0.0.2'
  };
  invoiceNumber: string;
  creationDate: string;
  invoiceItems: [];
  // optional
  purchaseOrderId?: string;
  note?: string;
  terms?: string;
  sellerInfo?: IRequestNetworkAccountInfo;
  buyerInfo?: IRequestNetworkAccountInfo;
  paymentTerms?: IRequestNetworkInvoicePaymentTerms;
  miscellaneous?: any;
}

export class RequestNetworkTraveler implements Traveler {

  convertTransactionTo(txn: ITransaction) {
    //
  }

  convertTransactionFrom(txn: IRequestNetworkTransaction) {}

  convertInvoiceTo(invoice: IInvoice) {}

  convertInvoiceFrom(invoice: IRequestNetworkInvoice) {}

}
