const decrypt = async (client, message) => {
    return await client.account.decrypt('AES', message, await client.wallet.exportWallet());
}


export default decrypt;
