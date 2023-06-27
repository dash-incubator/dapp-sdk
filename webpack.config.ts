import { config, entry } from '@esportsplus/webpack';


export default (env: { production?: string }) => {
    let production = env.production !== 'false';

    return config.web({
        entry: {
            js: {
                app: entry.js('src/index.ts')
            }
        },
        mode: production ? 'production': 'development',
        use: ({ web }) => {
            web.html();
        }
    });
};