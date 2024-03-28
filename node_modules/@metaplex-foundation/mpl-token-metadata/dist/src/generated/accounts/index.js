"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountProviders = void 0;
__exportStar(require("./CollectionAuthorityRecord"), exports);
__exportStar(require("./Edition"), exports);
__exportStar(require("./EditionMarker"), exports);
__exportStar(require("./MasterEditionV1"), exports);
__exportStar(require("./MasterEditionV2"), exports);
__exportStar(require("./Metadata"), exports);
__exportStar(require("./ReservationListV1"), exports);
__exportStar(require("./ReservationListV2"), exports);
__exportStar(require("./UseAuthorityRecord"), exports);
const UseAuthorityRecord_1 = require("./UseAuthorityRecord");
const CollectionAuthorityRecord_1 = require("./CollectionAuthorityRecord");
const Metadata_1 = require("./Metadata");
const MasterEditionV2_1 = require("./MasterEditionV2");
const MasterEditionV1_1 = require("./MasterEditionV1");
const Edition_1 = require("./Edition");
const ReservationListV2_1 = require("./ReservationListV2");
const ReservationListV1_1 = require("./ReservationListV1");
const EditionMarker_1 = require("./EditionMarker");
exports.accountProviders = {
    UseAuthorityRecord: UseAuthorityRecord_1.UseAuthorityRecord,
    CollectionAuthorityRecord: CollectionAuthorityRecord_1.CollectionAuthorityRecord,
    Metadata: Metadata_1.Metadata,
    MasterEditionV2: MasterEditionV2_1.MasterEditionV2,
    MasterEditionV1: MasterEditionV1_1.MasterEditionV1,
    Edition: Edition_1.Edition,
    ReservationListV2: ReservationListV2_1.ReservationListV2,
    ReservationListV1: ReservationListV1_1.ReservationListV1,
    EditionMarker: EditionMarker_1.EditionMarker,
};
//# sourceMappingURL=index.js.map