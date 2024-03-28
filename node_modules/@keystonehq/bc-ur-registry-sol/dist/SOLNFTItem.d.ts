/// <reference types="node" />
import { DataItem, RegistryItem } from "@keystonehq/bc-ur-registry";
declare type NFTProps = {
    mintAddress: string;
    collectionName: string;
    name: string;
    mediaData: string;
};
export declare class SOLNFTItem extends RegistryItem {
    private name;
    private mintAddress;
    private collectionName;
    private mediaData;
    getRegistryType: () => import("@keystonehq/bc-ur-registry").RegistryType;
    constructor(args: NFTProps);
    getName: () => string;
    getMediaData: () => string;
    getMintAddress: () => string;
    getCollectionName: () => string;
    toDataItem: () => DataItem;
    static fromDataItem: (dataItem: DataItem) => SOLNFTItem;
    static fromCBOR: (_cborPayload: Buffer) => SOLNFTItem;
    static constructETHNFTItem(mintAddress: string, collectionName: string, name: string, mediaData: string): SOLNFTItem;
}
export {};
