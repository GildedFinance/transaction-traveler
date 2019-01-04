import { IInvoice } from '../lib/invoice';
import { Network, Traveler } from '../lib/shared';
import { ITransaction } from '../lib/transaction';

export interface IQuickBooksTransaction {
  // define the fields in this transaction type
}

export interface IQuickBooksInvoice {
  // define the fields in this invoice type
}

export class QuickBooksTraveler implements Traveler {

  convertTransactionTo(txn: ITransaction) {

  }

  convertTransactionFrom(txn: IQuickBooksTransaction) {

  }

  convertInvoiceTo(invoice: IInvoice) {
    return invoice;
  }

  convertInvoiceFrom<IQuickBooksInvoice>(invoice: IQuickBooksInvoice) {
    return invoice;
  }

}