/* globals describe it expect */
const Port = require('../src/port.js');
const Itinerary = require('../src/Itinerary.js')
const Ship = require('../src/ship.js');

describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
    });
      describe('Ports can have a name and ships', () => {
        let port;
        let ship;
        let titanic;
        let queenMary;
        let blackPearl;
        beforeEach(() => {
          port = new Port('Dover');
          ship = jest.fn();
          titanic = jest.fn();
          queenMary = jest.fn();
          blackPearl = jest.fn();
        })

      it('can have a name', () => {
        expect(port.name).toBe('Dover')
      });

      it('can add a ship', () => {
        port.addShip(ship);
        expect(port.ships).toContain(ship);
      });

      it('can remove a ship', () => {
        port.addShip(titanic);
        port.addShip(queenMary);
        port.addShip(blackPearl);
        port.removeShip(titanic);
        port.removeShip(queenMary)
        expect(port.ships).toEqual([blackPearl]);
      });
    });
  });