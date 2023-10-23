function mnemonic(client) {
    return client.wallet.exportWallet();
}
const decrypt = async ({ client }, data, secret) => {
    return (await client.getWalletAccount()).decrypt('AES', data, secret || mnemonic(client));
};
const encrypt = async ({ client }, data, secret) => {
    return (await client.getWalletAccount()).encrypt('AES', data, secret || mnemonic(client));
};
export default { decrypt, encrypt };
export { decrypt, encrypt };
