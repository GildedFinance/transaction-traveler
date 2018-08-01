import { Network } from "./lib/shared";
import * as Travelers from "./traveler";

export  class TransactionTraveler {

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

/*********************
 *
 * EXAMPLE USAGE
 *
 * @type {TransactionTraveler}
 */

let tt = new TransactionTraveler();

let example_txn = {
  "id": "57ffb4ae-0c59-5430-bcd3-3f98f797a66c",
  "type": "send",
  "status": "completed",
  "amount": {
    "amount": "-0.00100000",
    "currency": "BTC"
  },
  "native_amount": {
    "amount": "-0.01",
    "currency": "USD"
  },
  "description": null,
  "created_at": "2015-03-11T13:13:35-07:00",
  "updated_at": "2015-03-26T15:55:43-07:00",
  "resource": "transaction",
  "resource_path": "/v2/accounts/2bbf394c-193b-5b2a-9155-3b4732659ede/transactions/57ffb4ae-0c59-5430-bcd3-3f98f797a66c",
  "network": {
    "status": "off_blockchain",
    "name": "bitcoin"
  },
  "to": {
    "id": "a6b4c2df-a62c-5d68-822a-dd4e2102e703",
    "resource": "user",
    "resource_path": "/v2/users/a6b4c2df-a62c-5d68-822a-dd4e2102e703"
  },
  "instant_exchange": false,
  "details": {
    "title": "Sent bitcoin",
    "subtitle": "to User 2"
  }
};

const toQuickBooks = tt.convertTransaction(example_txn, Network.Coinbase, Network.QuickBooks);

console.log(toQuickBooks);