"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdditionalData = void 0;
const TileImprovementRegistry_1 = require("../TileImprovementRegistry");
const AdditionalData_1 = require("@civ-clone/core-data-object/AdditionalData");
const Tile_1 = require("@civ-clone/core-world/Tile");
const getAdditionalData = (tileImprovementRegistry = TileImprovementRegistry_1.instance) => [
    new AdditionalData_1.default(Tile_1.default, 'improvements', (tile) => tileImprovementRegistry.getByTile(tile)),
];
exports.getAdditionalData = getAdditionalData;
exports.default = exports.getAdditionalData;
//# sourceMappingURL=improvements.js.map