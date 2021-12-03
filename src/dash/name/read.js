const read = async (client, name) => {
    return client.platform.names.search(name, 'dash')
        .then((d) => {
            let names = [];

            for (let i = 0, n = d.length; i < n; i++) {
                names.push(d[i].toJSON());
            }

            return names;
        })
        .catch((e) => console.error('Something went wrong:\n', e));
};


export default read;
