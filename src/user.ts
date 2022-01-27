import type { Client, Document, Identity, Object } from '@dash/types';
import config from './config';
import dash from './dash';


let client: Client;


const apps = {
    all: async (): Promise<Object> => {
        return await config.get('apps', {});
    },
    get: async (app: string, register: () => Promise<Object>): Promise<string> => {
        return await config.get(`apps.${app}.contractId`, async () => {
            let contract: Object = await register();

            client.getApps().set(app, {
                contract: contract.documents ? contract : await dash.contract.get(client, contract['$id']),
                contractId: contract['$id']
            });

            return contract['$id'];
        });
    }
};

const contract = {
    register: async (definitions: Object): Promise<string> => {
        return await dash.contract.register(client, definitions, await identity.get());
    }
};

const data = {
    decrypt: async (data: any, secret?: string): Promise<string> => {
        return await dash.data.decrypt(client, data, secret);
    },
    encrypt: async (data: any, secret?: string): Promise<string> => {
        return await dash.data.encrypt(client, data, secret);
    },
    recursive: {
        decrypt: async (data: Object, options: { secret?: string, skip?: any[] } = {}): Promise<any> => {
            return await dash.data.recursive(client, data, Object.assign(options, { decrypt: true }));
        },
        encrypt: async (data: Object, options: { secret?: string, skip?: any[] } = {}): Promise<any> => {
            return await dash.data.recursive(client, data, Object.assign(options, { encrypt: true }));
        }
    }
};

const document = {
    delete: async (ids: string[], locator: string): Promise<Document[]> => {
        return await dash.document.delete(client, await dash.document.get(client, locator, {
            where: [
                ['$id', 'in', ids],
                ['$ownerId', '==', ( await identity.get() ).id]
            ]
        }), await identity.get());
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
            await dash.document.save(client, documents, await identity.get(), locator)
        ).transitions || [];
    }
};

const identity = {
    get: async (): Promise<Identity> => {
        if (!session.identity.id) {
            session.identity = await dash.identity.get(client, await config.get('identity', async () => {
                return await dash.identity.create(client);
            })) as Identity;
        }

        return session.identity;
    }
};

const name = {
    register: async (name: string): Promise<Object> => {
        return await dash.name.register(client, await identity.get(), name);
    },
    search: async (name: string): Promise<Object[]> => {
        return await dash.name.search(client, name);
    }
};

const session: { end: () => void, identity: Identity, start: () => Promise<boolean>, wallet: { address: string, balance: number }  } = {
    identity: { id: '' },
    wallet: {
        address: '',
        balance: 0
    },

    end: (): void => {
        if (client) {
            client.disconnect();
        }

        config.clear();

        session.identity = { id: '' };
        session.wallet = {
            address: '',
            balance: 0
        };
    },
    start: async (options: Object = {}): Promise<boolean> => {
        if (!client) {
            client = dash.client.connect(Object.assign(options, {
                apps: await apps.all(),
                wallet: options.wallet || { mnemonic: await config.get('mnemonic', false) || null }
            }));
            config.set('mnemonic', client.wallet.exportWallet());
        }

        let account = await client.getWalletAccount();

        session.wallet = {
            address: account.getUnusedAddress().address,
            balance: await account.getConfirmedBalance()
        };

        return session.wallet.balance > 0 && ( await identity.get() ).id !== '';
    }
};


export default { apps: { get: apps.get }, contract, data, document, identity: { get: identity.get },  name, session };
