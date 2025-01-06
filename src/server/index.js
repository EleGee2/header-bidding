const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const adSizes = require('./adSizes.json');

app.use(express.json());

app.post('/getFloorPrices', (req, res) => {
  const adUnitCodes = req.body.adUnits;
  const userAgent = req.headers['user-agent'];
  const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(userAgent);

  const floorPrices = {};

  adUnitCodes.forEach(code => {
    let basePrice = 0.1;

    let sizeData = adSizes[code]
    let sizeMultiplier = sizeData ? sizeData.multiplier : 1;

    let deviceMultiplier = 1;
    if (isMobile) {
      deviceMultiplier = 0.8;
    }

    basePrice = basePrice * sizeMultiplier * deviceMultiplier;

    floorPrices[code] = parseFloat(basePrice.toFixed(2));
  });

  res.json(floorPrices);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});