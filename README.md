# DApp SDK Documentation


## Introduction

Welcome to the documentation for the DApp SDK (Software Development Kit) provided by Dash Incubator. This SDK is designed to simplify the integration and development of decentralized applications (DApps) on the Dash blockchain.

### NPM

To use the DApp SDK in your project, you can either download the source code from the [GitHub repository](https://github.com/dash-incubator/dapp-sdk) or install it via npm.

```sh
npm install @dash-incubator/dapp-sdk
```

## Initialization

Before you begin, you must establish a connection like this:

```js
import { connection } from '@dash-incubator/dapp-sdk';

let account;

(async ()=>{
    account = await connection.create({
        network: '[insert network]',
        wallet: {
            mnemonic: '[insert mnemonic]'
        }
    });
})();
```

The result of `connection.create`` contains all the essential details necessary for the rest of the library to engage with Dash Platform seamlessly.

## Important

Interaction with this repo will require at least a beginner level of understanding in Dash Platform. If you're unfamiliar with the features/terminology used within Dash Platform take a quick look around the [Dash Platform Docs](https://dashplatform.readme.io/docs)