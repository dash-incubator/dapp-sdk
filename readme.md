# Dash DApp SDK

Wrapper for [dashevo's](https://github.com/dashevo) [dash](https://github.com/dashevo/js-dash-sdk#readme) npm package.

DApp projects require the same functions to interact with dash platform contracts, documents, and identities. Instead of sharing function between each project I bundled everything into a set of general utilities that can be used across any Dash Dapp.

## Usage

A Dash Platform Contract + Identity must be created before Documents can be created, updated, or deleted. Setup functions should be run at the start of each application.

The following example displays the setup in a browser environment. `localStorage` defines the method ( @see type constant below ) used to save the contract id, identity id, and mnemonic for further use throughout the application.

`/storage/` contains options to store `credentials` in NodeJS environment, LocalStorage, or in memory ( useful for short lived/one off utilities ).

## Setup

```
const dash = require('dash');
const type = 'localStorage';

async function setup(contract, contractDefinitions, identity, mnemonic) {
    let config = await dash.config[type].set(contract, contractDefinitions, identity, mnemonic);

    if (!config.contract || !config.identity) {
        setTimeout(() => {
            setup(config.contract, config.contractDefinitions, config.identity, config.mnemonic);
        }, (60 * 1000));
    }
    else {
        // Do something with `config`
        // config = {
        //     contract: 'registered contract id',
        //     contractDefinitions,
        //     identity: 'registered identity id',
        //     mnemonic: 'mnemonic provided during setup'
        // }
    }
}

setup(contract, contractDefinitions, identity, mnemonic);
```

[*`contractDefinitions`*](https://dashplatform.readme.io/docs/tutorial-register-a-data-contract#defining-contract-documents)

## Browser Usage

Install this repo as a npm package in your project. Use `webpack.javascript.config.js` as the webpack config file to bundle your browser friendly JS. If you maintain your own webpack config file copy the `NodePolyfillPlugin` and `resolve` options in the webpack config.
