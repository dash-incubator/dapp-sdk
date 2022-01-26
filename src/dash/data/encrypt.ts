import type { Client } from '@dash/types';


const encrypt = async ({ account, wallet }: Client, data: any, secret?: string): Promise<string> => {
    return await account.encrypt('AES', data, (secret || await wallet.exportWallet()));
}


export default encrypt;
