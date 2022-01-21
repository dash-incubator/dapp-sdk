import type { Client } from '@src/dash/types';


const decrypt = async ({ account, wallet }: Client, data: any, secret?: string): Promise<string> => {
    if (!secret) {
        secret = await wallet.exportWallet();
    }

    return await account.decrypt('AES', data, secret);
}


export default decrypt;
