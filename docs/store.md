# `store.*` Methods

## TODO

[] Integrate 3rd party IPFS API's
[] Server/Indexer
[x] Local ( browser storage )

## Overview

DApps often require a mix of local and external storage. `store.local` provides a set of common stores utilized by various DApps. Each store saves data to the users browser storage ( IndexedDB - larger memory limit ).

## Methods

### store.local.accounts

This adapter provides a secure local storage option for saving wallet details in browser storage. This is useful when developing client side apps/extensions that allow users to login to their wallets without retyping their seed phrase on each use.

```js
import { store } from 'dapp-sdk';

let accounts = store.local.accounts('[secret - required]');

accounts.set('primary', {
    identity: '[identity]',
    mnemonic: '[mnemonic]
});
```

### store.local.apps

In order to interact with Dash Platform documents you must have a list of `contractId`'s in order to get/set/delete documents associated with the contract. These are public so there's no need to encrypt/decrypt the values before get/set.

```js
import { store } from 'dapp-sdk';

let apps = store.local.apps,
    contractId = apps.get('notes');
```

## Additional methods

Every `store.local.*` instance include the following methods

```ts
type Local<T> {
    all(): Promise<T>;
    clear(): Promise<void>;
    delete(...keys: (keyof T)[]): Promise<void>;
    filter(fn: Filter<T>): Promise<T>;
    get(key: keyof T): Promise<unknown>;
    only(...keys: (keyof T)[]): Promise<T>;
    replace(values: T): Promise<string[]>;
    set(key: keyof T, value: T[keyof T]): Promise<boolean>;
}
```