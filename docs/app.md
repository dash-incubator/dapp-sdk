# `app.*` Methods

## Usage

The `app` directory contains pre deployed platform contracts available for all DApps. Feel free to use the existing services or upgrade and deploy better versions.

## Methods

The methods across each app follow the same structure as the document helper functions in the `document` directory. The data included in each document depends on the app in use.

### delete

```js
    import { app } from '@dash-incubator/dapp-sdk';

    let result = app['[name]'].delete(account, documents);
```

- @see `document.md` for more info

### get
```js
    import { app } from '@dash-incubator/dapp-sdk';

    let result = app['[name]'].get(account, query);
```

- @see `document.md` for more info

### set

```js
    import { app } from '@dash-incubator/dapp-sdk';

    let result = app['[name]'].set(account, documents);
```

- @see `document.md` for more info

*The `account` variable refers to the value returned by `connection.create`. See `README.md` for more info.*

## App document data

Platform documents follow (JSON Schema)[https://json-schema.org/understanding-json-schema/] format. If your unfamiliar with contract definitions or contracts in general take a look at (Contract docs)[https://dashplatform.readme.io/docs/platform-protocol-reference-data-contract#data-contract-definitions].

`contracts.ts` file within each app describes the document data interface of each app.