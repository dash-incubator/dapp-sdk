import { Data, Inputs, Entities, Object } from './types';
import { entity, storage, user } from '@src/index';


function filter(data: Object, { description, encrypt, keywords, name, secret, transcode }: Object): Object {
    if (description) {
        data.description = description;
    }

    if (typeof encrypt == 'boolean') {
        data.encrypted = encrypt;
    }

    if (keywords && keywords.length) {
        data.keywords = keywords.filter(Boolean);
    }

    if (name) {
        data.name = name;
    }

    if (secret) {
        data.secret = secret;
    }

    if (typeof transcode == 'boolean') {
        data.transcoded = transcode;
    }

    return data;
};

async function upload(data: Object, { audio, banner, compress, gallery, image, thumbnail, video }: Object): Promise<Object> {
    let options = {
            compress,
            encrypt: data.encrypted,
            secret: data.secret
        };

    data.ipfs = data.ipfs || {};

    if (audio) {
        data.ipfs.audio = await storage.ipfs.upload.data(audio, options);
    }

    if (banner) {
        data.ipfs.banner = await storage.ipfs.upload.image(banner, options);
    }

    if (gallery) {
        data.ipfs.gallery = await storage.ipfs.upload.images(Array.from(gallery), options);
    }
    else if (image) {
        data.ipfs.image = await storage.ipfs.upload.image(image, options);
    }

    if (thumbnail) {
        data.ipfs.thumbnail = await storage.ipfs.upload.image(thumbnail, options);
    }

    if (video) {
        data.ipfs.video = await storage.ipfs.upload.data(video, options);
    }

    return data;
};


const factory = (defaults: Object, locator: string): Object => {
    let options = {
            skip: ['encrypted'],
            update: async (data: Data, input: Partial<Inputs>): Promise<any> => {
                return await upload( filter(data, input), input );
            }
        };

    return {
        create: async (input?: Inputs): Promise<Entities> => {
            return await ( entity.factory(Object.assign({ encrypted: false }, defaults), options)[0] as Entities ).update(input || {});
        },

        delete: async (ids: string[] | string): Promise<any> => {
            return await user.document.delete(ids, locator);
        },
        get: async (query: { [key: string]: any } = {}): Promise<Entities[]> => {
            return entity.factory(await user.document.get(locator, query), options) as Entities[];
        },
        save: async (entities: Entities[] | Entities): Promise<Entities[]> => {
            return await entity.save(entities, locator, options) as Entities[];
        }
    };
}


export default { factory };
