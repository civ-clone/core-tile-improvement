import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
import Tile from '@civ-clone/core-world/Tile';
import TileImprovement from '../TileImprovement';
export declare class Added extends Rule<[Tile, TileImprovement], void> {}
export default Added;
export interface IAddedRegistry
  extends IRuleRegistry<Added, [Tile, TileImprovement], void> {}
