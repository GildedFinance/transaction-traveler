import { Traveler, Network } from "../lib/shared";
import { ITransaction } from "../lib/transaction";
import { IInvoice } from "../lib/invoice";

//TODO incomplete list
export enum CoinbaseTxType {
  buy,
  sell,
  send
}

 //TODO incomplete definition
/**
 * Notes
 * if(tx.type == 'send'){ tx.to field exists}
 * if(tx.type == 'buy'){ tx.buy field exists}
 * if(tx.type == 'sell'){tx.sell field exists}
 */
export interface ICoinbaseTransaction extends ITransaction {
  // define the fields in this transaction type
  id: string,
  type: CoinbaseTxType,
  status: string,
  amount: { //TODO incomplete definition

    amount: number;
    currency: string;
  },
  native_amount?: {
    amount: number;
    currency: string;
  },
  description?: string,
  created_at: string,
  updated_at?: string,
  network: {
    status: string,
    hash: string,
    transaction_fee: {
      amount: string,
      currency:string
    },
    transaction_amount?: {
      amount: string,
      currency:string
    },
    confirmations?:number
  },
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
  to?: {
    resource: string,
    address: string,
    currency:string
  } 
  
}

export interface ICoinbaseInvoice extends IInvoice{
  // define the fields in this invoice type
}

export class CoinbaseTraveler implements Traveler {
  base: any;

  //TODO 0
  convertTransactionTo(txn: ITransaction) {

  }

  //TODO 1
  convertTransactionFrom(txn: ICoinbaseTransaction) {

    //this converts to our Base Transaction: ITransaction
    //TODO
    return this.base;
    
  }

  convertInvoiceTo(invoice: IInvoice) {

  }

  convertInvoiceFrom(invoice: ICoinbaseInvoice) {
    //TODO
    return this.base;
  }

}