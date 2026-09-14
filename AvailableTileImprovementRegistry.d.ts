import {
  ConstructorRegistry,
  IConstructorRegistry,
} from '@civ-clone/core-registry/ConstructorRegistry';
import TileImprovement from './TileImprovement';
export interface IAvailableTileImprovementRegistry
  extends IConstructorRegistry<TileImprovement> {}
/**
 * The tile improvement *classes* a ruleset offers, as
 * `AvailableTerrainFeatureRegistry` does for terrain features.
 *
 * `TileImprovementRegistry` holds the improvements that have been *built* —
 * instances, per tile. Nothing held the classes, which left them reachable only
 * through the `Available` rule: fine for deciding what a unit may build, and
 * not enough for anything that needs to enumerate them. Saving is the case that
 * exposed it, because a save records `Irrigation` and `Road` by name and
 * hydration had no way to turn either back into a class.
 */
export declare class AvailableTileImprovementRegistry
  extends ConstructorRegistry<TileImprovement>
  implements IAvailableTileImprovementRegistry
{
  constructor();
}
export declare const instance: AvailableTileImprovementRegistry;
export default AvailableTileImprovementRegistry;
