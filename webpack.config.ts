import { config, entry } from '@esportsplus/webpack';


export default (env: { production?: string }) => {
    let production = env.production !== 'false';

    return config.web({
        entry: {
            js: {
                app: entry.js('storage/sandbox/index.ts')
            }
        },
        mode: production ? 'production': 'development',
        output: {
            path: 'storage/sandbox/build'
        },
        use: ({ web }) => {
            web.html();
        }
    });
};