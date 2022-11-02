import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Tile from '@civ-clone/core-world/Tile';
export interface ITileImprovement extends IDataObject {
  tile(): Tile;
}
export declare class TileImprovement
  extends DataObject
  implements ITileImprovement
{
  #private;
  constructor(tile: Tile, ruleRegistry?: RuleRegistry);
  tile(): Tile;
}
export default TileImprovement;
