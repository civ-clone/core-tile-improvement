import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
import Tile from '@civ-clone/core-world/Tile';
import TileImprovement from '../TileImprovement';

type BuiltArgs = [Tile, TileImprovement];

export class Built extends Rule<BuiltArgs, void> {}

export default Built;

export interface IBuiltRegistry extends IRuleRegistry<Built, BuiltArgs, void> {}
