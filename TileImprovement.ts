import { Built, IBuiltRegistry } from './Rules/Built';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Tile from '@civ-clone/core-world/Tile';
import DataObject, {
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';

export interface ITileImprovement extends IDataObject {
  tile(): Tile;
}

export class TileImprovement extends DataObject implements ITileImprovement {
  #tile: Tile;

  constructor(tile: Tile, ruleRegistry: RuleRegistry = ruleRegistryInstance) {
    super();

    this.#tile = tile;

    (ruleRegistry as IBuiltRegistry).process(Built, tile, this);
  }

  tile(): Tile {
    return this.#tile;
  }
}

export default TileImprovement;
