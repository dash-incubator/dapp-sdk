export default {
    image: {
        additionalProperties: false,
        indices: [
            {
                name: 'ownerId',
                properties: [{ $ownerId: 'asc' }]
            }
        ],
        properties: {
            description: {
                type: 'string'
            },
            encrypted: {
                type: 'boolean'
            },
            image: {
                type: 'string'
            },
            keywords: {
                items: {
                    type: 'string'
                },
                type: 'array'
            },
            name: {
                type: 'string'
            },
            secret: {
                type: 'string'
            }
        },
        required: ['$createdAt', '$updatedAt', 'image'],
        type: 'object'
    }
};
