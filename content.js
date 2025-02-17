// Function to simulate Alt + Enter key press
function enterFullScreen() {
  const altEnterEvent = new KeyboardEvent('keydown', {
    bubbles: true,
    cancelable: true,
    keyCode: 13, // Enter key code
    which: 13,
    key: 'Enter',
    code: 'Enter',
    altKey: true, // Alt key pressed
    view: window
  });
  document.dispatchEvent(altEnterEvent);
}

// Function to add a transparent button that acts as the Tab key
function addTransparentButton() {
  const tabButton = document.createElement('button');
  tabButton.innerText = 'Switch';
  tabButton.style.position = 'fixed';
  tabButton.style.top = '0';
  tabButton.style.right = '0';
  tabButton.style.backgroundColor = 'transparent';
  tabButton.style.border = 'none';
  tabButton.style.width = '77.7px';
  tabButton.style.height = '38px';
  tabButton.style.cursor = 'pointer';
  tabButton.style.zIndex = '1000';
  tabButton.style.color = '#000';

  tabButton.addEventListener('click', () => {
    const tabKeyEvent = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      keyCode: 9, // Tab key code
      which: 9,
      key: 'Tab',
      code: 'Tab',
      view: window
    });
    document.dispatchEvent(tabKeyEvent);
  });

  document.body.appendChild(tabButton);
}

// Function to apply AdGuard filters
function applyAdGuardFilters() {
  const style = document.createElement('style');
  style.textContent = `
    html.theme-dark .black-border-bigger-radius { --chart-widget-border-color: transparent !important; }
    #header-toolbar-study-templates > button.button-merBkM5y.apply-common-tooltip.accessible-merBkM5y > div.button-ptpAHg8E.withoutText-ptpAHg8E.button-GwQQdU8S.isInteractive-GwQQdU8S { display: none !important; }
    #header-toolbar-indicators > button.button-merBkM5y.apply-common-tooltip.accessible-merBkM5y:last-child > div.arrow-merBkM5y { display: none !important; }
    #header-toolbar-chart-styles > button.menu-b3Cgff6l.button-merBkM5y.apply-common-tooltip.accessible-merBkM5y { display: none !important; }
    div.js-rootresizer__contents.black-border-bigger-radius.layout-with-border-radius:nth-child(2) > div.layout__area--top:nth-child(3) > div.toolbar-qqNP9X6e > div.overflowWrap-qqNP9X6e > div.inner-OhqNVIYA:last-child > div.wrapOverflow-wXGVFOC9:first-child > div.wrap-wXGVFOC9 > div.scrollWrap-wXGVFOC9.noScrollBar-wXGVFOC9 > div.content-OhqNVIYA > div.innerWrap-OhqNVIYA > div.separatorWrap-MBOVGQRI:nth-child(5) { display: none !important; }
    #header-toolbar-chart-styles { display: none !important; }
    div.js-rootresizer__contents.black-border-bigger-radius.layout-with-border-radius:nth-child(2) > div.layout__area--top:nth-child(3) > div.toolbar-qqNP9X6e > div.overflowWrap-qqNP9X6e > div.inner-OhqNVIYA:last-child > div.wrapOverflow-wXGVFOC9:first-child > div.wrap-wXGVFOC9 > div.scrollWrap-wXGVFOC9.noScrollBar-wXGVFOC9 > div.content-OhqNVIYA > div.innerWrap-OhqNVIYA > div.group-MBOVGQRI:nth-child(6) { display: none !important; }
    #header-toolbar-indicators > button.button-OhqNVIYA.button-ptpAHg8E.withText-ptpAHg8E.button-GwQQdU8S.apply-common-tooltip.isInteractive-GwQQdU8S.accessible-GwQQdU8S:first-child > div.js-button-text.text-GwQQdU8S:last-child { display: none !important; }
    div.js-rootresizer__contents.black-border-bigger-radius.layout-with-border-radius:nth-child(2) > div.layout__area--top:nth-child(3) > div.toolbar-qqNP9X6e > div.overflowWrap-qqNP9X6e > div.inner-OhqNVIYA:last-child > div.wrapOverflow-wXGVFOC9:first-child > div.wrap-wXGVFOC9 > div.scrollWrap-wXGVFOC9.noScrollBar-wXGVFOC9 > div.content-OhqNVIYA > div.innerWrap-OhqNVIYA > div.separatorWrap-MBOVGQRI:nth-child(7) { display: none !important; }
    #header-toolbar-symbol-search { display: none !important; }
    div.js-rootresizer__contents.black-border-bigger-radius.layout-with-border-radius:nth-child(2) > div.layout__area--center:nth-child(5) > div.chart-toolbar.chart-controls-bar:last-child { display: none !important; }
    div.js-rootresizer__contents.black-border-bigger-radius:nth-child(2) > div.layout__area--center.no-border-bottom-left-radius.no-border-bottom-right-radius.no-border-top-right-radius:nth-child(5) > div.chart-toolbar.chart-controls-bar:last-child { display: none !important; }
    html.theme-dark .button-O36zDbH4 .blackButton-O36zDbH4 {
      background-color: #f2f2f2 !important;
      color: #f2f2f2 !important;
    }
  `;
  document.head.appendChild(style);
}

// Initial function calls after page load
window.addEventListener('load', () => {
  setTimeout(() => {
    enterFullScreen();
    addTransparentButton();
    applyAdGuardFilters();
  }, 1000); // Delay to ensure the page has fully loaded
});