const blockexplorer = require('blockchain.info/blockexplorer')

// @TODO 
// get API key 

export interface IBalance {
    final_balance: number,
    n_tx: number,
    total_received: number
}

export interface IBITransaction { 
    double_spend: boolean,
    block_height: number,
    time: number,
    relayed_by: string,
    hash: string,
    tx_index: number,
    size: number,
    inputs: Array<IInput>,
    ouputs: Array<IOutput>
}

export interface IInput { 
    n: number,
    value: number,
    address: string,
    tx_index: number,
    type: number,
    script: string,
    script_sig: string,
    sequence: number 
}

export interface IOutput {
    n: number,
    value: number,
    address: string,
    tx_index: number,
    script: string,
    spent: number
}

export interface IAddress {
    hash160: string,
    address: string,
    n_tx: number,
    total_received: number,
    total_sent: number,
    final_balance: number,
    transactions: Array<IBITransaction>
}

export class BtcApi {

    async getBalance(address: string) {
        try {
            //returns array of Balance objects
            const balance: IBalance = await blockexplorer.getBalance(address);
            return balance;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }

    async getAccount(address: string) {
        try {
            const account: IAddress = await blockexplorer.getAddress(address);
            return account;
        }
        catch (e) {
            console.log(e);
            throw e;
        }        
    }
}