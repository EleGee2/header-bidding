import pbjs from 'prebid.js';

pbjs.que.push(function () {
  pbjs.setConfig({
    debug: true,
    priceGranularity: 'medium',
    currency: {
      adServerCurrency: 'USD',
    },
    cache: {
      url: '//prebid.adnxs.com/pbc/v1/cache',
    },
  });
});