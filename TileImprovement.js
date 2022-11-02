"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TileImprovement_tile;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TileImprovement = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Built_1 = require("./Rules/Built");
class TileImprovement extends DataObject_1.DataObject {
    constructor(tile, ruleRegistry = RuleRegistry_1.instance) {
        super();
        _TileImprovement_tile.set(this, void 0);
        __classPrivateFieldSet(this, _TileImprovement_tile, tile, "f");
        ruleRegistry.process(Built_1.default, tile, this);
    }
    tile() {
        return __classPrivateFieldGet(this, _TileImprovement_tile, "f");
    }
}
exports.TileImprovement = TileImprovement;
_TileImprovement_tile = new WeakMap();
exports.default = TileImprovement;
//# sourceMappingURL=TileImprovement.js.map