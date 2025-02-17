chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: 'https://*.tradingview.com/*' },
          })
        ],
        actions: [ new chrome.declarativeContent.ShowAction() ]
      }
    ]);
  });
});