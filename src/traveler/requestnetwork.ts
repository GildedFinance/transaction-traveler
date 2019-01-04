import { IInvoice } from '../lib/invoice';
import { Network, Traveler } from '../lib/shared';
import { ITransaction } from '../lib/transaction';

declare var RequestNetworkDataFormat: any;

export interface IRequestNetworkTransaction {
  // not used by Request Network
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
  invoiceItems: Array<any>;
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
  
  validateRequestNetworkData(dataObject: any) {
    return RequestNetworkDataFormat.validate(dataObject);
  }

  convertTransactionTo(txn: ITransaction) {
    return txn;
  }

  convertTransactionFrom(txn: IRequestNetworkTransaction) {
    return txn;
  }

  convertInvoiceTo(invoice: IInvoice) {
    return invoice;
  }

  convertInvoiceFrom<IRequestNetworkInvoice>(invoice: IRequestNetworkInvoice) {
    return invoice;
  }

}
