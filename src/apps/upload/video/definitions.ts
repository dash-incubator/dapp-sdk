export default {
    video: {
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
                        banner: {
                            type: 'string'
                        },
                        thumbnail: {
                            type: 'string'
                        },
                        video: {
                            type: 'string'
                        }
                    },
                    required: ['video'],
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
