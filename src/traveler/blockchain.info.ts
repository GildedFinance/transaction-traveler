//Blockchain.info Traveler 

import { Traveler, Network } from "../lib/shared";
import { ITransaction } from "../lib/transaction";
import { IBITransaction } from "../utils/providers/blockchain.info/api";
import { IInvoice } from "../lib/invoice";
const this_network = "blockchain.info";
const debug = true;

export interface IBIInvoice{

}

export class BlockchainInfoTraveler implements Traveler {
    convertTransactionTo(txn: ITransaction) {
        throw new Error("Method not implemented.");
    }
    convertTransactionFrom(txn: IBITransaction): ITransaction {
        let bi_txn = <IBITransaction>txn;
        var base_cnv_txn = <ITransaction>{};

        const network = this_network;

        try {
            var base_cnv_txn: ITransaction = {
                id: bi_txn.hash,
                // @TODO
                type: 'Standard',
                amount: {
                    // @TODO confirm this
                    amount: 0,
                    currency: "BTC",
                    denomination: "Sat"
                },
                created_at: String(bi_txn.time),
                description: '',
                native_amount: {
                    //@TODO
                    amount: 0,
                    currency: 'BTC',
                    denomination:'Sat'
                },
                network: {
                    status: '??',
                    hash: bi_txn.hash,
                    transaction_fee: undefined,
                    transaction_amount: undefined,
                    confirmations: undefined,
                    blockHeight: bi_txn.block_height
                },
                to: {
                    id: '??'
                },
                from: {
                    id: '??'
                },
                source: {
                    name:'Blockchain.info'
                }
            }
            return base_cnv_txn;
        }
        catch (e) {
            console.log(e);
            throw new Error("Unable to create ITransaction from IBITransaction");
        }

    }
    convertInvoiceTo(invoice: IInvoice) {
        throw new Error("Method not implemented.");
    }
    convertInvoiceFrom(invoice: IBIInvoice): IInvoice {
        throw new Error("Method not implemented.");
    }
 

}