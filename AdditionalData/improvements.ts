import {
  TileImprovementRegistry,
  instance as tileImprovementRegistryInstance,
} from '../TileImprovementRegistry';
import AdditionalData from '@civ-clone/core-data-object/AdditionalData';
import Tile from '@civ-clone/core-world/Tile';

export const getAdditionalData = (
  tileImprovementRegistry: TileImprovementRegistry = tileImprovementRegistryInstance
) => [
  new AdditionalData(Tile, 'improvements', (tile: Tile) =>
    tileImprovementRegistry.getByTile(tile)
  ),
];

export default getAdditionalData;
