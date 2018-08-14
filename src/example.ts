import { TransactionTraveler } from "./"
import { Network } from "./lib/shared";

/*********************
 *
 * EXAMPLE USAGE
 *
 */

let tt = new TransactionTraveler();

let exampleTxn = {
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
  "from": {
    "id":"test_from"
  },
  "instant_exchange": false,
  "details": {
    "title": "Sent bitcoin",
    "subtitle": "to User 2"
  }
};

const toQuickBooks = tt.convertTransaction(exampleTxn, Network.Coinbase, Network.QuickBooks);

console.log(toQuickBooks);