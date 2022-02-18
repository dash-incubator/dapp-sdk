import type { Document, Input } from './types';
import { entity } from '@src/index';
import definitions from './definitions';
import factory from '@apps/factory';


export default factory({
    defaults: { encrypted: false },
    definitions,
    locator: 'sdk.gallery',
    options: {
        skip: ['encrypted'],
        update: async (data: Document, input: Partial<Input>): Promise<any> => {
            return await entity.update(data, input, definitions.gallery.properties, {
                encrypt: 'encrypted'
            });
        }
    }
});
