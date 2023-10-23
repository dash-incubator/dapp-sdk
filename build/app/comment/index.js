import contracts from './contracts';
import document from '../../document';
let locator = 'sdk.comment';
const del = async (connection, documents) => {
    return await document.delete(connection, documents);
};
const get = async (connection, query) => {
    return await document.get(connection, locator, query);
};
const set = async (connection, documents, locator) => {
    return await document.set(connection, documents, locator);
};
export default { contracts, delete: del, get, locator, set };
