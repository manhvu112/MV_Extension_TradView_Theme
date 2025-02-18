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

// Function to add a transparent button that acts as the Switch button
function addSwitchButton() {
  const switchButton = document.createElement('button');
  switchButton.innerText = 'Switch';
  switchButton.style.position = 'fixed';
  switchButton.style.top = '0';
  switchButton.style.right = '0';
  switchButton.style.backgroundColor = 'transparent';
  switchButton.style.border = 'none';
  switchButton.style.width = '77.7px';
  switchButton.style.height = '38px';
  switchButton.style.cursor = 'pointer';
  switchButton.style.zIndex = '1000';
  switchButton.style.color = '#000';

  let clickTimeout = null;
  let doubleClickCooldown = false;

  switchButton.addEventListener('click', () => {
    if (doubleClickCooldown) return; // Không làm gì nếu đang trong thời gian chờ double-click

    clickTimeout = setTimeout(() => {
      if (!doubleClickCooldown) {
        changeTimeFrame();
      }
      clickTimeout = null;
    }, 300); // Thời gian chờ 300ms sau khi click
  });

  switchButton.addEventListener('dblclick', () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout); // Hủy thời gian chờ click nếu có double-click
      clickTimeout = null;
    }
    doubleClickCooldown = true;
    increaseTimeFrame();

    setTimeout(() => {
      doubleClickCooldown = false; // Kết thúc thời gian chờ sau 300ms
    }, 300);
  });

  document.body.appendChild(switchButton);
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
div.js-rootresizer__contents.black-border-bigger-radius.layout-with-border-radius:nth-child(2) > div.layout__area--top:nth-child(3) > div.toolbar-qqNP9X6e > div.overflowWrap-qqNP9X6e > div.inner-OhqNVIYA:last-child > div.wrapOverflow-wXGVFOC9:first-child > div.wrap-wXGVFOC9 > div.scrollWrap-wXGVFOC9.noScrollBar-wXGVFOC9 > div.content-OhqNVIYA > div.innerWrap-OhqNVIYA > div.separatorWrap-MBOVGQRI:nth-child(9) { display: none !important; }
#header-toolbar-symbol-search { display: none !important; }
div.js-rootresizer__contents.black-border-bigger-radius.layout-with-border-radius:nth-child(2) > div.layout__area--center:nth-child(5) > div.chart-toolbar.chart-controls-bar:last-child { display: none !important; }
div.js-rootresizer__contents.black-border-bigger-radius:nth-child(2) > div.layout__area--center.no-border-bottom-left-radius.no-border-bottom-right-radius.no-border-top-right-radius:nth-child(5) > div.chart-toolbar.chart-controls-bar:last-child { display: none !important; }
div.js-rootresizer__contents.black-border-bigger-radius.layout-with-border-radius:nth-child(2) > div.layout__area--top:nth-child(3) > div.toolbar-qqNP9X6e > div.overflowWrap-qqNP9X6e > div.inner-OhqNVIYA:last-child > div.wrapOverflow-wXGVFOC9:first-child > div.wrap-wXGVFOC9 > div.scrollWrap-wXGVFOC9.noScrollBar-wXGVFOC9 > div.content-OhqNVIYA > div.innerWrap-OhqNVIYA > div.separatorWrap-MBOVGQRI:nth-child(3) { display: none !important; }
div.js-rootresizer__contents.black-border-bigger-radius.layout-with-border-radius:nth-child(2) > div.layout__area--top:nth-child(3) > div.toolbar-qqNP9X6e > div.overflowWrap-qqNP9X6e > div.inner-OhqNVIYA:last-child > div.wrapOverflow-wXGVFOC9:first-child > div.wrap-wXGVFOC9 > div.scrollWrap-wXGVFOC9.noScrollBar-wXGVFOC9 > div.content-OhqNVIYA > div.innerWrap-OhqNVIYA > div.group-MBOVGQRI:nth-child(2) { display: none !important; }
#header-toolbar-quick-search { display: none !important; }

    html.theme-dark .button-O36zDbH4 .blackButton-O36zDbH4 {
      background-color: #f2f2f2 !important;
      color: #f2f2f2 !important;
    }
    /* Change color of specific time frames */
    #header-toolbar-intervals [data-value="3"]:not(.isActive-GwQQdU8S), 
    #header-toolbar-intervals [data-value="6"]:not(.isActive-GwQQdU8S), 
    #header-toolbar-intervals [data-value="12"]:not(.isActive-GwQQdU8S), 
    #header-toolbar-intervals [data-value="24"]:not(.isActive-GwQQdU8S), 
    #header-toolbar-intervals [data-value="45"]:not(.isActive-GwQQdU8S),
    #header-toolbar-intervals [data-value="180"]:not(.isActive-GwQQdU8S),
    #header-toolbar-intervals [data-value="360"]:not(.isActive-GwQQdU8S),
    #header-toolbar-intervals [data-value="720"]:not(.isActive-GwQQdU8S) {
      color: #f58800 !important;
    }
  `;
  document.head.appendChild(style);
}

// Initial function calls after page load
window.addEventListener('load', () => {
  setTimeout(() => {
    enterFullScreen();
    addSwitchButton();
    applyAdGuardFilters();
  }, 1000); // Delay to ensure the page has fully loaded
});

// Function to GIẢM khung thời gian dựa trên khung thời gian hiện tại
function changeTimeFrame() {
  const timeFrameMap = {
    '1': '15S',   // 1m -> 15s
    '2': '30S',   // 2m -> 30s
    '4': '1',    // 4m -> 1m
    '8': '2',    // 8m -> 2m
    '16': '4',   // 16m -> 4m
    '32': '8',   // 32m -> 8m
    '60': '16',  // 1h -> 16m
    '120': '32', // 2h -> 32m
    '240': '60', // 4h -> 1h
    '480': '120',// 8h -> 2h
    '960': '240',// 16h -> 4h
    '1D': '480', // 1D -> 8h
    '2D': '960', // 2D -> 16h
    '4D': '1D'   // 4D -> 1D
  };

  const activeButton = document.querySelector('#header-toolbar-intervals .isActive-GwQQdU8S');
  if (activeButton) {
    const currentValue = activeButton.getAttribute('data-value');
    const newValue = timeFrameMap[currentValue] || '1';
    const newButton = document.querySelector(`#header-toolbar-intervals [data-value="${newValue}"]`);
    if (newButton) {
      newButton.click();
    }
  }
}

// Function to TĂNG khung thời gian dựa trên khung thời gian hiện tại
function increaseTimeFrame() {
  const timeFrameMap = {
    '15S': '1',   // 15s -> 1m
    '30S': '2',   // 30s -> 2m
    '1': '4',     // 1m -> 4m
    '2': '8',     // 2m -> 8m
    '4': '16',    // 4m -> 16m
    '8': '32',    // 8m -> 32m
    '16': '60',   // 16m -> 1h
    '32': '120',  // 32m -> 2h
    '60': '240',  // 1h -> 4h
    '120': '480', // 2h -> 8h
    '240': '960', // 4h -> 16h
    '480': '1D',  // 8h -> 1D
    '960': '2D',  // 16h -> 2D
    '1D': '4D'    // 1D -> 4D
  };

  const activeButton = document.querySelector('#header-toolbar-intervals .isActive-GwQQdU8S');
  if (activeButton) {
    const currentValue = activeButton.getAttribute('data-value');
    const newValue = timeFrameMap[currentValue] || '1';
    const newButton = document.querySelector(`#header-toolbar-intervals [data-value="${newValue}"]`);
    if (newButton) {
      newButton.click();
    }
  }
}


// Add variables for click and double-click handling of the ` key
let keypressTimeout = null;
let doubleClickCooldown = false;

// Add event listener for the ` key
document.addEventListener('keydown', (event) => {
  if (event.key === '`') {
    event.preventDefault(); // Ngăn chặn hành động mặc định của phím `
    event.stopPropagation(); // Ngăn chặn sự kiện tiếp tục nổi lên

    if (keypressTimeout) {
      clearTimeout(keypressTimeout); // Hủy thời gian chờ nếu có double-click
      doubleClickCooldown = true;
      increaseTimeFrame();

      setTimeout(() => {
        doubleClickCooldown = false; // Kết thúc thời gian chờ sau 300ms
        keypressTimeout = null; // Reset hành động nhấn phím
      }, 300);
    } else {
      keypressTimeout = setTimeout(() => {
        if (!doubleClickCooldown) {
          changeTimeFrame();
        }
        keypressTimeout = null; // Reset hành động nhấn phím
      }, 300); // Thời gian chờ 300ms sau khi nhấn
    }
  }
});
