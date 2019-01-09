import { IInvoice } from './invoice';
import { ITransaction } from './transaction';
import * as Travelers from '../traveler';
export declare enum Network {
    Base = 0,
    Coinbase = 1,
    Etherscan = 2,
    QuickBooks = 3,
    RequestNetwork = 4
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
export declare type TransactionInterfaces = Travelers.ICoinbaseTransaction | Travelers.IRequestNetworkTransaction;
export declare type InvoiceInterfaces = Travelers.ICoinbaseInvoice | Travelers.IRequestNetworkInvoice;
export declare abstract class Traveler {
    convertTransactionTo(txn: ITransaction): void;
    convertTransactionFrom(txn: TransactionInterfaces): void;
    convertInvoiceTo(invoice: IInvoice): void;
    convertInvoiceFrom(invoiceFrom: any): void;
}
