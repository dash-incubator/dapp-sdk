import { store } from '../index';
let vault = store.local.accounts('some password goes here');
vault.set('example', {
    identity: 'some identity',
    mnemonic: 'some mnemonic'
});
store.local.apps.set('example', {
    contractId: 'value'
});
