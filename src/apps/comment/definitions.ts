export default {
    comment: {
        additionalProperties: false,
        indices: [
            {
                properties: [{ $createdAt: 'desc' }]
            },
            {
                properties: [{ $updatedAt: 'desc' }]
            },
            {
                properties: [{ $ownerId: 'asc' }]
            },
            {
                properties: [{ parent: 'asc' }]
            },
            {
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
