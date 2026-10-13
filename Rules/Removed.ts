import Rule from '@civ-clone/core-rule/Rule';
import Tile from '@civ-clone/core-world/Tile';
import TileImprovement from '../TileImprovement';

// A `TileImprovement` is taken off a `Tile` by something other than pillaging, such as pollution cleaned up.
export class Removed extends Rule<[Tile, TileImprovement], void> {}

export default Removed;
