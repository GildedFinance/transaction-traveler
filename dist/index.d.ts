import { Network } from './lib/shared';
import * as Travelers from './traveler';
export declare class TransactionTraveler {
    convertTransaction(txn: any, from: Network, to?: Network): any;
    convertInvoice(invoice: any, from: Network, to?: Network): any;
    getTraveler(network: Network): Travelers.CoinbaseTraveler | Travelers.QuickBooksTraveler | Travelers.RequestNetworkTraveler;
}
