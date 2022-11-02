import Rule from '@civ-clone/core-rule/Rule';
import Tile from '@civ-clone/core-world/Tile';
import TileImprovement from '../TileImprovement';

export class Built extends Rule<[Tile, TileImprovement], void> {}

export default Built;
