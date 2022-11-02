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
export declare class TileImprovementRegistry
  extends EntityRegistry<TileImprovement>
  implements ITileImprovementRegistry
{
  constructor();
  getByTile(tile: Tile): TileImprovement[];
}
export declare const instance: TileImprovementRegistry;
export default TileImprovementRegistry;
