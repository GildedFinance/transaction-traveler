import { Traveler, Network } from "../lib/shared";
import { ITransaction } from "../lib/transaction";
import { IInvoice } from "../lib/invoice";

export interface IRequestNetworkTransaction extends ITransaction{
  // define the fields in this transaction type
}

export interface IRequestNetworkInvoice extends IInvoice{
  // define the fields in this invoice type
}

export class RequestNetworkTraveler implements Traveler {
  base: any;

  convertTransactionTo(txn: ITransaction) {

  }

  convertTransactionFrom(txn: IRequestNetworkTransaction) {
    //TODO
    return this.base;
  }

  convertInvoiceTo(invoice: IInvoice) {

  }

  convertInvoiceFrom(invoice: IRequestNetworkInvoice) {
    //TODO
    return this.base;
  }

}