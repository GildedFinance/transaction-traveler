import { IInvoice } from '../lib/interfaces/invoice';
import { ITransaction } from '../lib/interfaces/transaction';
import { Traveler } from '../lib/shared';

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

  convertInvoiceTo(invoice: IInvoice): IQuickBooksInvoice {
    return {} as IQuickBooksInvoice;
  }

  convertInvoiceFrom(quickbooksInvoice: any): IInvoice {
    return {} as IInvoice;
  }

}
