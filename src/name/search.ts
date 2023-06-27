import { Connection, Documents } from "~/types";


export default ({ client }: Connection, name: string): Promise<Documents> => {
    return client.platform.names.search(name, 'dash')
        .then((documents: Documents) => {
            for (let i = 0, n = documents.length; i < n; i++) {
                documents[i] = documents[i].toJSON();
            }

            return documents;
        })
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};
