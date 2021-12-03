declare const _default: {
    upload: {
        files: (files: {
            content: string;
            path: string;
        }) => Promise<string>;
        file: (content: string) => Promise<string>;
    };
};
export default _default;
