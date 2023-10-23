declare const _default: {
    notary: {
        additionalProperties: boolean;
        indices: ({
            name: string;
            properties: {
                cid: string;
            }[];
            unique: boolean;
        } | {
            name: string;
            properties: {
                $ownerId: string;
            }[];
            unique?: undefined;
        })[];
        properties: {
            cid: {
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
