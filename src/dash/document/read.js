const read = async (client, locator, query) => {
    return client.platform.documents.get(locator, query)
        .catch((e) => console.error('Something went wrong:\n', e));
};


export default read;
