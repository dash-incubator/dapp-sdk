import { app, connection, contract, identity, store, Connection } from '../../src';


let account: Connection | null = null;

(async function init() {
    if (account) {
        return;
    }

    console.log('Connection: creating');

    account = await connection.create({
        network: 'testnet',
        wallet: {
            mnemonic: 'magic sense power ride rigid access veteran perfect next mom purse speed'
        }
    });

    console.log('Connection: connected');

    if (!account.identity) {
        console.log('Identity: registering');

        if (await account.balance > 0) {
            account.identity = await identity.register(account);
        }

        if (!account.identity) {
            console.log('Identity: registration failed');
        }
    }

    // SDK 'contract' IDs should be manually defined once platform is released on mainnet
    if (account.identity) {
        console.log('Apps: registering');

        let apps = [
                app.audio.contracts,
                app.comment.contracts,
                app.gallery.contracts,
                app.image.contracts,
                app.notary.contracts,
                app.video.contracts
            ],
            contracts: Record<PropertyKey, any> = {};

        for (let i = 0, n = apps.length; i < n; i++) {
            Object.assign(contracts, apps[i]);
        }

        account.apps.set('sdk', await contract.register(account, contracts).then(response => {
            let contract = response.getDataContract();

            console.log(contract);

            return contract;
        }));

        console.log('Apps: registered');
    }

    // console.log('Identity: topping up');

    // await user.identity.topup(2);

    // console.log('Identity: topup done');

    let vault = store.local.accounts('some password goes here');

    vault.set('example', {
        identity: 'some identity',
        mnemonic: 'some mnemonic'
    });

    store.local.apps.set('example', {
        contractId: 'value'
    });
})();
