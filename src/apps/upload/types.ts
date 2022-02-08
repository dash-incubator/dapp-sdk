import * as Audio from './audio/types';
import * as Gallery from './gallery/types';
import * as Image from './image/types';
import * as Video from './video/types';


type Data = Audio.Entity['data'] | Gallery.Entity['data'] | Image.Entity['data'] | Video.Entity['data'];

type Documents = Audio.Document | Gallery.Document | Image.Document | Video.Document;

type Inputs = Audio.Input | Gallery.Input | Image.Input | Video.Input;

type Entities = Audio.Entity | Gallery.Entity | Image.Entity | Video.Entity;

type Object = {
    [key: string]: any
};


export { Data, Documents, Inputs, Entities, Object };
