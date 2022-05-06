import type { Client } from '@api/types';


const decrypt = async (client: Client, data: any, secret?: string): Promise<string> => {
    let account = await client.getWalletAccount(),
        key = secret || await client.wallet.exportWallet();

    return await account.decrypt('AES', data, key);
}


export default decrypt;
