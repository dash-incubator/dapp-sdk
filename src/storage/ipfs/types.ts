type Upload = {
    data: { content: string, path: string }[] | File | string,
    options: {
        compress?: boolean,
        encrypt?: boolean,
        secret?: string
    }
};


export type { Upload };
