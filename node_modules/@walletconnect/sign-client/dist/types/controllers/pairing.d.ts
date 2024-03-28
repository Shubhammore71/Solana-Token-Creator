import { Logger } from "pino";
import { Store } from "@walletconnect/core";
import { ICore, PairingTypes } from "@walletconnect/types";
export declare class Pairing extends Store<string, PairingTypes.Struct> {
    core: ICore;
    logger: Logger;
    constructor(core: ICore, logger: Logger);
}
//# sourceMappingURL=pairing.d.ts.map