import { Entity as AbstractEntity } from '@entity/types';


type Document = {
    $id?: string;
    description?: string;
    encrypted: boolean;
    ipfs: {
        banner?: string;
        thumbnail?: string;
        video: string;
    };
    keywords?: string[];
    name?: string;
    secret?: string;
    transcoded: boolean;
};

interface Entity extends AbstractEntity {
    data: Document;
    update: (input: Partial<Input>) => Promise<Entity>;
};

type Input = {
    banner?: File;
    compress?: boolean;
    description?: string;
    encrypted?: boolean;
    keywords?: string[];
    name?: string;
    secret?: string;
    thumbnail?: File;
    transcoded?: boolean;
    video?: File | { content: string, path: string }[] | string;
};


export { Document, Entity, Input };
