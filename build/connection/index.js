import { Client } from 'dash';
import identity from '../identity';
import instance from './instance';
const create = async (options = {}) => {
    options.wallet ??= {};
    if (options.network === 'testnet') {
        options.wallet.unsafeOptions = {
            skipSynchronizationBeforeHeight: 700000
        };
    }
    let client = new Client(options);
    return instance(client, await identity.get({ client }, options.identity || ''));
};
export default { create };
export { create };
