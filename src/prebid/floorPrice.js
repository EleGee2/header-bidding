export async function fetchFloorPrices(adUnits) {
  try {
    const response = await fetch('/getFloorPrices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ adUnits: adUnits.map(unit => unit.code) }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error ${response.status}: ${errorText}`);
    }

    const floorPrices = await response.json();
    return floorPrices;
  } catch (error) {
    console.error('Error fetching floor prices:', error);
    return {};
  }
}