"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.TileImprovementRegistry = void 0;
const EntityRegistry_1 = require("@civ-clone/core-registry/EntityRegistry");
const TileImprovement_1 = require("./TileImprovement");
class TileImprovementRegistry extends EntityRegistry_1.EntityRegistry {
    constructor() {
        super(TileImprovement_1.default);
        // An improvement's tile is fixed for its lifetime (building one registers it,
        // pillaging unregisters it), so the key cannot go stale under a live
        // registration and needs no `reindex`. Movement-cost rules ask for a tile's
        // improvements on every step a unit or a path search considers: by turn 250
        // that was over a million scans of a registry holding hundreds of entries.
        this._byTile = this.index((tileImprovement) => tileImprovement.tile());
    }
    getByTile(tile) {
        return this._byTile.get(tile);
    }
}
exports.TileImprovementRegistry = TileImprovementRegistry;
exports.instance = new TileImprovementRegistry();
exports.default = TileImprovementRegistry;
//# sourceMappingURL=TileImprovementRegistry.js.map