/* globals describe it expect */
const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
  describe('Ship with ports and itinerary', () => {
    let dover;
    let calais;
    let itinerary;
    let ship;
    beforeEach(() => {
      dover = {removeShip: jest.fn(), addShip: jest.fn()};
      calais = {removeShip: jest.fn(), addShip: jest.fn()};
      itinerary = { ports: [dover, calais] };
      ship = new Ship(itinerary);
    });
     it('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
      expect(ship.currentPort).toBe(dover);
    });

    it('has a previous port', () => {
      expect(ship.previousPort).toBeFalsy();
    });

    it('can set sail', () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(dover.removeShip).toHaveBeenCalledWith(ship);
    });

    it('can dock at a different port', () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toBe(calais);
      expect(calais.addShip).toHaveBeenCalledWith(ship);
    });

    it('can\'t sail further than its itinerary', () => {
      ship.setSail();
      ship.dock();
      expect(() => ship.setSail()).toThrowError('End of itinerary reached')
    });

    it('gets added to port on instantiation', () => {
      expect(dover.addShip).toHaveBeenCalledWith(ship);
    });
  });
});   
