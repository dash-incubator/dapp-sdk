import { Connection, Document } from "~/types";


export default ({ client, identity }: Connection, name: string): Promise<Document> => {
    if (!identity) {
        throw new Error('DAPP SDK: platform identity is required to continue');
    }

    return client.platform.names.register(
        `${name}.dash`,
        {
            dashUniqueIdentityId: identity.getId()
        },
        identity
    )
    .then((document: Document) => document.toJSON())
    .catch((e: Error) => console.error('Something went wrong:\n', e));
};
