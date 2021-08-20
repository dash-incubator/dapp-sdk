const read = async (client) => {
    return await client.getWalletAccount()
        .then(async (account) => {
            return {
                address: account.getUnusedAddress().address,
                balance: {
                    confirmed: await account.getConfirmedBalance(),
                    total: await account.getTotalBalance()
                },
                mnemonic: client.wallet.exportWallet()
            };
        })
        .catch((e) => console.error('Something went wrong:\n', e));
};


export default read;
