import { Traveler, Network } from "../lib/shared";
import { ITransaction } from "../lib/transaction";
import { IInvoice } from "../lib/invoice";

export interface IQuickBooksTransaction extends ITransaction {
  // define the fields in this transaction type
}

export interface IQuickBooksInvoice extends IInvoice{
  // define the fields in this invoice type
}

export class QuickBooksTraveler implements Traveler {
  base: any;

  //TODO 2
  convertTransactionTo(txn: ITransaction) {

  }

  convertTransactionFrom(txn: IQuickBooksTransaction) {
    //TODO
    return this.base;
  }

  convertInvoiceTo(invoice: IInvoice) {

  }

  convertInvoiceFrom(invoice: IQuickBooksInvoice) {
    //TODO
    return this.base;
  }

}