import { Client, Contract, Identity } from '~/types';


export default (client: Client, identity?: Identity) => {
    return {
        apps: {
            set (key: string, contract: Contract) {
                client.getApps().set(key, {
                    contract,
                    contractId: contract.getId()
                });
            }
        },
        disconnect: () => {
            client.disconnect();
        },

        get address() {
            return client.getWalletAccount()
                .then((account) => account.getUnusedAddress().address);
        },
        get balance() {
            return client.getWalletAccount()
                .then((account) => account.getConfirmedBalance());
        },
        get client() {
            return client;
        },
        get identity(): Identity | undefined {
            return identity;
        },
        set identity(value: Identity) {
            identity = value;
        }
    };
};