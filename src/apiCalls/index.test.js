import * as api from './index';

describe('getTypes', () => {
  it('should call getTypes with the right params', () => {
    const pokemonType = [{id: 1, name: 'fighting'}]

    window.fetch = jest.fn().mockImplementation(
      () => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({types: pokemonType})
      })
    )

    api.getTypes();

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/types')
  });

  it('should call an error on failure', () => {
    window.fetch = jest.fn().mockImplementation(
      () => Promise.rejects({
        status: 500
      })
    )
    const expected = new Error('unable to get pokes');
    expect(api.getTypes()).rejects.toEqual(expected);
  })
})
