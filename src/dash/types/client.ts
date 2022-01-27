type Client = {
    connect(options: { [key: string]: any }): any;
    disconnect(): void;
    getApps(): { [key: string]: any };
    getWalletAccount(): Promise<{ [key: string]: any }>;

    platform: { [key: string]: any };
    wallet: { [key: string]: any };
};


export default Client;
