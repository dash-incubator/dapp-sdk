import type { Entity } from '@entity/types';
import type { Object } from '@src/types';
import { entity, user } from '@src/index';


const factory = ({ defaults, definitions, locator, options }: { defaults?: Object, definitions: Object, locator: string, options?: Object }) => {
    defaults = defaults || {};
    options = options || {};

    return {
        definitions,
        methods: {
            create: async (input?: Object): Promise<Entity> => {
                return await ( entity.factory(defaults, options)[0] as Entity ).update(input || {});
            },

            delete: async (ids: string[] | string): Promise<any> => {
                return await user.document.delete(ids, locator);
            },
            get: async (query: { [key: string]: any } = {}): Promise<Entity[]> => {
                return entity.factory(await user.document.get(locator, query), options) as Entity[];
            },
            save: async (entities: Entity[] | Entity): Promise<Entity[]> => {
                return await entity.save(entities, locator, options) as Entity[];
            }
        }
    };
};


export default factory;
