"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.AvailableTileImprovementRegistry = void 0;
const ConstructorRegistry_1 = require("@civ-clone/core-registry/ConstructorRegistry");
const TileImprovement_1 = require("./TileImprovement");
/**
 * The tile improvement *classes* a ruleset offers, as
 * `AvailableTerrainFeatureRegistry` does for terrain features.
 *
 * `TileImprovementRegistry` holds the improvements that have been *built* —
 * instances, per tile. Nothing held the classes, which left them reachable only
 * through the `Available` rule: fine for deciding what a unit may build, and
 * not enough for anything that needs to enumerate them. Saving is the case that
 * exposed it, because a save records `Irrigation` and `Road` by name and
 * hydration had no way to turn either back into a class.
 */
class AvailableTileImprovementRegistry extends ConstructorRegistry_1.ConstructorRegistry {
    constructor() {
        super(TileImprovement_1.default);
    }
}
exports.AvailableTileImprovementRegistry = AvailableTileImprovementRegistry;
exports.instance = new AvailableTileImprovementRegistry();
exports.default = AvailableTileImprovementRegistry;
//# sourceMappingURL=AvailableTileImprovementRegistry.js.map