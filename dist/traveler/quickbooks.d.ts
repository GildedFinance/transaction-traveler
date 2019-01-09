import { IInvoice } from '../lib/invoice';
import { Traveler } from '../lib/shared';
import { ITransaction } from '../lib/transaction';
export interface IQuickBooksTransaction {
}
export interface IQuickBooksInvoice {
}
export declare class QuickBooksTraveler implements Traveler {
    convertTransactionTo(txn: ITransaction): void;
    convertTransactionFrom(txn: IQuickBooksTransaction): void;
    convertInvoiceTo(invoice: IInvoice): IQuickBooksInvoice;
    convertInvoiceFrom(quickbooksInvoice: any): IInvoice;
}
