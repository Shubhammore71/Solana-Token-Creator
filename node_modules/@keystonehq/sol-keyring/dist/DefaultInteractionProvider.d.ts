import { SolSignature, SolSignRequest } from "@keystonehq/bc-ur-registry-sol";
import { InteractionProvider } from "./InteractionProvider";
import { CryptoMultiAccounts } from "@keystonehq/bc-ur-registry";
export declare class DefaultInteractionProvider implements InteractionProvider {
    private static instance;
    private keystoneSDK;
    constructor();
    readCryptoMultiAccounts: () => Promise<CryptoMultiAccounts>;
    requestSignature: (solSignRequest: SolSignRequest, requestTitle?: string, requestDescription?: string) => Promise<SolSignature>;
}
