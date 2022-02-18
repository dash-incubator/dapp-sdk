import type { Document as AbstractDocument } from '@src/types';
import type { Entity as AbstractEntity } from '@entity/types';


interface Document extends AbstractDocument {
    audio: string;
    banner?: string;
    description?: string;
    encrypted: boolean;
    keywords?: string[];
    name?: string;
    secret?: string;
    thumbnail?: string;
    transcoded: boolean;
};

interface Entity extends AbstractEntity {
    data: Document;
    update: (input: Partial<Input>) => Promise<Entity>;
};

type Input = {
    audio?: File | { content: string, path: string }[] | string;
    banner?: File;
    compress?: boolean;
    description?: string;
    encrypt?: boolean;
    keywords?: string[];
    name?: string;
    secret?: string;
    thumbnail?: File;
    transcoded?: boolean;
};


export type { Document, Entity, Input };
