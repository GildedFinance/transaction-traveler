export * from './lib';
export * from './traveler';

import { Network } from './lib';
import * as Travelers from './traveler';

export class TransactionTraveler {

  convertTransaction(txn: any, from: Network, to?: Network) {
    let base = txn;

    if (from !== Network.Base) {
      const f = this.getTraveler(from);
      base = f.convertTransactionFrom(txn);
    }

    if (to) {
      const t = this.getTraveler(to);
      return t.convertTransactionTo(base);
    }

    return base;
  }

  convertInvoice(invoice: any, from: Network, to?: Network) {
    let base = invoice;

    if (from !== Network.Base) {
      const f = this.getTraveler(from);
      base = f.convertInvoiceFrom(invoice);
    }

    if (to) {
      const t = this.getTraveler(to);
      return t.convertInvoiceTo(base);
    }

    return base;
  }

  getTraveler(network: Network) {
    switch (network) {
      case Network.Coinbase: return new Travelers.CoinbaseTraveler();
      case Network.QuickBooks: return new Travelers.QuickBooksTraveler();
      case Network.RequestNetwork: return new Travelers.RequestNetworkTraveler();
      default: throw new Error('Unknown network: ' + network);
    }
  }


}
