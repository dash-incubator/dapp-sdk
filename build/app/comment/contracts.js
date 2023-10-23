export default {
    comment: {
        additionalProperties: false,
        indices: [
            {
                name: 'ownerId',
                properties: [{ $ownerId: 'asc' }]
            },
            {
                name: 'parent',
                properties: [{ parent: 'asc' }]
            },
            {
                name: 'thread',
                properties: [{ thread: 'asc' }]
            }
        ],
        properties: {
            content: {
                type: 'string'
            },
            parent: {
                maxLength: 44,
                minLength: 0,
                type: 'string'
            },
            thread: {
                maxLength: 44,
                minLength: 0,
                type: 'string'
            }
        },
        required: ['$createdAt', '$updatedAt', 'content', 'parent', 'thread'],
        type: 'object'
    }
};
