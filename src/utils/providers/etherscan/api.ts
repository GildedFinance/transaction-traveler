import { ExTravelerTxType } from "../../../traveler/extraveler";

const EtherscanApi = require('etherscan-api');
const max_block = 9999999999999;

export interface IAccount {
    address: string,
    balance?: {
        currency: string,
        value: number,
        denominiation:string
    }
}

export class EtherApi {
    api: any;
    constructor(apikey: string, chain: string, timeout: number) {
        this.api = EtherscanApi.init(apikey, chain, timeout);
        return this;
    }

    async getBalance(address: string) {
        try {
            const resp = await this.api.account.balance(address);
            if (resp.result !== null) {
                let account:IAccount = {
                    address: address,
                    balance: {
                        currency: 'ETH',
                        denominiation:'Wei',
                        value:resp.result
                    }
                };
                return account;
            }
            else {
                let account: IAccount = {
                    address: address
                } 
                return account;
            }

        }
        catch (e) {
            console.log(e);
        }
    }

    async getTransactions(address: string, start_block: number) {
        try {
            const tx_list = await this.api.account.txlist(
                address, start_block, max_block, 'desc');
        
            return tx_list;
        }
        catch(ex){
            console.log(ex);
        }
    }
}