import type { Client, Object } from '@dash/types';
import Dash from 'dash';


let testnet = true;


const connect = (options: Object = {}): Client => {
    options.network = 'mainnet';
    options.wallet = options.wallet || {};

    if (testnet) {
        options.dapiAddresses = options.dapiAddresses || [
            '34.217.23.70:3000',
            '34.222.102.137:3000',
            '34.209.166.42:3000',
            '18.236.128.49:3000',
            '35.163.99.20:3000',
            '34.215.67.224:3000',
            '34.211.244.117:3000'
        ];
        options.network = 'testnet';

        if (options.wallet.mnemonic || '') {
            options.wallet.unsafeOptions = {
                skipSynchronizationBeforeHeight: 639373
            };
        }
    }

    // TODO: Remove once types are fixed in Dash package
    // @ts-ignore
    return new Dash.Client(options);
};

const network = {
    mainnet: () => {
        testnet = false;
    },
    testnet: () => {
        testnet = true;
    }
};


export default { connect, network };
