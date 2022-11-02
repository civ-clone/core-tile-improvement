import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import Tile from '@civ-clone/core-world/Tile';
import TileImprovement from './TileImprovement';

export interface ITileImprovementRegistry
  extends IEntityRegistry<TileImprovement> {
  getByTile(tile: Tile): TileImprovement[];
}

export class TileImprovementRegistry
  extends EntityRegistry<TileImprovement>
  implements ITileImprovementRegistry
{
  constructor() {
    super(TileImprovement);
  }

  getByTile(tile: Tile): TileImprovement[] {
    return this.getBy('tile', tile);
  }
}

export const instance: TileImprovementRegistry = new TileImprovementRegistry();

export default TileImprovementRegistry;
