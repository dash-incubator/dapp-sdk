export default (client, identity) => {
    return {
        apps: {
            set(key, contract) {
                client.getApps().set(key, {
                    contract,
                    contractId: contract.getId()
                });
            }
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
        get identity() {
            return identity;
        },
        set identity(value) {
            identity = value;
        }
    };
};
