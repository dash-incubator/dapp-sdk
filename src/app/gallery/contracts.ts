export default {
    gallery: {
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
            gallery: {
                items: {
                    type: 'string'
                },
                type: 'array'
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
        required: ['$createdAt', '$updatedAt', 'encrypted', 'gallery'],
        type: 'object'
    }
};
