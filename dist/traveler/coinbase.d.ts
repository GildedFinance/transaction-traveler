import { Traveler } from "../lib/shared";
import { ITransaction } from "../lib/transaction";
import { IInvoice } from "../lib/invoice";
export interface ICoinbaseTransaction {
}
export interface ICoinbaseInvoice {
}
export declare class CoinbaseTraveler implements Traveler {
    convertTransactionTo(txn: ITransaction): void;
    convertTransactionFrom(txn: ICoinbaseTransaction): void;
    convertInvoiceTo(invoice: IInvoice): ICoinbaseInvoice;
    convertInvoiceFrom(coinbaseInvoice: any): IInvoice;
}
