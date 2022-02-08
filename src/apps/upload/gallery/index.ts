import definitions from './definitions';
import methods from '../methods';


export default {
    definitions,
    methods: methods.factory({
        defaults: {
            encrypted: false
        },
        locator: 'sdk-upload.gallery',
        skip: ['encrypted']
    })
};
