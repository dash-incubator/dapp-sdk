export default {
    audio: {
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
                        audio: {
                            type: 'string'
                        },
                        banner: {
                            type: 'string'
                        },
                        thumbnail: {
                            type: 'string'
                        }
                    },
                    required: ['audio'],
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
                },
                transcoded: {
                    type: 'boolean'
                }
            },
            required: ['encrypted', 'transcoded'],
            type: 'object'
    }
};
