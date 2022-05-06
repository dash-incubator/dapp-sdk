import type { Client } from '@api/types';
import type { Object } from '@src/types';
import decrypt from './decrypt';
import encrypt from './encrypt';


let actions = { decrypt, encrypt };


const recursive = async (client: Client, values: Object, { decrypt, encrypt, secret, skip }: { decrypt?: boolean, encrypt?: boolean, secret?: string, skip?: any[] } = {}): Promise<any> => {
    skip = skip || [];

    for (let key in values) {
        let value = values[key];

        if (key.startsWith('$') || skip.includes(key) || [null, undefined].includes(value)) {
            continue;
        }

        if (typeof value === 'object' && value !== null) {
            values[key] = await recursive(client, value, { decrypt, encrypt, secret });
        }
        else {
            values[key] = await actions[decrypt ? 'decrypt' : 'encrypt'](client, value, (key === 'secret' ? '' : secret));
        }
    }

    return values;
};


export default recursive;
