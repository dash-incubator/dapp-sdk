const encrypt = async (client, message) => {
    let account = await client.getWalletAccount();

    return await account.encrypt('AES', message, await client.wallet.exportWallet());
}


export default encrypt;
