import type { Document as AbstractDocument } from '@src/types';
import type { Entity as AbstractEntity } from '@entity/types';


interface Document extends AbstractDocument {
    banner?: string;
    description?: string;
    encrypted: boolean;
    keywords?: string[];
    name?: string;
    secret?: string;
    thumbnail?: string;
    transcoded: boolean;
    video: string;
};

interface Entity extends AbstractEntity {
    data: Document;
    update: (input: Partial<Input>) => Promise<Entity>;
};

type Input = {
    banner?: File;
    compress?: boolean;
    description?: string;
    encrypt?: boolean;
    keywords?: string[];
    name?: string;
    secret?: string;
    thumbnail?: File;
    transcoded?: boolean;
    video?: File | { content: string, path: string }[] | string;
};


export type { Document, Entity, Input };
