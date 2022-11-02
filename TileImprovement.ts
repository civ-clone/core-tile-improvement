import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Built from './Rules/Built';
import Tile from '@civ-clone/core-world/Tile';

export interface ITileImprovement extends IDataObject {
  tile(): Tile;
}

export class TileImprovement extends DataObject implements ITileImprovement {
  #tile: Tile;

  constructor(tile: Tile, ruleRegistry: RuleRegistry = ruleRegistryInstance) {
    super();

    this.#tile = tile;

    ruleRegistry.process(Built, tile, this);
  }

  tile(): Tile {
    return this.#tile;
  }
}

export default TileImprovement;
