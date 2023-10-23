declare const _default: {
    image: {
        additionalProperties: boolean;
        indices: {
            name: string;
            properties: {
                $ownerId: string;
            }[];
        }[];
        properties: {
            description: {
                type: string;
            };
            encrypted: {
                type: string;
            };
            image: {
                type: string;
            };
            keywords: {
                items: {
                    type: string;
                };
                type: string;
            };
            name: {
                type: string;
            };
            secret: {
                type: string;
            };
        };
        required: string[];
        type: string;
    };
};
export default _default;
