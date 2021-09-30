import config from './config';
import dash from './dash';


let client;


const apps = {
    all: async () => {
        return await config.get('apps', {});
    },
    get: async (app, fallback) => {
        return await config.get(`apps.${app}.contractId`, fallback);
    },
    set: (app, contract) => {
        config.set(`apps.${app}.contractId`, contract);
    }
};

const connect = async (options) => {
    if (client) {
        disconnect();
    }

    if (!options) {
        options = {
            wallet: {
                mnemonic: null,
                offlineMode: true
            }
        };
    }

    client = dash.client.connect(Object.assign(options, { apps: await apps.all() }));
};

const contract = {
    register: async (contractDefinitions) => {
        return await dash.contract.register(client, contractDefinitions, await identity.get());
    }
};

const disconnect = () => {
    if (!client) {
        return;
    }

    client.disconnect();
    client = null;

    config.clear();
};

const document = {
    delete: async (documents) => {
        return await dash.document.delete(client, documents, await identity.get());
    },
    read: async (locator, query) => {
        return await dash.document.read(client, locator, query);
    },
    save: async (documents, locator) => {
        return await dash.document.save(client, documents, await identity.get(), locator);
    }
};

const identity = {
    get: async () => {
        return await config.get('identity', async () => {
            let data = await wallet.read();

            if (data.balance.confirmed > 0) {
                return await dash.identity.create(client);
            }

            return false;
        });
    }
};

const init = async (reconnect = false) => {
    let options;

    if (reconnect) {
        client = null;
    }

    if (!client) {
        let mnemonic = await config.get('mnemonic', false);

        if (mnemonic) {
            options = {
                wallet: { mnemonic }
            }
        }

        await connect(options);

        // Cache Fresh Mnemonic
        if (!mnemonic) {
            config.set('mnemonic', (await dash.wallet.read(client)).mnemonic);
        }
    }
};

const message = {
    decrypt: async (message) => {
        return await dash.message.decrypt(client, message);
    },
    encrypt: async (message) => {
        return await dash.message.encrypt(client, message);
    }
};

const name = {
    read: async (name) => {
        return await dash.name.read(client, name);
    },
    register: async (name) => {
        return await dash.name.register(client, await identity.get(), name);
    }
};

const wallet = {
    read: async () => {
        return await dash.wallet.read(client);
    }
};


export default { apps, connect, contract, disconnect, document, identity, init, message, name, wallet };
