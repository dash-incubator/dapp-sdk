declare const _default: {
    gallery: {
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
            gallery: {
                items: {
                    type: string;
                };
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
