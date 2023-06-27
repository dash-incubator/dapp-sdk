import { Connection } from "~/types";
import get from './get';


// Simplify topup by calculating amount using Dash
// - duffs, gwei, etc. needs to be abstracted away from the average user
// - Dash will be the token name, symbol, term, etc. users are familiar
//   with so let them use that across everything
let bips = 10000,
    duffs = 100000;


export default async ({ client }: Connection, identity: string, total: number) => {
    await client.platform.identities.topUp(
        identity,
        (duffs * (total * bips)) / bips
    );

    return get({ client }, identity);
};
