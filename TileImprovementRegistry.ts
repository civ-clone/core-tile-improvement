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
  // An improvement's tile is fixed for its lifetime (building one registers it,
  // pillaging unregisters it), so the key cannot go stale under a live
  // registration and needs no `reindex`. Movement-cost rules ask for a tile's
  // improvements on every step a unit or a path search considers: by turn 250
  // that was over a million scans of a registry holding hundreds of entries.
  private _byTile = this.index(
    (tileImprovement: TileImprovement): Tile => tileImprovement.tile()
  );

  constructor() {
    super(TileImprovement);
  }

  getByTile(tile: Tile): TileImprovement[] {
    return this._byTile.get(tile);
  }
}

export const instance: TileImprovementRegistry = new TileImprovementRegistry();

export default TileImprovementRegistry;
