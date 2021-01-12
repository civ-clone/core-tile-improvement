"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.TileImprovementRegistry = void 0;
const EntityRegistry_1 = require("@civ-clone/core-registry/EntityRegistry");
const TileImprovement_1 = require("./TileImprovement");
class TileImprovementRegistry extends EntityRegistry_1.EntityRegistry {
    constructor() {
        super(TileImprovement_1.default);
    }
    getByTile(tile) {
        return this.getBy('tile', tile);
    }
}
exports.TileImprovementRegistry = TileImprovementRegistry;
exports.instance = new TileImprovementRegistry();
exports.default = TileImprovementRegistry;
//# sourceMappingURL=TileImprovementRegistry.js.map