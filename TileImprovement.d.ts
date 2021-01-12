import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Tile from '@civ-clone/core-world/Tile';
export declare class TileImprovement {
  #private;
  constructor(tile: Tile, ruleRegistry?: RuleRegistry);
  tile(): Tile;
}
export default TileImprovement;
