import { fetchFloorPrices } from '../../prebid/floorPrice';
/** @jest-environment jsdom */

global.fetch = jest.fn((url, options) => {
    const adUnits = JSON.parse(options.body).adUnits;
    let response = {
        ok: true,
        json: () => Promise.resolve({})
    }
    if(adUnits.includes('div-gpt-ad-1')){
        response = {
            ok: true,
            json: () => Promise.resolve({ 'div-gpt-ad-1': 1.6 }),
        }
    }
    return Promise.resolve(response)
});

describe('fetchFloorPrices', () => {
  it('should fetch floor prices successfully', async () => {
    const adUnits = [{ code: 'div-gpt-ad-1' }];
    const floorPrices = await fetchFloorPrices(adUnits);
    expect(floorPrices['div-gpt-ad-1']).toBe(1.6);
  });

  it('should handle fetch errors', async () => {
    global.fetch = jest.fn(() => Promise.reject('API is down'));
    const adUnits = [{ code: 'div-gpt-ad-1' }];
    const floorPrices = await fetchFloorPrices(adUnits);
    expect(floorPrices).toEqual({});
  });
});