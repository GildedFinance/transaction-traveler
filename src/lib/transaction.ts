import { Network } from "./shared";

export interface ITransaction {
  id: string;
  type: string;
  amount: {
    amount: number;
    currency: string;
  };
  native_amount?: {
    amount: number;
    currency: string;
  }
  description?: string;
  created_at: string;
  updated_at?: string;
  network: string;
  from: {
    id: string;
  }
  to: {
    id: string;
  }

}

// Transaction types are relative to the user viewing them
export enum TransactionType {
  send, //  - Sent bitcoin/bitcoin cash/litecoin/ethereum to a bitcoin/bitcoin cash/litecoin/ethereum address or email (documentation)
  request, // - Requested bitcoin/bitcoin cash/litecoin/ethereum from a user or email (documentation)
  transfer, //  - Transfered funds between two of a user’s accounts (documentation)
  buy, // - Bought bitcoin, bitcoin cash, litecoin or ethereum (documentation)
  sell, //  - Sold bitcoin, bitcoin cash, litecoin or ethereum (documentation)
  fiat_deposit, // - Deposited funds into a fiat account from a financial institution (documentation)
  fiat_withdrawal, //  - Withdrew funds from a fiat account (documentation)
  exchange_deposit, // - Deposited money into GDAX
  exchange_withdrawal, // - Withdrew money from GDAX
  vault_withdrawal, // - Withdrew funds from a vault account
}

export  enum TransactionStatus {
  pending, // - Pending transactions (e.g. a send or a buy)
  completed, // - Completed transactions (e.g. a send or a buy)
  failed, // - Failed transactions (e.g. failed buy)
  expired, // - Conditional transaction expired due to external factors
  canceled, // - Transaction was canceled
  waiting_for_signature, // - Vault withdrawal is waiting for approval
  waiting_for_clearing, // - Vault withdrawal is waiting to be cleared
}
