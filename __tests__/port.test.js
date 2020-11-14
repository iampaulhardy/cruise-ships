/* globals describe it expect */
const Port = require('../src/port.js');

describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it('can have a name', () => {
    const port = new Port('Southampton')
    expect(port.name).toBe('Southampton')
  })
});