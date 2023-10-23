export default ({ client }, locator, query) => {
    return client.platform.documents.get(locator, query)
        .then((documents) => {
        for (let i = 0, n = documents.length; i < n; i++) {
            documents[i] = documents[i].toJSON();
        }
        return documents;
    })
        .catch((e) => console.error('Something went wrong:\n', e));
};
