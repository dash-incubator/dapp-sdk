declare const _default: {
    audio: {
        additionalProperties: boolean;
        indices: {
            name: string;
            properties: {
                $ownerId: string;
            }[];
        }[];
        properties: {
            audio: {
                type: string;
            };
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
        };
        required: string[];
        type: string;
    };
};
export default _default;
