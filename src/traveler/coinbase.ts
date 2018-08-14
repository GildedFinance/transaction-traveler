import { Traveler, Network } from "../lib/shared";
import { ITransaction } from "../lib/transaction";
import { IInvoice } from "../lib/invoice";



 //TODO incomplete definition
/**
 * Notes
 * if(tx.type == 'send'){ tx.to field exists}
 * if(tx.type == 'buy'){ tx.buy field exists}
 * if(tx.type == 'sell'){tx.sell field exists}
 */
export interface ICoinbaseTransaction {
  // define the fields in this transaction type
  id: string,
  //type: CoinbaseTxType,
  type: string,
  status: string,
  amount: { //TODO incomplete definition

    amount: number;
    currency: string;
  },
  native_amount: {
    amount: number;
    currency: string;
  },
  description?: string,
  created_at: string,
  updated_at?: string,
  // network: {
  //   status: string,
  //   hash: string,
  //   transaction_fee: {
  //     amount: string,
  //     currency:string
  //   },
  //   transaction_amount?: {
  //     amount: string,
  //     currency:string
  //   },
  //   confirmations?:number
  // },
  network:string,
  buy?: {
    id: string,
    resource: string,
    resource_path:string
  },
  sell?: {
    id: string,
    resource: string,
    resource_path:string
  }
  //to?: {
  to:{
    resource: string,
    address: string,
    currency:string
  },
  from: {
    id: string
  }
  
}

export interface ICoinbaseInvoice {
  // define the fields in this invoice type
}

export class CoinbaseTraveler implements Traveler {

  //TODO 0
  convertTransactionTo(txn: ITransaction) {
    
  }

  //TODO 1
  convertTransactionFrom(txn: ICoinbaseTransaction): ITransaction {
    //var cb_txn: <ICoinbaseTransaction> txn;

    //this should throw an error if we have a mismatch
    var cb_txn = <ICoinbaseTransaction>txn;
    var base_cnv_txn = <ITransaction>{};
    
    try {
      var base_cnv_txn: ITransaction = {
        id: cb_txn.id,
        type: cb_txn.type,
        amount: {
          amount: cb_txn.amount.amount,
          currency:cb_txn.amount.currency
        },
        created_at: cb_txn.created_at,
        description: cb_txn.description,

        native_amount: cb_txn.native_amount,
        network: cb_txn.network,
        to: {
          id:cb_txn.to.resource
        },
        from: {
          id:cb_txn.from.id
        },
        updated_at: cb_txn.updated_at
      }
    }
    catch (e) {
      console.log(e);

    }
    
    return base_cnv_txn;
    
  }

  convertInvoiceTo(invoice: IInvoice) {

  }

  convertInvoiceFrom(invoice: ICoinbaseInvoice) {

  }

}