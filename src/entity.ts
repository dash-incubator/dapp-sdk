import type { Document, Entity, Object } from '@dash/types';
import dot from '@esportsplus/dot';
import user from './user';


const create = async (data: Object, { skip, update }: { skip: string[], update?: Function }): Promise<Entity> => {
    let entity: Entity = {
        data: {},
        decrypt: async (secret?: string): Promise<void> => {
            if (!entity.encrypted) {
                return;
            }

            entity.data = await user.data.recursive.decrypt(entity.data, {
                secret: secret || (entity.data.secret ? await user.data.decrypt(entity.data.secret) : ''),
                skip
            });
            entity.encrypted = false;
        },
        delete: (key: string): void => {
            dot.set(entity.data, key, undefined);
        },
        encrypted: false,
        encrypt: async (secret?: string): Promise<void> => {
            if (entity.encrypted) {
                return;
            }

            entity.data = await user.data.recursive.encrypt(entity.data, {
                secret: secret || (entity.data.secret || ''),
                skip: (skip || [])
            });
            entity.encrypted = true;
        },
        update: async (input: Object): Promise<void> => {
            await entity.decrypt();

            if (!update) {
                update = () => {
                    return Object.assign(entity.data, input);
                };
            }

            entity.data = await update(entity.data, input);
        }
    };

    if (Object.keys(data).length) {
        await entity.update(data);
    }

    return entity;
};

const get = async (create: (data: Object) => Promise<Entity>, documents: Document[]): Promise<Entity[]> => {
    let entities = [];

    for (let i = 0, n = documents.length; i < n; i++) {
        let data = documents[i];

        if (!data) {
            continue;
        }

        let entity = await create(data);

        if (entity.data.encrypted) {
            entity.encrypted = true;
        }

        entities.push(entity);
    }

    return entities;
};

const save = async (entities: Entity[], locator: string): Promise<any> => {
    let documents = [];

    for (let i = 0, n = entities.length; i < n; i++) {
        let entity = entities[i];

        if (!entity) {
            continue;
        }

        await entity.encrypt();

        documents.push( entity.data );
    }

    return await user.document.save(documents, locator);
};


export default { create, get, save };
