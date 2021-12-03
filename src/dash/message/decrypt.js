const decrypt = async (client, message) => {
    let account = await client.getWalletAccount();

    return await account.decrypt('AES', message, await client.wallet.exportWallet());
}


export default decrypt;
