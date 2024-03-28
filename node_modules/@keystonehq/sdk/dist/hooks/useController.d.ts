/// <reference types="react" />
import { Play, Read } from "../types";
export declare const useController: () => [JSX.Element, {
    play: Play;
    read: Read;
    cameraReady: boolean;
}];
