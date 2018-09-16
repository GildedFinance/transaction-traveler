const EtherscanApi = require('etherscan-api');
const max_block = 9999999999999;

export class EtherApi {
    api: any;
    constructor(apikey: string, chain: string, timeout: number) {
        this.api = EtherscanApi.init(apikey, chain, timeout);
        return this;
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