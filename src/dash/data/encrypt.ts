import type { Client } from '@dash/types';


const encrypt = async ({ account, wallet }: Client, data: any, secret?: string): Promise<string> => {
    if (!secret) {
        secret = await wallet.exportWallet();
    }

    return await account.encrypt('AES', data, secret);
}


export default encrypt;
