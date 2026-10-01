import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import Tile from '@civ-clone/core-world/Tile';
import TileImprovement from '../TileImprovement';
import TileImprovementRegistry from '../TileImprovementRegistry';
import { expect } from 'chai';

// `getByTile` only compares tiles by identity, so stand-ins will do.
const tile = (): Tile => ({} as Tile);

describe('TileImprovementRegistry', (): void => {
  it('should return the improvements on a tile, in the order they were registered', (): void => {
    const ruleRegistry = new RuleRegistry(),
      tileImprovementRegistry = new TileImprovementRegistry(),
      tileA = tile(),
      tileB = tile(),
      first = new TileImprovement(tileA, ruleRegistry),
      other = new TileImprovement(tileB, ruleRegistry),
      second = new TileImprovement(tileA, ruleRegistry);

    tileImprovementRegistry.register(first, other, second);

    expect(tileImprovementRegistry.getByTile(tileA)).to.deep.equal([
      first,
      second,
    ]);
    expect(tileImprovementRegistry.getByTile(tileB)).to.deep.equal([other]);
    expect(tileImprovementRegistry.getByTile(tile())).to.deep.equal([]);
  });

  it('should not return an improvement once it is unregistered', (): void => {
    const ruleRegistry = new RuleRegistry(),
      tileImprovementRegistry = new TileImprovementRegistry(),
      tileA = tile(),
      first = new TileImprovement(tileA, ruleRegistry),
      second = new TileImprovement(tileA, ruleRegistry);

    tileImprovementRegistry.register(first, second);
    tileImprovementRegistry.unregister(first);

    expect(tileImprovementRegistry.getByTile(tileA)).to.deep.equal([second]);

    tileImprovementRegistry.unregister(second);

    expect(tileImprovementRegistry.getByTile(tileA)).to.deep.equal([]);
  });

  it('should return a copy that the caller can change', (): void => {
    const ruleRegistry = new RuleRegistry(),
      tileImprovementRegistry = new TileImprovementRegistry(),
      tileA = tile(),
      improvement = new TileImprovement(tileA, ruleRegistry);

    tileImprovementRegistry.register(improvement);
    tileImprovementRegistry.getByTile(tileA).splice(0);

    expect(tileImprovementRegistry.getByTile(tileA)).to.deep.equal([
      improvement,
    ]);
  });
});
