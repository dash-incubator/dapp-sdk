# `data.*` Methods

## Overview

Data encryption is useful for protecting private or sensitive information. We've provided methods to easily decrypt/encrypt values using your wallet or an optional `secret` value passed through each method.

## Methods

### decrypt
```js
    import { data } from 'dapp-sdk';

    let result = data.decrypt(account, '[value to decrypt]', /** secret ( optional ) **/);
```

### encrypt
```js
    import { data } from 'dapp-sdk';

    let result = data.encrypt(account, '[value to encrypt]', /** secret ( optional ) **/);
```

*The `account` variable refers to the value returned by `connection.create`. See `README.md` for more info.*