export default {
    audio: {
        additionalProperties: false,
        indices: [
            {
                name: 'ownerId',
                properties: [{ $ownerId: 'asc' }]
            }
        ],
        properties: {
            audio: {
                type: 'string'
            },
            banner: {
                type: 'string'
            },
            description: {
                type: 'string'
            },
            encrypted: {
                type: 'boolean'
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
            },
            thumbnail: {
                type: 'string'
            },
            transcoded: {
                type: 'boolean'
            }
        },
        required: ['$createdAt', '$updatedAt', 'audio', 'encrypted', 'transcoded'],
        type: 'object'
    }
};
