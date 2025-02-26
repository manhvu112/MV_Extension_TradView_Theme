chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: 'https://*.tradingview.com/chart/*' },
          })
        ],
        actions: [ new chrome.declarativeContent.ShowAction() ]
      }
    ]);
  });
});


// -------- Automatic Fullscreen -------- //

(() => {
  "undefined" == typeof browser && (globalThis.browser = globalThis.browser || globalThis.chrome);
  const e = e => {
    browser.windows.update(e.id, { state: "fullscreen" })
  };
  browser.runtime.onStartup.addListener(() => 
    browser.windows.getCurrent().then(e)
  );
  browser.windows.onCreated.addListener(e);
})();
