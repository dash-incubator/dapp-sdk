# `identity.*` Methods

## Overview

In order to interact with Dash Platform every wallet must register a unique identity ( similar to a SSN ). The following methods serve as helper functions to abstract boilerplate code from application develoment.

## Methods

### get
```js
    import { identity } from '@dash-incubator/dapp-sdk';

    // Identity document
    let result = identity.get(account, /** id ( optional ) **/);
```

If an `id` is passed the function will fetch the identity from platform. Otherwise it will lookup all identities associated with the mnemonic and return the first registered identity or undefined if none exist.

### register
```js
    import { identity } from '@dash-incubator/dapp-sdk';

    // Identity document
    let result = identity.register(account);
```

### topup

Identities must contain a small amount of Dash to save data on Platform. This method acts like a deposit function for your Dash identity.

```js
    import { identity } from '@dash-incubator/dapp-sdk';

    // Identity documents
    let result = identity.topup(account, '[identity id]', '[amount in dash]');
```

*The `account` variable refers to the value returned by `connection.create`. See `README.md` for more info.*