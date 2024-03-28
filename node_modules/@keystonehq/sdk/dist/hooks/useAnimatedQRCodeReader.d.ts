/// <reference types="react" />
import { Read } from "../types";
export interface URQRCodeData {
    total: number;
    index: number;
    data: string;
}
export declare const useAnimatedQRCodeReader: () => [JSX.Element, {
    read: Read;
    cameraReady: boolean;
}];
