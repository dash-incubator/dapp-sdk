let storage = localStorage;


const clear = () => {
    storage.clear();
};

const read = (key) => {
    let value = storage.getItem(key);

    if (typeof value !== 'string' || !value.startsWith('{')) {
        value = '{}';
    }

    return JSON.parse(value);
};

const save = (key, value = {}) => {
    storage.setItem(key, JSON.stringify(value));
};


export default { clear, read, save };
