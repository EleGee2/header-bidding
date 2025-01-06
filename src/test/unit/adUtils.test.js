/** @jest-environment jsdom */
import { displayFallbackAd } from '../../utils/adUtils';

describe('Fallback Ads', () => {
  it('should display fallback ad when no bids are received', () => {
    document.body.innerHTML = '<div id="test-ad-unit"></div>'; // Set up a mock ad unit
    displayFallbackAd('test-ad-unit');
    expect(document.getElementById('test-ad-unit').innerHTML).toContain('<img');
  });

  it('should not throw error if ad unit is not found', () => {
    expect(() => displayFallbackAd('non-existent-ad-unit')).not.toThrow();
  });
});