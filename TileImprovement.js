"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TileImprovement = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Built_1 = require("./Rules/Built");
class TileImprovement extends DataObject_1.DataObject {
    constructor(tile, ruleRegistry = RuleRegistry_1.instance) {
        super();
        this._tile = tile;
        ruleRegistry.process(Built_1.default, tile, this);
    }
    tile() {
        return this._tile;
    }
}
exports.TileImprovement = TileImprovement;
exports.default = TileImprovement;
//# sourceMappingURL=TileImprovement.js.map