export function displayFallbackAd(adUnitCode) {
  const adUnitElement = document.getElementById(adUnitCode);
  if (adUnitElement) {
    adUnitElement.innerHTML = "<img src='/public/fallback.jpg' alt='Fallback Ad'>";
  }
}