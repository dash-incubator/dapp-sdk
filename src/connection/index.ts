import { Connection } from '~/types';
import { Client } from 'dash';
import identity from '~/identity';
import instance from './instance';


const create = async (options: ConstructorParameters<typeof Client>[0] & { identity?: string } = {}) => {
    options.wallet ??= {};

    if (options.network === 'testnet') {
        options.wallet.unsafeOptions = {
            skipSynchronizationBeforeHeight: 700000
        };
    }

    let client = new Client(options);

    return instance(client, await identity.get({ client } as Connection, options.identity || ''));
};

// TODO: Integrate with metamask like extension made for Dash ( when available )
// const detect = () => {};


export default { create };
export { create };