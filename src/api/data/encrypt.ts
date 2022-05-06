import type { Client } from '@api/types';


const encrypt = async (client: Client, data: any, secret?: string): Promise<string> => {
    let account = await client.getWalletAccount(),
        key = secret || await client.wallet.exportWallet();

    return await account.encrypt('AES', data, key);
}


export default encrypt;
