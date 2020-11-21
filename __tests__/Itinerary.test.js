/* globals describe it expect */
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/port.js');

describe('Itinerary', () => {
  it('can be instantiated', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it('It can have ports', () => {
    const southampton = jest.fn();
    const calais = jest.fn();
    const dover = jest.fn();
    const itinerary = new Itinerary([southampton, calais, dover]);
    expect(itinerary.ports).toEqual([southampton, calais, dover]);
  });
});