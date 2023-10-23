# `contract.*` Methods

## Overview

Dash Platform Contracts act as constraints/interfaces for all documents associated with them. The following methods serve as helper functions to abstract boilerplate code from application develoment.

## Methods

### get
```js
    import { contract } from 'dapp-sdk';

    // Contract document
    let result = contract.get(account, id);
```

### register
```js
    import { contract } from 'dapp-sdk';

    // Contract document
    let result = contract.register(account, definition);
```

- `definition` parameter accepts the contract definition schema required by Platform - (Contract Overview)[https://dashplatform.readme.io/docs/platform-protocol-reference-data-contract]

*The `account` variable refers to the value returned by `connection.create`. See `README.md` for more info.*