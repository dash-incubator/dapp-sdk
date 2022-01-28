import type { Client } from '@dash/types';
import type { Object } from '@src/types';
import decrypt from './decrypt';
import encrypt from './encrypt';


let actions = { decrypt, encrypt };


const recursive = async (client: Client, values: Object, { decrypt, encrypt, secret, skip }: { decrypt?: boolean, encrypt?: boolean, secret?: string, skip?: any[] } = {}): Promise<any> => {
    skip = skip || [];

    for (let key in values) {
        if (key.startsWith('$') || skip.includes(key) || [null, undefined].includes(values[key])) {
            continue;
        }

        if (typeof values[key] === 'object') {
            values[key] = await recursive(client, values[key], { decrypt, encrypt, secret });
        }
        else {
            values[key] = await actions[decrypt ? 'decrypt' : 'encrypt'](client, values[key], (key === 'secret' ? '' : secret));
        }
    }

    return values;
};


export default recursive;
