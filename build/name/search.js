export default ({ client }, name) => {
    return client.platform.names.search(name, 'dash')
        .then((documents) => {
        for (let i = 0, n = documents.length; i < n; i++) {
            documents[i] = documents[i].toJSON();
        }
        return documents;
    })
        .catch((e) => console.error('Something went wrong:\n', e));
};
