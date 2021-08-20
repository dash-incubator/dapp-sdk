import client from '../client';


const create = async () => {
    return client.connect({
        wallet: { mnemonic: null, offlineMode: true }
    });
};


export default create;
