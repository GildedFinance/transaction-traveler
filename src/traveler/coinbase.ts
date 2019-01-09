import { Traveler, Network } from "../lib/shared";
import { ITransaction } from "../lib/interfaces/transaction";
import { IInvoice } from "../lib/interfaces/invoice";

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

  convertInvoiceTo(invoice: IInvoice): ICoinbaseInvoice {
    return <ICoinbaseInvoice>{};
  }

  convertInvoiceFrom(coinbaseInvoice: any): IInvoice {
    return <IInvoice>{};
  }

}