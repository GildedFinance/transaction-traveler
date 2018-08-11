import { Traveler, Network } from "../lib/shared";
import { ITransaction } from "../lib/transaction";
import { IInvoice } from "../lib/invoice";

export interface IQuickBooksTransaction {
  // define the fields in this transaction type
}

export interface IQuickBooksInvoice {
  // define the fields in this invoice type
}

export class QuickBooksTraveler implements Traveler {

  //TODO 2
  convertTransactionTo(txn: ITransaction) {

  }

  convertTransactionFrom(txn: IQuickBooksTransaction) : ITransaction {
    var thing = <ITransaction>{};
    //this converts to our Base Transaction: ITransaction     
    return thing;
  }

  convertInvoiceTo(invoice: IInvoice) {

  }

  convertInvoiceFrom(invoice: IQuickBooksInvoice) {

  }

}