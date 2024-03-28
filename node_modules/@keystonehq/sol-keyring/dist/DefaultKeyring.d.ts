import { DefaultInteractionProvider } from "./DefaultInteractionProvider";
import { BaseKeyring } from "./BaseKeyring";
export declare class DefaultKeyring extends BaseKeyring {
    static type: string;
    static getEmptyKeyring(): DefaultKeyring;
    constructor();
    getInteraction: () => DefaultInteractionProvider;
}
