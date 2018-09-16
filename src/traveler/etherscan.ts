//Etherscan Traveler
import { Traveler, Network } from "../lib/shared";
import { ITransaction } from "../lib/transaction";
import { IInvoice } from "../lib/invoice";
const this_network = 'etherscan'
const debug = true;

export enum EtherscanTxType {
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

export interface IEtherscanTransaction {
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

export interface IEtherscanInvoice {
  // define the fields in this invoice type
}

export class EtherscanTraveler implements Traveler {

  //TODO 0
  convertTransactionTo(txn: ITransaction) {
    
  }

  //TODO 1
  convertTransactionFrom(txn: IEtherscanTransaction): ITransaction {
    
    let es_txn = <IEtherscanTransaction>txn;
    var base_cnv_txn = <ITransaction>{};

    // @TODO: What is the best way to handle this?
    const network = 'Etherscan';

   /*
   Capture and handle custom fields
   */
    let es_to = es_txn.to;
    let to = this.convertToField(es_to);
    let es_from = es_txn.from;
    let from = this.convertFromField(es_from);
    
    /* Convert to ITransaction */
    try {
      var base_cnv_txn: ITransaction = {
        id: es_txn.hash,
        type: 'Standard',
        amount: {
          amount: es_txn.value,
          currency: 'Wei'
        },
        created_at: es_txn.timeStamp,
        description: '',
        native_amount: {
          amount: es_txn.value,
          currency: 'Wei'
        },
        network: {
          status: '??',
          hash: es_txn.hash,
          transaction_fee: {
            amount: es_txn.gasUsed,
            currency: 'Wei'
          },
          transaction_amount: {
            amount: es_txn.value.toString(),
            currency: 'Wei'
          },
          confirmations: es_txn.confirmations,
          blockHeight: es_txn.blockNumber
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
    
    return base_cnv_txn;
    
  }

  convertInvoiceTo(invoice: IInvoice) {

  }

  convertInvoiceFrom(invoice: IEtherscanInvoice
  ) {

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
      console.log("etherscan tx has no to field");
      return 'unknown';
    }
    
  }

  convertFromField(ex_from_field: any) {
    if (typeof ex_from_field == 'string') {
      return ex_from_field;
    }
    else {
      console.log("etherscan tx has no from field");
      return 'unknown';
    }
  }

}
