import { IConstructor } from '@civ-clone/core-registry/Registry';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
import Terrain from '@civ-clone/core-terrain/Terrain';
import TileImprovement from '../TileImprovement';

export class Cost extends Rule<
  [IConstructor<TileImprovement>, Terrain],
  number
> {}

export default Cost;

export interface ICostRegistry
  extends IRuleRegistry<
    Cost,
    [IConstructor<TileImprovement>, Terrain],
    number
  > {}
