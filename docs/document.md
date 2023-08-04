# `document.*` Methods

## Overview

Dash Platform Documents contain all the data stored by Platform users. The following methods serve as helper functions to abstract boilerplate code from application develoment.

## Methods

### delete

Iterates through one or more documents to batch delete the documents from platform.

```js
    import { document } from '@dash-incubator/dapp-sdk';

    let result = document.register(account, documents);
```

- `documents` parameter accepts a single document or an array of documents

### get
```js
    import { document } from '@dash-incubator/dapp-sdk';

    let result = document.get(account, locator, query);
```

- `locator` parameter is used to locate the `contractId` associated with the document you are retrieving
- `query` parameter is passed to the platform document query method - [query syntax](https://dashplatform.readme.io/docs/reference-query-syntax)

### set

`set` acts as a general update/insert method for Platform documents. It will iterate through all documents, if an `$id` is found ( Platform's document key ) the document will be added to the batch update array, otherwise the document will be appended to the batch insert array.

Once the filtering is complete a single batch transaction will be submit to apply the necessary changes to the Platform documents.

```js
    import { document } from '@dash-incubator/dapp-sdk';

    let result = document.set(account, documents, locator);
```

- `documents` parameter accepts a single document or an array of documents
- `locator` parameter is used to locate the `contractId` associated with the documents you are updating

*The `account` variable refers to the value returned by `connection.create`. See `README.md` for more info.*