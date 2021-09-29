const encrypt = async (client, message) => {
    return await client.account.encrypt('AES', message, await client.wallet.exportWallet());
}


export default encrypt;
