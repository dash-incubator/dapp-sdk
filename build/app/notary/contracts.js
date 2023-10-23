export default {
    notary: {
        additionalProperties: false,
        indices: [
            {
                name: "cid",
                properties: [{ cid: 'asc' }],
                unique: true
            },
            {
                name: "ownerId",
                properties: [{ $ownerId: 'asc' }]
            }
        ],
        properties: {
            cid: {
                maxLength: 63,
                minLength: 0,
                type: 'string'
            }
        },
        required: ['$createdAt', '$updatedAt', 'cid'],
        type: 'object'
    }
};
