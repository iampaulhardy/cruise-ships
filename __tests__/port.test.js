/* globals describe it expect */
const Port = require('../src/port.js');
const Itinerary = require('../src/Itinerary.js')
const Ship = require('../src/ship.js');

describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it('can have a name', () => {
    const port = new Port('Southampton')
    expect(port.name).toBe('Southampton')
  });

  it('can add a ship', () => {
    const port = new Port ('Dover');
    const ship = {};
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });

  it('can remove a ship', () => {
    const port = new Port ('Rotterdam');
    const titanic = {};
    const queenMary = {};
    const blackPearl = {};
    port.addShip(titanic);
    port.addShip(queenMary);
    port.addShip(blackPearl);
    port.removeShip(titanic);
    port.removeShip(queenMary)
    expect(port.ships).toEqual([blackPearl]);
  });
});