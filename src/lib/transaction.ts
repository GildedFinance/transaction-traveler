import { Network } from "./shared";

export interface ITransaction {
  id: string;
  type: string;
  amount: {
    amount: number;
    currency: string;
  };
  native_amount: {
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



// @TODO: These were taken from Coinbase. We should customize them as needed and remove ones we don't need


// Transaction types are relative to the user viewing them
export type TransactionType =
  'send' | //  - Outgoing transaction
  'request' | // - Incoming transaction
  'transfer' | //  - Transfered funds between two of a user’s accounts
  'buy' | // - Purchase (such as cryptocurrency)
  'sell' | //  - Sale (such as cryptocurrency)
  'fiat_deposit' | // - Deposited funds into a fiat account from a financial institution
  'fiat_withdrawal' | //  - Withdrew funds from a fiat account
  'exchange_deposit' | // - Deposited money into an exchange
  'exchange_withdrawal' | // - Withdrew money from an exchange
  'vault_withdrawal' // - Withdrew funds from a vault account
;

export type TransactionStatus =
  'pending' | // - Pending transactions (e.g. a send or a buy)
  'completed' | // - Completed transactions (e.g. a send or a buy)
  'failed' | // - Failed transactions (e.g. failed buy)
  'expired' | // - Conditional transaction expired due to external factors
  'canceled' | // - Transaction was canceled
  'waiting_for_signature' | // - Vault withdrawal is waiting for approval
  'waiting_for_clearing' // - Vault withdrawal is waiting to be cleared
;