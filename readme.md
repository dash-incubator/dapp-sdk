# Dash dApp SDK
Wrapper for [dashevo's](https://github.com/dashevo) [dash](https://github.com/dashevo/js-dash-sdk#readme) npm package.

DApp projects require the same functions to interact with dash platform contracts, documents, and identities. Instead of sharing function between each project I bundled everything into a set of general utilities that can be used across any Dash DApp.

## Usage
MetaMask restricts access to eth wallets to prevent DApps from hijacking the contents of the wallet in use. `dapp-sdk` provides similar functionality. Once the connection to the Dash network is made all interaction with the connected client is managed through the `dapp-sdk` package. Without direct access to the Dash client DApps can't request mnemonic or other sensitive information without the users permission.

As of 8/27/2021 this package does not include an extension. An extension or PWA installed on a web enabled device ( likely phone ) will provide the additional software required to bring full MetaMask like functionality to the Dash ecosystem.

Current usage of this package requires initialization of the Dash Client. This would not be required once the extension/PWA is complete.

```
import { config, user } from '@dash-incubator/dapp-sdk';

const init = async () => {
    config.useLocalStorage();

    // This step can be skipped in dapps once a metamask like
    // service is running for Dash.
    await user.init();

    let wallet = await user.wallet.read();

    // Can be skipped if the DApp doesn't need to register apps, etc.
    if (wallet.balance.confirmed > 0) {
        // Register required apps, etc.
    }
    else {
        setTimeout(init, (1000 * 45));
    }
};
```

Once wallet is initialized all Dash client interaction is done through the `user` variable.

### `user.contract.register(contractDefinitions)`
Accepts Dash platform [contract schema](https://dashplatform.readme.io/docs/explanation-platform-protocol-data-contract#example-contract), returns Dash platform registration output

### `user.document.delete(documents)`
Accepts a list of documents to delete

### `user.document.read(locator, query)`
`locator` accepts a Dash platform record locator
`query` accepts a Dash platform query object

### `user.document.save(documents, locator)`
`documents` accepts a list of documents. If document data includes an `id` field it will attempt to update the document data, otherwise a new document will be created with the supplied data.
`locator` accepts a Dash platform record locator

### `user.identity.get()`
Returns the first identity found for the wallet, otherwise creates a new identity.

### `user.name.read(name)`
Lookup Dash platform name

### `user.name.register(name)`
Registers new Dash platform name

----

## TODO: If there's room for the following tasks replace the features in legacy directory
- Replace config with direct reads from indexedDB
- Replace storage implementation entirely
- Remove dot.ts ( conflicts with the whole point of typescript )
- Integrate popular IPFS service provider API's
  - DCG will eventually add IPFS to platform, until then we need a decentralized storage solution
- Use an input validation package to return user friendly errors instead of throwing errors during document submissions
  - Platform currently just throws an exception when input is invalid
  - Exceptions kill the application ( they are blocking in JS meaning the entire app will just break if you don't catch the exception )
  - If an input validation package is used, user friendly errors can be shown to users ( ex: username must contain x, y, z )