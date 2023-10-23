declare const _default: {
    comment: {
        additionalProperties: boolean;
        indices: ({
            name: string;
            properties: {
                $ownerId: string;
            }[];
        } | {
            name: string;
            properties: {
                parent: string;
            }[];
        } | {
            name: string;
            properties: {
                thread: string;
            }[];
        })[];
        properties: {
            content: {
                type: string;
            };
            parent: {
                maxLength: number;
                minLength: number;
                type: string;
            };
            thread: {
                maxLength: number;
                minLength: number;
                type: string;
            };
        };
        required: string[];
        type: string;
    };
};
export default _default;
