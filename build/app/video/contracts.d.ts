declare const _default: {
    video: {
        additionalProperties: boolean;
        indices: {
            name: string;
            properties: {
                $ownerId: string;
            }[];
        }[];
        properties: {
            banner: {
                type: string;
            };
            description: {
                type: string;
            };
            encrypted: {
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
            thumbnail: {
                type: string;
            };
            transcoded: {
                type: string;
            };
            video: {
                type: string;
            };
        };
        required: string[];
        type: string;
    };
};
export default _default;
