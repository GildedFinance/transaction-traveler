import { IInvoice } from '../lib/interfaces/invoice';
import { ITransaction } from '../lib/interfaces/transaction';
import { Traveler } from '../lib/shared';

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
    return {} as ICoinbaseInvoice;
  }

  convertInvoiceFrom(coinbaseInvoice: any): IInvoice {
    return {} as IInvoice;
  }

}
