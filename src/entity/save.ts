import type { Entity } from '@entity/types';
import factory from './factory';
import user from '@src/user';


const save = async (entities: Entity[] | Entity, locator: string, { skip, update }: { skip?: string[], update?: Function } = {}): Promise<Entity[]> => {
    let documents = [],
        loop: Entity[] = Array.isArray(entities) ? entities : [entities];

    for (let i = 0, n = loop.length; i < n; i++) {
        let entity = loop[i];

        if (!entity) {
            continue;
        }

        documents.push( ( await entity.encrypt() ).data );
    }

    return factory(await user.document.save(documents, locator), { skip, update });
};


export default save;
