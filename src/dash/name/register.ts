import type { Client, Identity, Object, Response } from '@dash/types';


const register = async ({ platform }: Client, identity: Identity, name: string): Promise<Object> => {
    return platform.names.register(`${name}.dash`, { dashUniqueIdentityId: identity.getId() }, identity)
        .then((r: Response) => r.toJSON())
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default register;
