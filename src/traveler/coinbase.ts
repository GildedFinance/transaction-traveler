import { Traveler, Network } from "../lib/shared";
import { ITransaction } from "../lib/transaction";
import { IInvoice } from "../lib/invoice";

//https://developers.coinbase.com/api/v2#transfer-money-between-accounts
export enum CoinbaseTxType {
  send, 
  request,
  transfer,
  buy,
  sell,
  fiat_deposit,
  fiat_withdrawal,
  exchange_deposit,
  exchange_withdrawal,
  vault_withdrawal
}


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
  type: string,
  status: string,
  amount: {
    // @TODO: Invstigate precision of `number`
    amount: number;
    currency: string;
  },
  native_amount?: {
    amount: number;
    currency: string;
  },
  description?: string,
  created_at: string,
  updated_at: string,
  network?: {
    status?: string,
    hash?: string,
    name?: string,
    transaction_fee?: {
      amount: number,
      currency: string
    } | undefined,
    transaction_amount?: {
      amount: string,
      currency: string
    },
    confirmations?: number
  },
  resource?: string,
  resource_path?: string,
  buy?: {
    id: string,
    resource: string,
    resource_path: string
  },
  sell?: {
    id: string,
    resource: string,
    resource_path: string
  }
  to?: {
    id?: string,
    resource?: string,
    resource_path?: string,
    address?: string,
    currency?: string,
    email?:string
  },
  from?: {
    id: string
  },
  details?: {
    title: string,
    subtitle:string
  },
  transaction?: {
    id: string,
    resource: string,
    resource_path: string
  },
  fee?: {
    amount: number,
    currency: string
  },
  payout_at?: string,
  total?: {
    amount: number,
    currency: string 
  },
  subtotal?: {
    amount: number, 
    currency: string
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

    //
    let cb_txn = <ICoinbaseTransaction>txn;
    var base_cnv_txn = <ITransaction>{};

    // @TODO: What is the best way to handle this?
    //let cb_network = cb_txn.network;
    //let network = cb_network!.name || 'Coinbase';
    let network = 'Coinbase';

    let cb_to = cb_txn.to;
    let to = this.convertCoinbaseToField(cb_to);
    let cb_from = cb_txn.from;
    let from = this.convertCoinbaseFromField(cb_from);
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
        network: network,
        to: to,
        from: from,
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

  /////
  /////////UTILITY METHODS
  ////////////////////////////


  //convert coinbase to field to ITransaction
  convertCoinbaseToField(cb_to_field: any) {
    let to;
    if (cb_to_field !== undefined &&
      (cb_to_field.id !== undefined || cb_to_field.email !== undefined)) {
      // @TODO to interface
      to = {
        id: cb_to_field.id,
        email: cb_to_field.email,
        address : cb_to_field.address
        }
    }
    else {
      // @TODO better mechanism here
      to = {
        id: ''
      }
    }
    return to;
  }

  convertCoinbaseFromField(cb_from_field: any) {
    let from;
    if (cb_from_field !== undefined && cb_from_field.id) {
      from = { 
        id: cb_from_field.id
      }
    }
    else {
      // @TODO better mechanism here
      from = {
        id: ''
      }
    }
    return from;
  }

}