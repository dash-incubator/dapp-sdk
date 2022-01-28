import { Entity as DEntity } from '@dash/types';


type Document = {
    $id?: string;
    description?: string;
    encrypted: boolean;
    ipfs: {
        audio: string;
        banner?: string;
        thumbnail?: string;
    };
    keywords?: string[];
    name?: string;
    secret?: string;
    transcoded: boolean;
};

interface Entity extends DEntity {
    data: Document;
    update: (input: Partial<Input>) => Promise<Entity>;
};

type Input = {
    audio?: File | { content: string, path: string }[] | string;
    banner?: File;
    compress?: boolean;
    description?: string;
    encrypted?: boolean;
    keywords?: string[];
    name?: string;
    secret?: string;
    thumbnail?: File;
    transcoded?: boolean;
};


export { Document, Entity, Input };
