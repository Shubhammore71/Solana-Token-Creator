import { Play, Read } from "./types";
export declare const setupSdk: (r: Read, p: Play, status: boolean) => void;
declare const sdk: {
    bootstrap: () => void;
    getSdk: () => {
        read: Read;
        play: Play;
        cameraReady: boolean;
    };
};
export default sdk;
