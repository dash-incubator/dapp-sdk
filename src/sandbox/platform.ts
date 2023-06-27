import { app, connection, contract, identity, Connection } from '~/index';


(async function init() {
    let account: Connection | null = null;

    console.log('Connection: creating');

    account = await connection.create({
        network: 'testnet',
        wallet: {
            mnemonic: 'magic sense power ride rigid access veteran perfect next mom purse speed'
        }
    });

    console.log('Connection: connected');

    // console.log('Identity: topping up');

    // await identity.topup(account, await account.identity.getId(), 5);

    // console.log('Identity: topup done');

    if (!account.identity) {
        console.log('Identity: registering');

        if (await account.balance > 0) {
            account.identity = await identity.register(account);
        }

        if (!account.identity) {
            console.log('Identity: registration failed');
        }
    }

    if (!account.identity) {
        return;
    }

    // SDK 'contract' IDs should be manually defined once platform is released on mainnet
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
        return response.getDataContract();
    }));

    console.log('Apps: registered');
})();
