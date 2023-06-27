import { Connection, Documents, Document, Query } from '~/types';
import contracts from './contracts';
import document from '~/document';


let locator = 'sdk.audio';


const del = async (connection: Connection, documents: Documents | Document) => {
    return await document.delete(connection, documents);
};

const get = async (connection: Connection, query: Query) => {
    return await document.get(connection, locator, query);
};

const set = async (connection: Connection, documents: Documents | Document, locator: string) => {
    return await document.set(connection, documents, locator);
};


export default { contracts, delete: del, get, locator, set };