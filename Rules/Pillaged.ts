import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
import Tile from '@civ-clone/core-world/Tile';
import TileImprovement from '../TileImprovement';

export class Pillaged extends Rule<[Tile, TileImprovement], void> {}

export default Pillaged;

export interface IPillagedRegistry
  extends IRuleRegistry<Pillaged, [Tile, TileImprovement], void> {}
