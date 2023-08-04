# `name.*` Methods

## Overview

Dash Platform provides a unique naming system across it's network. The following methods serve as helper functions to abstract boilerplate code from application develoment.

## Methods

### register
```js
    import { name } from '@dash-incubator/dapp-sdk';

    let result = name.register(account, '[name]');
```

### search
```js
    import { name } from '@dash-incubator/dapp-sdk';

    let result = name.search(account, '[name]');
```

*The `account` variable refers to the value returned by `connection.create`. See `README.md` for more info.*