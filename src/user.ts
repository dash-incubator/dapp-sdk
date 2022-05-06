import type { Client, Contract, Document, Identity, Response } from '@api/types';
import type { Object } from './types';
import api from './api';
import config from './config';


let client: Client;


const apps = {
    all: async (): Promise<Object> => {
        return await config.get('apps', {});
    },
    get: async (app: string, register: () => Promise<Object | string>): Promise<string> => {
        return await config.get(`apps.${app}.contractId`, async () => {
            let contract: Object | string = await register();

            if (typeof contract === 'string') {
                contract = await api.contract.get(client, contract) as Object;
            }

            client.getApps().set(app, {
                contract,
                contractId: contract.dataContract.id
            });

            return contract.dataContract.id.toString();
        });
    }
};

const contract = {
    register: async (definitions: Object): Promise<Contract> => {
        return await api.contract.register(client, definitions, await identity.get());
    }
};

const data = {
    decrypt: async (data: any, secret?: string): Promise<string> => {
        return api.data.decrypt(client, data, secret);
    },
    encrypt: async (data: any, secret?: string): Promise<string> => {
        return api.data.encrypt(client, data, secret);
    },
    recursive: {
        decrypt: async (data: any, options: { secret?: string, skip?: any[] } = {}): Promise<any> => {
            return api.data.recursive(client, data, Object.assign(options, { decrypt: true }));
        },
        encrypt: async (data: any, options: { secret?: string, skip?: any[] } = {}): Promise<any> => {
            return api.data.recursive(client, data, Object.assign(options, { encrypt: true }));
        }
    }
};

const document = {
    delete: async (ids: string[] | string, locator: string): Promise<string[]> => {
        let documents = await api.documents.get(client, locator, {
                where: [
                    ['$id', 'in', Array.isArray(ids) ? ids : [ids]],
                    ['$ownerId', '==', ( await identity.get() ).getId()]
                ]
            }),
            response = await api.documents.delete(client, documents, await identity.get());

        return (response.transitions || []).map((r: Object) => (r['$id'] || '').toString()).filter(Boolean);
    },
    // Documents can return additional '$' prefixed keys in 'data' value
    get: async (locator: string, query: Object): Promise<Document[]> => {
        return ( await api.documents.get(client, locator, query) ).map((r: Response) => r.toJSON());
    },
    // `transitions` returns saved document data with '$id'
    save: async (documents: Document[] | Document, locator: string): Promise<Document[]> => {
        return ( await api.documents.save(client, documents, await identity.get(), locator) ).transitions || [];
    }
};

const identity = {
    get: async (): Promise<Identity> => {
        let initializing = config.has('identity') === false;

        if (!('getId' in session.identity)) {
            if (!session.wallet.address) {
                await session.regenerate();
            }

            session.identity = await api.identity.get(client, await config.get('identity', ''));
        }

        if (initializing) {
            config.set('identity', session.identity.getId());
        }

        return session.identity;
    }
};

const name = {
    register: async (name: string): Promise<Object> => {
        return api.name.register(client, await identity.get(), name);
    },
    search: async (name: string): Promise<Object[]> => {
        return api.name.search(client, name);
    }
};

const session: { clear: () => void, end: () => void, identity: Identity, regenerate: () => Promise<boolean>, start: () => Promise<boolean>, wallet: { address: string, balance: number }  } = {
    identity: {},
    wallet: {
        address: '',
        balance: 0
    },

    clear: (): void => {
        session.identity = {};
        session.wallet = {
            address: '',
            balance: 0
        };
    },
    end: (): void => {
        if (client) {
            client.disconnect();
        }

        config.clear();
        session.clear();
    },
    regenerate: async (): Promise<boolean> => {
        let account = await client.getWalletAccount();

        session.clear();
        session.wallet = {
            address: account.getUnusedAddress().address,
            balance: await account.getConfirmedBalance()
        };

        return session.wallet.balance > 0 && ( await identity.get() ).getId();
    },
    start: async (options: Object = {}): Promise<boolean> => {
        if (!client) {
            client = api.client.connect(Object.assign(options, {
                apps: await apps.all(),
                wallet: options.wallet || { mnemonic: await config.get('mnemonic', false) || null }
            }));
            config.set('mnemonic', client.wallet.exportWallet());
        }

        if (config.has('identity')) {
            return true;
        }

        return session.regenerate();
    }
};


export default { apps: { get: apps.get }, contract, data, document, identity, name, session };
