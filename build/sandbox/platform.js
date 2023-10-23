import { app, connection, contract, identity } from '../index';
(async function init() {
    let account = null;
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
    if (!account.identity) {
        return;
    }
    console.log('Apps: registering');
    let apps = [
        app.audio.contracts,
        app.comment.contracts,
        app.gallery.contracts,
        app.image.contracts,
        app.notary.contracts,
        app.video.contracts
    ], contracts = {};
    for (let i = 0, n = apps.length; i < n; i++) {
        Object.assign(contracts, apps[i]);
    }
    account.apps.set('sdk', await contract.register(account, contracts).then(response => {
        return response.getDataContract();
    }));
    console.log('Apps: registered');
})();
