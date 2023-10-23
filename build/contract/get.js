export default async ({ client }, id) => {
    return await client.platform.contracts.get(id)
        .catch((e) => console.error('Something went wrong:\n', e));
};
