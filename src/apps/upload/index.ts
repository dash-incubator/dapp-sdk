import { Object } from '@src/types';
import user from '@src/user'
import audio from './audio';
import image from './image';
import video from './video';


// 'contract' ID should be manually defined once platform is released on mainnet
let contract = '';


const register = async () => {
    await user.apps.get('sdk-upload', async (): Promise<Object | string> => {
        if (contract) {
            return contract;
        }

        return await user.contract.register(Object.assign({}, audio.definitions, image.definitions, video.definitions));
    });
};


export default {
    audio: audio.methods,
    image: image.methods,
    register,
    video: video.methods
};
