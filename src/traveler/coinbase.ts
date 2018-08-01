import { Traveler, Network } from "../lib/shared";
import { ITransaction } from "../lib/transaction";
import { IInvoice } from "../lib/invoice";

export interface ICoinbaseTransaction {
  // define the fields in this transaction type
}

export interface ICoinbaseInvoice {
  // define the fields in this invoice type
}

export class CoinbaseTraveler implements Traveler {

  convertTransactionTo(txn: ITransaction) {

  }

  convertTransactionFrom(txn: ICoinbaseTransaction) {

  }

  convertInvoiceTo(invoice: IInvoice) {

  }

  convertInvoiceFrom(invoice: ICoinbaseInvoice) {

  }

}