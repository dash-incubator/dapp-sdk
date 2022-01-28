import type { Document, Entity, Object } from '@dash/types';
import dot from '@esportsplus/dot';
import user from './user';


const factory = async (data: Object, { skip, update }: { skip: string[], update?: Function }): Promise<Entity> => {
    const entity: Entity = {
        data: Object.assign({ encrypted: false }, data),
        decrypt: async (secret?: string): Promise<Entity> => {
            if (!entity.encrypted) {
                return entity;
            }

            entity.data = await user.data.recursive.decrypt(entity.data, {
                secret: secret || (entity.data.secret ? await user.data.decrypt(entity.data.secret) : ''),
                skip
            });
            entity.encrypted = false;

            return entity;
        },
        delete: (key: string): Entity => {
            dot.set(entity.data, key, undefined);

            return entity;
        },
        encrypted: data.encrypted || false,
        encrypt: async (secret?: string): Promise<Entity> => {
            if (entity.encrypted) {
                return entity;
            }

            entity.data = await user.data.recursive.encrypt(entity.data, {
                secret: secret || (entity.data.secret || ''),
                skip: (skip || [])
            });
            entity.encrypted = true;

            return entity;
        },
        update: async (input: Object): Promise<Entity> => {
            await entity.decrypt();

            entity.data = update ? (await update(entity.data, input)) : Object.assign(entity.data, input);

            return entity;
        }
    };

    return entity;
};

const get = async (factory: (data: Object) => Promise<Entity>, documents: Document[] | Document): Promise<Entity[]> => {
    let entities = [],
        loop: Document[] = Array.isArray(documents) ? documents : [documents];

    for (let i = 0, n = loop.length; i < n; i++) {
        let data = loop[i];

        if (!data) {
            continue;
        }

        entities.push( await factory(data) );
    }

    return entities;
};

const save = async (factory: (data: Object) => Promise<Entity>, entities: Entity[] | Entity, locator: string): Promise<any> => {
    let documents = [],
        loop: Document[] = Array.isArray(entities) ? entities : [entities];

    for (let i = 0, n = loop.length; i < n; i++) {
        let entity = loop[i];

        if (!entity) {
            continue;
        }

        documents.push( ( await entity.encrypt() ).data );
    }

    return await get(factory, await user.document.save(documents, locator));
};


export default { factory, get, save };
