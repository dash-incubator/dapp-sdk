import get from './get';
let bips = 10000, duffs = 100000;
export default async ({ client }, identity, total) => {
    await client.platform.identities.topUp(identity, (duffs * (total * bips)) / bips);
    return get({ client }, identity);
};
