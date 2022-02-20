import type { Entity } from '@entity/types';
import type { Object } from '@src/types';
import dot from '@esportsplus/dot';
import user from '@src/user';


const factory = (documents: Object[] | Object = {}, { skip, update }: { skip?: string[], update?: Function } = {}): Entity[] => {
    let entities = [],
        loop = Array.isArray(documents) ? documents : [documents];

    if (!skip) {
        skip = [];
    }

    for (let i = 0, n = loop.length; i < n; i++) {
        let data = loop[i] || {},
            entity: Entity = {
                data,
                decrypt: async (secret?: string): Promise<Entity> => {
                    if (!entity.encrypted || !entity.data.encrypted) {
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
                    if (entity.encrypted || !entity.data.encrypted) {
                        return entity;
                    }

                    entity.data = await user.data.recursive.encrypt(entity.data, {
                        secret: secret || (entity.data.secret || ''),
                        skip
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

        entities.push( entity );
    }

    return entities;
};


export default factory;
