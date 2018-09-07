const EtherscanApi = require('etherscan-api');
import * as api_auth from '/home/ken/Development/GildedFinance/transaction-traveler/private/etherscan.json';
import * as txns from '/home/ken/Documents/Gilded/Coinbase_flow/3-list_account_transactions-eth.json' 

const etherscan = EtherscanApi.init(api_auth.key, 'kovan', '5000')
const max_block = 9999999999999;

export class EtherApi {
    async getTransactions(address: string) {
        try {
            const tx_list = await etherscan.account.txlist(
                address, 0, max_block, 'desc');
        
            return tx_list;
        }
        catch(ex){
            console.log(ex);
        }
    }
}