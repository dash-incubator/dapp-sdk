export default ({ client }) => {
    return client.platform.identities.register()
        .catch((e) => console.error('Something went wrong:\n', e));
};
