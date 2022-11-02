import { IConstructor } from '@civ-clone/core-registry/Registry';
import Rule from '@civ-clone/core-rule/Rule';
import Terrain from '@civ-clone/core-terrain/Terrain';
import TileImprovement from '../TileImprovement';
export declare class Cost extends Rule<
  [IConstructor<TileImprovement>, Terrain],
  number
> {}
export default Cost;
