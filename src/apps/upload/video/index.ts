import definitions from './definitions';
import methods from '../methods';


export default {
    definitions,
    methods: methods.factory({
        defaults: {
            encrypted: false,
            transcoded: false
        },
        locator: 'sdk-upload.video',
        skip: ['encrypted', 'transcoded']
    })
};
