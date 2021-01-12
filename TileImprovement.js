"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _tile;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TileImprovement = void 0;
const Built_1 = require("./Rules/Built");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
class TileImprovement {
    constructor(tile, ruleRegistry = RuleRegistry_1.instance) {
        _tile.set(this, void 0);
        __classPrivateFieldSet(this, _tile, tile);
        ruleRegistry.process(Built_1.Built, tile, this);
    }
    tile() {
        return __classPrivateFieldGet(this, _tile);
    }
}
exports.TileImprovement = TileImprovement;
_tile = new WeakMap();
exports.default = TileImprovement;
//# sourceMappingURL=TileImprovement.js.map