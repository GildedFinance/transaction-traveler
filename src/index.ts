import { Network } from "./lib/shared";
import { TransactionInterfaces } from "./lib/shared";
import * as Travelers from "./traveler";

export  class TransactionTraveler {

  convertTransaction(txn: any, from: Network, to?: Network) {
    let base = txn;
    //let txn_interfaced = TransactionInterfaces
    //Convert to Base Transaction
    if (from !== Network.Base) {
      const f_traveler = this.getTraveler(from);
      /**
       * Compile error: Cannot invoke an expression whose type lacks a call signature.
       * https://stackoverflow.com/questions/42427393/cannot-invoke-an-expression-whose-type-lacks-a-call-signature
       */
      //TODO
      base = f_traveler.convertTransactionFrom(txn);
      if (base.id == undefined) {
        console.log("Failed");
      }
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
      //base = f_traveler.convertInvoiceFrom(invoice);
    }

    if (to) {
      const t_traveler = this.getTraveler(to);
      return t_traveler.convertInvoiceTo(base);
    }

    return base;
  }

  getTraveler(network: Network) {
    switch (network) {
      case Network.Coinbase: return new Travelers.CoinbaseTraveler();
      case Network.QuickBooks: return new Travelers.QuickBooksTraveler();
      //case Network.RequestNetwork: return new Travelers.RequestNetworkTraveler();
      default: throw new Error('Unknown network: ' + network);
    }
  }

  getTxInterface(network: Network) {
    switch (network) {
      case Network.Coinbase: return new Travelers.CoinbaseTraveler();
      case Network.QuickBooks: return new Travelers.QuickBooksTraveler();
      //case Network.RequestNetwork: return new Travelers.RequestNetworkTraveler();
      default: throw new Error('Unknown Interface: ' + network);
    }
  }


}
