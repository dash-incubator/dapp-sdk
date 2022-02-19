import type { Document as AbstractDocument } from '@src/types';
import type { Entity as AbstractEntity } from '@entity/types';


interface Document extends AbstractDocument {
    content: string;
    parent?: string;
    path: string;
};

interface Entity extends AbstractEntity {
    data: Document;
    update: (input: Partial<Input>) => Promise<Entity>;
};

type Input = {
    content?: string;
    parent?: string;
    path?: string;
};


export type { Document, Entity, Input };
