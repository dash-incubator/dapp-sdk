import { Entity as AbstractEntity } from '@src/types';


type Document = {
    $id?: string;
    description?: string;
    encrypted: boolean;
    ipfs: {
        gallery?: string[];
        image?: string;
    };
    keywords?: string[];
    name?: string;
    secret?: string;
};

interface Entity extends AbstractEntity {
    data: Document;
    update: (input: Partial<Input>) => Promise<Entity>;
};

type Input = {
    compress?: boolean;
    description?: string;
    encrypt?: boolean;
    gallery?: FileList;
    image?: File;
    keywords?: string[];
    name?: string;
    secret?: string;
};


export { Document, Entity, Input };
