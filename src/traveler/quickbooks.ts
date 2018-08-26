import { Traveler, Network } from "../lib/shared";
import { ITransaction } from "../lib/transaction";
import { IInvoice } from "../lib/invoice";

export interface IQuickBooksTransaction {
  // define the fields in this transaction type
  id: string,
  to: string,
  from: string,
  amount: {
    amount: number,
    currency: string
  },
  native_amount: {
    amount: number,
    currency:string
  },
  created_at: string,
  network: string,
  type: string
  
}

export interface IQuickBooksInvoice {
  // define the fields in this invoice type
}

export class QuickBooksTraveler implements Traveler {

  convertTransactionTo(txn: ITransaction) : IQuickBooksTransaction {
    var qb_txn = <IQuickBooksTransaction>{};
    try {
      var qb_txn: IQuickBooksTransaction = {
        amount: txn.amount,
        created_at: txn.created_at,
        from: txn.from.id || '',
        id: txn.id,
        native_amount: this.convertITransactionNativeAmount(txn.native_amount),
        network: txn.network,
        to: txn.to.id || '',
        type: txn.type
      }
    }
    catch (e) {
      console.log(e);
    }
    return qb_txn;
  }

  convertTransactionFrom(txn: IQuickBooksTransaction) : ITransaction {
    var qb_txn = <IQuickBooksTransaction>txn;
    var base_cvn_txn = <ITransaction>{};
    try {
      var base_cvn_txn: ITransaction = {
        id: qb_txn.id,
        amount: qb_txn.amount,
        created_at: qb_txn.created_at,
        from: {
          id: qb_txn.from,
        },
        native_amount: qb_txn.native_amount,
        network: qb_txn.network,
        to: {
          id: qb_txn.to,
        },
        type: qb_txn.type
      }
      
    }
    catch (e) {
      console.log(e);
    }
    return base_cvn_txn;
  }

  convertInvoiceTo(invoice: IInvoice) {

  }

  convertInvoiceFrom(invoice: IQuickBooksInvoice) {

  }

  /////
  /////////UTILITY METHODS
  ////////////////////////////

  // @TODO fetch this data
  convertITransactionNativeAmount(native_amount: any) {
    return {
      amount: 0,
      currency: 'USD'
    };
  }
}