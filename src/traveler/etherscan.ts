//Etherscan Traveler
import { Traveler, Network } from "../lib/shared";
import { ITransaction } from "../lib/transaction";
import { IInvoice } from "../lib/invoice";
const this_network = 'etherscan'
const debug = true;

export enum ExTravelerTxType {
  send, 
  request,
  transfer,
  buy,
  sell,
  fiat_deposit,
  fiat_withdrawal,
  exchange_deposit,
  exchange_withdrawal,
  vault_withdrawal
}

export interface IExTravelerTransaction {
  blockHash: string,
  blockNumber: number,
  confirmations: number,
  contractAddress: string,
  cumulativeGasUsed: number,
  from: string,
  gas: number,
  gasPrice: number,
  gasUsed: number,
  hash: string,
  input: string,
  isError: string,
  nonce: number,
  timeStamp: string,
  to: string,
  transactionIndex: number,
  txreceipt_status: string,
  value: number
}

export interface IExTravelerInvoice {
  // define the fields in this invoice type
}

export class ExTraveler implements Traveler {

  //TODO 0
  convertTransactionTo(txn: ITransaction) {
    
  }

  //TODO 1
  convertTransactionFrom(txn: IExTravelerTransaction): ITransaction {
    
    let ex_txn = <IExTravelerTransaction>txn;
    var base_cnv_txn = <ITransaction>{};

    // @TODO: What is the best way to handle this?
    const network = 'Etherscan';

   /*
   Capture and handle custom fields
   */
    let ex_to = ex_txn.to;
    let to = this.convertToField(ex_to);
    let ex_from = ex_txn.from;
    let from = this.convertFromField(ex_from);
    
    /* Convert to ITransaction */
    try {
      var base_cnv_txn: ITransaction = {
        id: ex_txn.hash,
        type: 'Standard',
        amount: {
          amount: ex_txn.value,
          currency: 'ETH'
        },
        created_at: ex_txn.timeStamp,
        description: '',
        native_amount: {
          amount: ex_txn.value,
          currency: 'ETH'
        },
        network: {
          status: '??',
          hash: ex_txn.hash,
          transaction_fee: {
            amount: ex_txn.gasUsed,
            currency: 'ETH'
          },
          transaction_amount: {
            amount: ex_txn.value.toString(),
            currency: 'ETH'
          },
          confirmations:ex_txn.confirmations
        },
        to: {
          id: to
        },
        from: {
          id: from
        },
        source: { 
          name: 'Etherscan'
        }
      }
    }
    catch (e) {
      console.log(e);
      throw new Error("Unable to create ITransaction from EtherscanTransaction");

    }
    
    //if(debug){console.log(JSON.stringify(base_cnv_txn))}
    return base_cnv_txn;
    
  }

  convertInvoiceTo(invoice: IInvoice) {

  }

  convertInvoiceFrom(invoice: IExTravelerInvoice) {

  }

  /////
  /////////UTILITY METHODS
  ////////////////////////////


  buildNetwork(incoming_network: any) {
    if (incoming_network === undefined) {
      return {
        name: 'Etherscan'
      }
    }
    else {
      return incoming_network;
    }
  }

  convertToField(ex_to_field: any){
    if (typeof ex_to_field == 'string') {
      return ex_to_field;
    }
    else {
      console.log("etherscan tx has no to filed");
      return 'unknown';
    }
    
  }

  convertFromField(ex_from_field: any) {
    if (typeof ex_from_field == 'string') {
      return ex_from_field;
    }
    else {
      console.log("etherscan tx has no from filed");
      return 'unknown';
    }
  }

}
