const adUnits = [
    {
      code: 'div-gpt-ad-1',
      mediaTypes: {
        banner: {
          sizes: [[728, 90]],
        },
      },
      bids: [
        {
          bidder: 'appnexus',
          params: {
            placementId: '1234567',
          },
        },
      ],
    },
    {
        code: 'div-gpt-ad-2',
        mediaTypes: {
          banner: {
            sizes: [[300, 250]],
          },
        },
        bids: [
          {
            bidder: 'rubicon',
            params: {
              accountId: '7654321',
              siteId: '9876543',
              zoneId: '4321098',
            },
          },
        ],
      },
  ];

  export default adUnits;