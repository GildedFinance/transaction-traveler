# Transaction Traveler
### Enables transaction and invoice data to travel effortlessly between common financial data formats

With Transaction Traveler you can:
- Convert **transaction data** from one format to another (e.g. from Coinbase to Etherscan into a common format)
- Convert **invoice data** from one format to another (e.g. from Request Network to QuickBooks)

We welcome the addition of new data formats. Just send us a pull request!

## Supported Transaction Formats
#### Blockchain APIs
- Etherscan
- Blockchain.com (WIP)

#### Exchange APIs
- Coinbase (WIP)
- Binance (WIP)

#### Accounting APIs
- QuickBooks (WIP)


## Supported Invoice Formats
- [Request Network](https://github.com/RequestNetwork/requestNetwork/tree/master/packages/requestNetworkDataFormat)
- QuickBooks API (WIP)

## Usage

#### Install
Install: ```npm install transaction-traveler```

#### Convert Coinbase transactions to QuickBooks transaction
```
import { TransactionTraveler, Network } from "transaction-traveler"

let exampleTxn = {
  // ... Coinbase API transaction data
}

let tt = new TransactionTraveler();

const toQuickBooks = tt.convertTransaction(exampleTxn, Network.Coinbase, Network.QuickBooks);

console.log(toQuickBooks);
```

#### Normalized Data
You can also convert data from multiple systems into a common "base" format. This allows all data to be normalized.

```
const coinbaseTxn = {
  // ...
};
const etherscanTxn = {
  // ...
};

const normalizedTxns = [
  tt.convertTransaction(coinbaseTxn, Network.Coinbase, Network.Base),
  tt.convertTransaction(etherscanTxn, Network.Etherscan, Network.Base);
];
```

