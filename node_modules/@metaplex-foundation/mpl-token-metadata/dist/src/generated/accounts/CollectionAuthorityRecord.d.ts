/// <reference types="node" />
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import * as beetSolana from '@metaplex-foundation/beet-solana';
import { Key } from '../types/Key';
export declare type CollectionAuthorityRecordArgs = {
    key: Key;
    bump: number;
};
export declare class CollectionAuthorityRecord implements CollectionAuthorityRecordArgs {
    readonly key: Key;
    readonly bump: number;
    private constructor();
    static fromArgs(args: CollectionAuthorityRecordArgs): CollectionAuthorityRecord;
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [CollectionAuthorityRecord, number];
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey): Promise<CollectionAuthorityRecord>;
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<{
        key: any;
        bump: any;
    }>;
    static deserialize(buf: Buffer, offset?: number): [CollectionAuthorityRecord, number];
    serialize(): [Buffer, number];
    static get byteSize(): number;
    static getMinimumBalanceForRentExemption(connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    static hasCorrectByteSize(buf: Buffer, offset?: number): boolean;
    pretty(): {
        key: string;
        bump: number;
    };
}
export declare const collectionAuthorityRecordBeet: beet.BeetStruct<CollectionAuthorityRecord, CollectionAuthorityRecordArgs>;
