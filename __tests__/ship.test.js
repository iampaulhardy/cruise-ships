/* globals describe it expect */
const Ship = require('../src/ship.js');
const Port = require('../src/port.js')

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    const ship = new Ship(Port);
    expect(ship.currentPort).toBe(Port)
  });

  it('can set sail', () => {
    const ship = new Ship(Port);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });

  it('can dock at a different port', () => {
    const southampton = new Port('Southampton');
    const ship = new Ship(southampton);
    const calais = new Port('Calais');
    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  });
});
  
