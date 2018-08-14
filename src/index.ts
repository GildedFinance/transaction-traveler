import { Network, Traveler } from "./lib/shared";
import * as Travelers from "./traveler";

export  class TransactionTraveler {

  convertTransaction(txn: any, from: Network, to?: Network) {
    let base = txn;
    //Convert to Base Transaction
    if (from !== Network.Base) {
      //const naive_t = this.getTraveler(from);
      //const f_traveler: Traveler = this.getTraveler(from);
      const f_traveler = this.getTraveler(from);
      /**
       * Compile error: Cannot invoke an expression whose type lacks a call signature.
       * https://stackoverflow.com/questions/42427393/cannot-invoke-an-expression-whose-type-lacks-a-call-signature
       */
      
      base = f_traveler.convertTransactionFrom(txn);
    }
    //Convert our converted from tx to base to "to" type tx
    // Coinbase -> Base -> Quickbooks
    if (to) {
      const t_traveler = this.getTraveler(to);
      return t_traveler.convertTransactionTo(base);
    }

    return base;
  }

  convertInvoice(invoice: any, from: Network, to?: Network) {
    let base = invoice;
    
    if (from !== Network.Base) {
      const f_traveler = this.getTraveler(from);
      base = f_traveler.convertInvoiceFrom(invoice);
    }

    if (to) {
      const t_traveler = this.getTraveler(to);
      return t_traveler.convertInvoiceTo(base);
    }

    return base;
  }

  getTraveler(network: Network) : Traveler{
    switch (network) {
      case Network.Coinbase: return new Travelers.CoinbaseTraveler();
      case Network.QuickBooks: return new Travelers.QuickBooksTraveler();
      case Network.RequestNetwork: return new Travelers.RequestNetworkTraveler();
      default: throw new Error('Unknown network: ' + network);
    }
  }


}
