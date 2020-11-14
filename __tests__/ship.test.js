/* globals describe it expect */
const Ship = require('../src/ship.js');

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    const ship = new Ship('Southampton');
    expect(ship.startingPoint). toBe('Southampton')
  });

  it('can set sail', () => {
    const ship = new Ship('Southampton');
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  })
});
  
