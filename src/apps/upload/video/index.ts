import definitions from './definitions';
import methods from '../methods';


export default {
    definitions,
    methods: methods.factory({ transcoded: false }, 'sdk-upload.video')
};
