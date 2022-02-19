export default {
    comment: {
        additionalProperties: false,
        indices: [
            {
                properties: [{ $ownerId: 'asc' }]
            },
            {
                properties: [
                    { parent: 'asc' },
                    { thread: 'asc' }
                ]
            }
        ],
        properties: {
            content: {
                type: 'string'
            },
            parent: {
                type: 'string'
            },
            thread: {
                type: 'string'
            }
        },
        required: ['content', 'thread'],
        type: 'object'
    }
};
