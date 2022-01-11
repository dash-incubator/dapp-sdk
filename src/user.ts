import config from './config';
import dash from './dash';


// TODO: Replace once Dash type declarations are fixed
let client: any;


const apps = {
    all: async () => {
        return await config.get('apps', {});
    },
    get: async (app: string, register: () => Promise<{ [key: string]: any }>) => {
        return await config.get(`apps.${app}.contractId`, async () => {
            let contract: { [key: string]: any } = await register();

            if (Object.keys(contract).length < 2) {
                contract = await dash.contract.read(client, contract['$id']);
            }

            client.getApps().set(app, {
                contract: contract,
                contractId: contract['$id']
            });

            return contract['$id'];
        });
    }
};

const connect = async (options: object = {}) => {
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
    register: async (contractDefinitions: object) => {
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
    delete: async (documents: [] | object) => {
        return await dash.document.delete(client, documents, await identity.get());
    },
    read: async (locator: string, query: object) => {
        return await dash.document.read(client, locator, query);
    },
    save: async (documents: [] | object, locator: string) => {
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

        if (!mnemonic) {
            config.set('mnemonic', (await dash.wallet.read(client)).mnemonic);
        }
    }
};

const message = {
    decrypt: async (message: any) => {
        return await dash.message.decrypt(client, message);
    },
    encrypt: async (message: any) => {
        return await dash.message.encrypt(client, message);
    }
};

const name = {
    read: async (name: string) => {
        return await dash.name.read(client, name);
    },
    register: async (name: string) => {
        return await dash.name.register(client, await identity.get(), name);
    }
};

const wallet = {
    read: async () => {
        return await dash.wallet.read(client);
    }
};


export default { apps: { get: apps.get }, connect, contract, disconnect, document, identity, init, message, name, wallet };
