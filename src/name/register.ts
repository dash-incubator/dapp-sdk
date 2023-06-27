import { Connection, Document } from "~/types";


export default ({ client, identity }: Connection, name: string): Promise<Document> => {
    return client.platform.names.register(
        `${name}.dash`,
        {
            // TODO: Require identity during connection?
            dashUniqueIdentityId: identity!.getId()
        },
        identity
    )
    .then((document: Document) => document.toJSON())
    .catch((e: Error) => console.error('Something went wrong:\n', e));
};
