import { IInvoice } from './invoice';
import { ITransaction } from './transaction';

import * as Travelers from '../traveler';

export enum Network {
  Base,
  Coinbase,
  Etherscan,
  QuickBooks,
  RequestNetwork,
  // always keep this in the existing order since this is an enum
}

export interface ICurrency {
  id: string;
  name: string;
  min_size: number;
}

export interface IAmount {
  amount: number;
  currency: string;
}

// @TODO: Should probably use generics for this?
export type TransactionInterfaces = Travelers.ICoinbaseTransaction | Travelers.IRequestNetworkTransaction;
export type InvoiceInterfaces = Travelers.ICoinbaseInvoice | Travelers.IRequestNetworkInvoice;

export abstract class Traveler {

  convertTransactionTo(txn: ITransaction) {

  }

  convertTransactionFrom(txn: TransactionInterfaces) {

  }

  convertInvoiceTo(invoice: IInvoice) {

  }

  convertInvoiceFrom(invoice: InvoiceInterfaces) {

  }

}
