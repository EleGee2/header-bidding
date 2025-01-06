# Header Bidding Example with Prebid.js

This is a sample project demonstrating a basic header bidding implementation using Prebid.js. It includes:

* Client-side Prebid.js configuration for ad units and bidders.
* Server-side (simulated) logic for dynamic floor pricing.
* Lazy-loaded ads for better performance.
* Unit tests for the core components.
* CI/CD pipeline for automated deployment.

## Setup:

1. Clone the repository: `git clone https://github.com/your-username/header-bidding-example.git`
2. Install dependencies: `npm install`
3. (Optional) Replace the server-side logic in `src/prebid/floorPrice.js` with your actual implementation for calculating dynamic floor prices.

## Running Tests:

```bash
npm test