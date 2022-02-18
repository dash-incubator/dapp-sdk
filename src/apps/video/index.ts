import type { Document, Input } from './types';
import { entity } from '@src/index';
import definitions from './definitions';
import factory from '@apps/factory';


export default factory({
    defaults: { encrypted: false, transcoded: false },
    definitions,
    locator: 'sdk.video',
    options: {
        skip: ['encrypted', 'transcoded'],
        update: async (data: Document, input: Partial<Input>): Promise<any> => {
            return await entity.update(data, input, definitions.video.properties, {
                encrypt: 'encrypted'
            });
        }
    }
});
