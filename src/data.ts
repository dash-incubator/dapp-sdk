import { Client, Connection } from '~/types';


function mnemonic(client: Client): string {
    return client.wallet!.exportWallet() as any;
}


const decrypt = async ({ client }: Connection, data: any, secret?: string) => {
    return ( await client.getWalletAccount() ).decrypt('AES', data, secret || mnemonic(client));
};

const encrypt = async ({ client }: Connection, data: any, secret?: string) => {
    return ( await client.getWalletAccount() ).encrypt('AES', data, secret || mnemonic(client));
};


export default { decrypt, encrypt };
export { decrypt, encrypt };
