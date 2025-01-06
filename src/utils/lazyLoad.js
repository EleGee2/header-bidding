export function lazyLoadAds(adUnit) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                window.pbjs.que.push(() => {
                    pbjs.requestBids({
                        adUnits: [adUnit],
                        bidsBackHandler: () => {
                            renderLazyAd(adUnit.code);
                        },
                    });
                });
                observer.disconnect();
            }
        });
    });

    const adElement = document.getElementById(adUnit.code);
    observer.observe(adElement);
}

function renderLazyAd(adId) {
    const adDiv = document.getElementById(adId);
    const targeting = pbjs.getAdserverTargeting()[adId];
    if (targeting) {
        pbjs.renderAd(adDiv, adId);
    }
}
