import { Entity as AbstractEntity } from '@entity/types';


type Document = {
    $id?: string;
    description?: string;
    encrypted: boolean;
    ipfs: {
        gallery: string[];
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
    keywords?: string[];
    name?: string;
    secret?: string;
};


export { Document, Entity, Input };
