import { Traveler, Network } from "../lib/shared";
import { ITransaction } from "../lib/transaction";
import { IInvoice } from "../lib/invoice";
// import RequestNetworkDataFormat from "requestnetwork-data-format";

export interface IRequestNetworkTransaction {
  // not used by Request Network
}

export interface IRequestNetworkInvoice {
  // details at https://github.com/RequestNetwork/requestNetwork/tree/master/packages/requestNetworkDataFormat/src/format/rnf_invoice
  
  meta: {
    format: "rnf_invoice";
    version: "0.0.1";
  };
  creationDate: Date;
  invoiceNumber: string;
  purchaseOrderId: string;
  note: string;
  terms: string;
  sellerInfo: {
    email: string;
    firstName: string;
    lastName: string;
    businessName: string;
    phone: string;
    address: {};
    taxRegistration: string;
    companyRegistration: string;
    miscellaneous: {};
  };
  buyerInfo: {
    email: string;
    firstName: string;
    lastName: string;
    businessName: string;
    phone: string;
    address: {};
    taxRegistration: string;
    companyRegistration: string;
    miscellaneous: {};
  };
  invoiceItems: [
    {
      name: string;
      reference: string;
      quantity: number;
      unitPrice: number;
      discount: number;
      taxPercent: number;
      currency: string;
      deliberyDate: Date;
      deliveryPeriod: string;
    }
  ];
  paymentTerms: {
    dueDate: Date;
    lateFeesPercent: number;
    lateFeesFix: number;
    miscellaneous: {}
  };
  miscellaneous: {};
}

export class RequestNetworkTraveler implements Traveler {

  convertTransactionTo(txn: ITransaction) {

  }

  convertTransactionFrom(txn: IRequestNetworkTransaction) {

  }

  convertInvoiceTo(invoice: IInvoice) {
    
  }

  convertInvoiceFrom(invoice: IRequestNetworkInvoice) {
    // validate
    // const validated = RequestNetworkDataFormat.validate(invoice);
    // if (!validated) {
    //   // console.log(validated.errors)
    //   throw new Error('Request Network: Invalid invoice format');
    // }

  }

}