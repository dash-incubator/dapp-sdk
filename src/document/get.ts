import { Connection, Documents, Query } from "~/types";


// Documents can return additional '$' prefixed keys in 'data' value
export default ({ client }: Connection, locator: string, query: Query): Promise<Documents> => {
    return client.platform.documents.get(locator, query)
        .then((documents: Documents) => {
            for (let i = 0, n = documents.length; i < n; i++) {
                documents[i] = documents[i].toJSON();
            }

            return documents;
        })
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};
