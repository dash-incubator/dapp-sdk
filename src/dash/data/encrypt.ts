import type { Client } from '@dash/types';


const encrypt = async ({ getWalletAccount, wallet }: Client, data: any, secret?: string): Promise<string> => {
    return await (await getWalletAccount()).encrypt('AES', data, (secret || await wallet.exportWallet()));
}


export default encrypt;
