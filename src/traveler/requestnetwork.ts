import { Traveler, Network } from "../lib/shared";
import { ITransaction } from "../lib/transaction";
import { IInvoice } from "../lib/invoice";

export interface IRequestNetworkTransaction {
  // define the fields in this transaction type
}

export interface IRequestNetworkInvoice {
  // define the fields in this invoice type
}

export class RequestNetworkTraveler implements Traveler {

  convertTransactionTo(txn: ITransaction) {

  }

  convertTransactionFrom(txn: IRequestNetworkTransaction) {

  }

  convertInvoiceTo(invoice: IInvoice) {

  }

  convertInvoiceFrom(invoice: IRequestNetworkInvoice) {

  }

}