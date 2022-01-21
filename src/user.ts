import type { Client, Document, Identity, Object } from '@dash/types';
import config from './config';
import dash from './dash';


let client: Client,
    session: { identity: Identity } = {
        identity: { id: '' }
    };


const apps = {
    all: async (): Promise<Object> => {
        return await config.get('apps', {});
    },
    get: async (app: string, register: () => Promise<Object>): Promise<string> => {
        return await config.get(`apps.${app}.contractId`, async () => {
            let contract: Object = await register();

            if (Object.keys(contract).length < 2) {
                contract = await dash.contract.get(client, contract['$id']);
            }

            client.getApps().set(app, {
                contract: contract,
                contractId: contract['$id']
            });

            return contract['$id'];
        });
    }
};

const connect = async (options: Object = {}): Promise<void> => {
    if (client) {
        disconnect();
    }

    client = dash.client.connect(Object.assign(options || {
        wallet: {
            mnemonic: null,
            offlineMode: true
        }
    }, { apps: await apps.all() }));

    config.set('mnemonic', client.wallet.exportWallet());
};

const contract = {
    register: async (definitions: Object): Promise<string> => {
        return await dash.contract.register(client, definitions, (await identity.session()));
    }
};

const data = {
    decrypt: async (data: any, secret?: string): Promise<string> => {
        return await dash.data.decrypt(client, data, secret);
    },
    encrypt: async (data: any, secret?: string): Promise<string> => {
        return await dash.data.encrypt(client, data, secret);
    }
};

const disconnect = (): void => {
    if (client) {
        client.disconnect();
    }

    config.clear();
    session = {
        identity: { id: '' }
    };
};

const document = {
    delete: async (ids: string[], locator: string): Promise<Document[]> => {
        return await dash.document.delete(client, await dash.document.get(client, locator, {
            where: [
                ['$id', 'in', ids],
                ['$ownerId', '==', await identity.get()]
            ]
        }), (await identity.session()));
    },
    // Documents can return additional '$' prefixed keys in 'data' value
    get: async (locator: string, query: Object): Promise<Document[]> => {
        return (await dash.document.get(client, locator, query))
            .map(async (doc: Object) => {
                return Object.assign(doc.data || {}, { '$id': (doc.id || '').toString() });
            });
    },
    // `transitions` returns saved document data with '$id'
    save: async (documents: Document[] | Document, locator: string): Promise<Document[]> => {
        return (
            await dash.document.save(client, documents, (await identity.session()), locator)
        ).transitions || [];
    }
};

const identity = {
    get: async (): Promise<string> => {
        let id: string = await config.get('identity', async () => {
                return await dash.identity.create(client);
            });

        if (id && id !== session.identity.id) {
            session.identity = await dash.identity.get(client, id) as Identity;
        }

        if (!session.identity.id) {
            config.delete('identity');
        }

        return id;
    },
    session: async (): Promise<Identity> => {
        if (!session.identity.id) {
            await identity.get();
        }

        return session.identity;
    }
};

const init = async (options: Object = {}): Promise<boolean> => {
    if (!client) {
        if (!(options.wallet.mnemonic || '')) {
            let mnemonic = await config.get('mnemonic', false);

            if (mnemonic) {
                options.wallet = { mnemonic };
            }
        }

        await connect(options);
    }

    if (client.account.getConfirmedBalance() > 0 && (await identity.get())) {
        return true;
    }

    return false;
};

const name = {
    register: async (name: string): Promise<Object> => {
        return await dash.name.register(client, (await identity.session()), name);
    },
    search: async (name: string): Promise<Object[]> => {
        return await dash.name.search(client, name);
    }
};



export default Object.freeze({ apps: { get: apps.get }, contract, data, disconnect, document, identity: { get: identity.get }, init, name });
