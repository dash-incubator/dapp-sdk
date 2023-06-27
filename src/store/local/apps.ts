import { local } from "@esportsplus/web-storage";


export default local< Record<PropertyKey, { contractId: string }> >({ name: 'apps' });