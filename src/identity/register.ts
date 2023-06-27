import { Connection, Identity } from "~/types";


export default ({ client }: Connection): Promise<Identity> => {
    return client.platform.identities.register()
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};
