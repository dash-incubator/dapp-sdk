import { Account, Client, PlatformProtocol } from 'dash';
import instance from '~/connection/instance';


type Account = typeof Account.prototype;

type Client = typeof Client.prototype;

type Connection = Awaited<ReturnType<typeof instance>>;

type Contract = typeof PlatformProtocol.DataContract.prototype;

type Definition = Record<PropertyKey, any>;

type Document = typeof PlatformProtocol.Document.prototype & {
    $id?: string;
    data: Record<PropertyKey, any>;
};

type Documents = Document[];

type Identity = typeof PlatformProtocol.Identity.prototype;

type Query = Record<PropertyKey, any>;

type Response = {
    toJSON(): Record<PropertyKey, any>;
    transitions?: Documents;
};


export type { Account, Client, Connection, Contract, Definition, Document, Documents, Identity, Query, Response };
