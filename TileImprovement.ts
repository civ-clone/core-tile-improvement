import { Built, IBuiltRegistry } from './Rules/Built';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Tile from '@civ-clone/core-world/Tile';

export class TileImprovement {
  #tile: Tile;

  constructor(tile: Tile, ruleRegistry: RuleRegistry = ruleRegistryInstance) {
    this.#tile = tile;

    (ruleRegistry as IBuiltRegistry).process(Built, tile, this);
  }

  tile(): Tile {
    return this.#tile;
  }
}

export default TileImprovement;
