import { IConstructor } from '@civ-clone/core-registry/Registry';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Player from '@civ-clone/core-player/Player';
import Rule from '@civ-clone/core-rule/Rule';
import Tile from '@civ-clone/core-world/Tile';
import TileImprovement from '../TileImprovement';

export class Available extends Rule<
  [Tile, IConstructor<TileImprovement>, Player],
  void
> {}

export default Available;

export interface IAvailableRegistry
  extends IRuleRegistry<
    Available,
    [Tile, IConstructor<TileImprovement>, Player],
    void
  > {}
