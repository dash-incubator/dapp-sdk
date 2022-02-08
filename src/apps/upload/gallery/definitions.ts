export default {
    gallery: {
        additionalProperties: false,
        indices: [
            {
                properties: [{ $ownerId: 'asc' }],
                unique: false
            }
        ],
        properties: {
            description: {
                type: 'string'
            },
            encrypted: {
                type: 'boolean'
            },
            ipfs: {
                additionalProperties: false,
                properties: {
                    gallery: {
                        items: {
                            type: 'string'
                        },
                        type: 'array'
                    }
                },
                required: ['gallery'],
                type: 'object'
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
        required: ['encrypted'],
        type: 'object'
    }
};
