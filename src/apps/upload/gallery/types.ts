import type { Document as AbstractDocument } from '@src/types';
import type { Entity as AbstractEntity } from '@entity/types';


interface Document extends AbstractDocument {
    description?: string;
    encrypted: boolean;
    gallery: string[];
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


export type { Document, Entity, Input };
