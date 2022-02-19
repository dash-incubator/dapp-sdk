export default {
    video: {
        additionalProperties: false,
        indices: [
            {
                properties: [{ $ownerId: 'asc' }]
            }
        ],
        properties: {
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
            },
            video: {
                type: 'string'
            }
        },
        required: ['encrypted', 'transcoded', 'video'],
        type: 'object'
    }
};
