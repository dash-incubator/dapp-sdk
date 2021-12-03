const read = async (client, id) => {
    return client.platform.contracts.get(id)
        .then((d) => JSON.parse(d))
        .catch((e) => console.error('Something went wrong:\n', e));
}


export default read;
