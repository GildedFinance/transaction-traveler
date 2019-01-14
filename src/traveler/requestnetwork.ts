import { IInvoice, IInvoiceItem } from '../lib/interfaces/invoice';
import { Traveler } from '../lib/shared';
import { ITransaction } from '../lib/interfaces/transaction';

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

export interface IRequestNetworkInvoiceMeta {
  format: string | 'rnf_invoice',
  version: string | '0.0.2'
}

export interface IRequestNetworkInvoice {
  // tslint:disable-next-line:max-line-length
  // https://github.com/RequestNetwork/requestNetwork/blob/master/packages/requestNetworkDataFormat/src/format/rnf_invoice/rnf_invoice-0.0.2.json
  // define the fields in this invoice type
  meta: IRequestNetworkInvoiceMeta,
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

  convertInvoiceTo(invoice: IInvoice): IRequestNetworkInvoice {
    // very simple data
    let invoiceItems: IRequestNetworkInvoiceItem[] = [];
    
    if (undefined !== invoice.items) {
      invoiceItems = invoice.items.map((item: IInvoiceItem, index) => {
        return <IRequestNetworkInvoiceItem>{
          name: item.description,
          quantity: item.quantity,
          unitPrice: (item.unit_price) ? item.unit_price.toString() : '0',
          taxPercent: 0,
          currency: item.currency || invoice.fiat_currency
        };
      });
    }

    return <IRequestNetworkInvoice>{
      meta: <IRequestNetworkInvoiceMeta>{ format: 'rnf_invoice', version: '0.0.2' },
      invoiceNumber: invoice.invoice_number.toString(),
      creationDate: new Date(invoice.created_at.seconds * 1000).toISOString(),
      invoiceItems: invoiceItems,
      purchaseOrderId: invoice.ref,
      note: invoice.notes
    };
  }

  convertInvoiceFrom(requestInvoice: any): IInvoice {
    const paymentTerms = requestInvoice.paymentTerms;
    const dueDate = (undefined !== paymentTerms) ? paymentTerms.dueDate : null;
    const invoiceItems = requestInvoice.invoiceItems.map((item: IRequestNetworkInvoiceItem) => {
      return <IInvoiceItem>{
        description: item.name,
        quantity: item.quantity,
        unit_price: Number(item.unitPrice),
        currency: item.currency
      };
    });
    
    return <IInvoice>{      
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
  }

}
