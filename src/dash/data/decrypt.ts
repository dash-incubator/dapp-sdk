import type { Client } from '@dash/types';


const decrypt = async ({ getWalletAccount, wallet }: Client, data: any, secret?: string): Promise<string> => {
    return await (await getWalletAccount()).decrypt('AES', data, (secret || await wallet.exportWallet()));
}


export default decrypt;
