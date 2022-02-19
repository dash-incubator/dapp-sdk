export default {
    image: {
        additionalProperties: false,
        indices: [
            {
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
        required: ['encrypted', 'image'],
        type: 'object'
    }
};
