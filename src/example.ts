import { TransactionTraveler } from "./"
import { Network } from "./lib/shared";
import { BuyTxTest } from "../tests/network/coinbase/buy";
import * as txn from '../../tests/network/coinbase/account/getTransaction-200.json';
//import * as txns from '../../tests/network/coinbase/account/transactions-200.json';
import * as txns from '/home/ken/Documents/Gilded/Coinbase_flow/3-list_account_transactions-eth.json' 
import { EtherApi } from './utils/providers/etherscan/api';
const etherApi = EtherApi;
const test_coinbase = false;
const test_etherscan = true;
/*********************
 *
 * EXAMPLE USAGE
 *
 */

let tt = new TransactionTraveler();

let buyTxTest = new BuyTxTest();

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

var resArr = new Array<Promise<any>>();

if (test_coinbase) {
  if (txns.data !== undefined) {
    for (let txn in txns.data) {
      let tx = txns.data[txn];
      resArr.push(tt.convertTransaction(tx, Network.Coinbase, Network.QuickBooks));
      //console.log(JSON.stringify(val));
    }
  }
  
  resArr.forEach(res => {
        console.log(JSON.stringify(res));
    })
}

const txArr = new Array<Promise<any>>();


if (test_etherscan) {
  const test_addr = '0xA7a7899d944fE658c4B0a1803BAB2F490bd3849e'
  const brave_meta_addr_kovan = '0xd0251bfCBaDaA605E1057616c1530130CBc850F9'
  EtherApi.prototype.getTransactions(brave_meta_addr_kovan)
    .then(txlist => {
      //console.log(JSON.stringify(txlist));
      const txResults = txlist.result;
      for (let txn in txResults) {
        txArr.push(tt.convertTransaction(txResults[txn],Network.Etherscan, Network.QuickBooks))
      }
      txArr.forEach(res => {
        console.log(JSON.stringify(res));
      })
    });
  

}


//const toQuickBooks = tt.convertTransaction(buyTxTest.tx, Network.Coinbase, Network.QuickBooks);

//const toQuickBooks2 = tt.convertTransaction(txns, Network.Coinbase, Network.QuickBooks);

//console.log(JSON.stringify(toQuickBooks));
//console.log(JSON.stringify(toQuickBooks2));