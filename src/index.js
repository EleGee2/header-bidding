import adUnits from './prebid/adUnits.js';
import { fetchFloorPrices } from './prebid/floorPrice.js';
import { displayFallbackAd } from './utils/adUtils.js';
import './prebid/config.js';

pbjs.que.push(async function () {
  pbjs.addAdUnits(adUnits);

  const floorPrices = await fetchFloorPrices(adUnits);

  adUnits.forEach(adUnit => {
    if (floorPrices[adUnit.code]) {
      adUnit.bids.forEach(bid => {
        bid.floor = floorPrices[adUnit.code];
      });
    }
  });

  pbjs.requestBids({
    bidsBackHandler: function (bids) {
      if (bids && bids.length > 0) {
        pbjs.setTargetingForGPTAsync();
        googletag.cmd.push(function() {
          googletag.display('div-gpt-ad-1');
        });
      } else {
        displayFallbackAd('div-gpt-ad-1');
      }
    },
    timeout: 2000,
  });
});