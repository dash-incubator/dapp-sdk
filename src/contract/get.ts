import { Connection, Contract } from "~/types";


export default async ({ client }: Connection, id: string): Promise<Contract> => {
    return await client.platform.contracts.get(id)
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};
