import type { Client } from '@dash/types';


const decrypt = async ({ account, wallet }: Client, data: any, secret?: string): Promise<string> => {
    return await account.decrypt('AES', data, (secret || await wallet.exportWallet()));
}


export default decrypt;
