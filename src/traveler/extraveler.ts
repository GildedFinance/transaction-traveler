//Example Traveler
import { Traveler, Network } from "../lib/shared";
import { ITransaction } from "../lib/transaction";
import { IInvoice } from "../lib/invoice";
const this_network = 'Example'
const debug = true;

export enum ExTravelerTxType {
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

export interface IExTravelerTransaction {
  id: string,
  type: string,
  status: string,
  amount: {
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

export interface IExTravelerInvoice {
  // define the fields in this invoice type
}

export class ExTraveler implements Traveler {

  //TODO 0
  convertTransactionTo(txn: ITransaction) {
    
  }

  //TODO 1
  convertTransactionFrom(txn: IExTravelerTransaction): ITransaction {
    
    let ex_txn = <IExTravelerTransaction>txn;
    var base_cnv_txn = <ITransaction>{};

    // @TODO: What is the best way to handle this?
    let ex_network = ex_txn.network;
    var network = this.buildNetwork(ex_network);

    //let network = 'Coinbase';

   /*
   Capture and handle custom fields
   */
    
    /* Convert to ITransaction */
    /*try {
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
        network: network || { name: this_network },
        to: to,
        from: from,
        updated_at: cb_txn.updated_at,
        source: { 
          name: 'this_network'
        }
      }
    }
    catch (e) {
      console.log(e);
      throw new Error("Unable to create ITransaction from CoinbaseTransaction");

    }
    */
    //if(debug){console.log(JSON.stringify(base_cnv_txn))}
    return base_cnv_txn;
    
  }

  convertInvoiceTo(invoice: IInvoice) {

  }

  convertInvoiceFrom(invoice: IExTravelerInvoice) {

  }

  /////
  /////////UTILITY METHODS
  ////////////////////////////


  buildNetwork(incoming_network: any) {
    if (incoming_network === undefined) {
      return {
        name: 'Coinbase'
      }
    }
    else {
      return incoming_network;
    }
  }

}