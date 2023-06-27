import { local } from "@esportsplus/web-storage";


export default (secret: string) => {
    return local< Record<PropertyKey, { identity: string; mnemonic: string; }> >({ name: 'accounts' }, secret);
};