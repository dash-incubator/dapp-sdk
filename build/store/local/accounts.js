import { local } from "@esportsplus/web-storage";
export default (secret) => {
    return local({ name: 'accounts' }, secret);
};
