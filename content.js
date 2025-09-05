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

// --- RESET FUNCTION FOR SWITCH BUTTON ---
function resetSwitchButtonState() {
  // Remove the old button if exists
  const oldBtn = document.getElementById('switch-btn-custom');
  if (oldBtn) oldBtn.remove();

  // Re-add the switch button
  addSwitchButton();
}

// Function to add a transparent button that acts as the Switch button
function addSwitchButton() {
  const switchButton = document.createElement('button');
  switchButton.id = 'switch-btn-custom'; // Assign a specific id for easier reset
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
    if (doubleClickCooldown) return;
    clickTimeout = setTimeout(() => {
      if (!doubleClickCooldown) {
        changeTimeFrame();
        resetSwitchButtonState(); // <--- RESET after click
      }
      clickTimeout = null;
    }, 300);
  });

  switchButton.addEventListener('dblclick', () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      clickTimeout = null;
    }
    doubleClickCooldown = true;
    increaseTimeFrame();
    resetSwitchButtonState(); // <--- RESET after double-click

    setTimeout(() => {
      doubleClickCooldown = false;
    }, 300);
  });

  document.body.appendChild(switchButton);
}

// Function to apply AdGuard filters
function applyAdGuardFilters() {
  const style = document.createElement('style');
  style.textContent = `
#header-toolbar-intervals .isActive-GwQQdU8S {color: #2962ff !important; //Màu chữ khung thời gian hiện tại}
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
div.js-rootresizer__contents:nth-child(2) > div.black-border-bigger-radius.layout-with-border-radius > div.layout__area--center.unselectable:nth-child(5) > div.chart-toolbar.chart-controls-bar:last-child { display: none !important; }
div.js-rootresizer__contents:nth-child(2) > div.black-border-bigger-radius.layout-with-border-radius > div.layout__area--top:nth-child(3) > div.toolbar-qqNP9X6e > div.overflowWrap-qqNP9X6e > div.inner-OhqNVIYA:last-child > div.wrapOverflow-wXGVFOC9:first-child > div.wrap-wXGVFOC9 > div.scrollWrap-wXGVFOC9.noScrollBar-wXGVFOC9:first-child > div.content-OhqNVIYA > div.innerWrap-OhqNVIYA > div.group-MBOVGQRI:nth-child(6) { display: none !important; }
div.js-rootresizer__contents:nth-child(2) > div.black-border-bigger-radius.layout-with-border-radius > div.layout__area--top:nth-child(3) > div.toolbar-qqNP9X6e > div.overflowWrap-qqNP9X6e > div.inner-OhqNVIYA:last-child > div.wrapOverflow-wXGVFOC9:first-child > div.wrap-wXGVFOC9 > div.scrollWrap-wXGVFOC9.noScrollBar-wXGVFOC9 > div.content-OhqNVIYA > div.innerWrap-OhqNVIYA > div.separatorWrap-MBOVGQRI:nth-child(7) { display: none !important; }
div.js-rootresizer__contents:nth-child(2) > div.black-border-bigger-radius.layout-with-border-radius > div.layout__area--right:nth-child(6) > div.widgetbar-wrap.unselectable > div.widgetbar-tabs:first-child > div.wrap-Z4M3tWHb > div.scrollWrap-Z4M3tWHb.noScrollBar-Z4M3tWHb > div.content-Z4M3tWHb > div.toolbar-S4V6IoxY > button.button-I_wb5FjE.apply-common-tooltip.common-tooltip-vertical.accessible-I_wb5FjE:nth-child(7) { display: none !important; }
div.js-rootresizer__contents:nth-child(2) > div.black-border-bigger-radius.layout-with-border-radius > div.layout__area--right:nth-child(6) > div.widgetbar-wrap.unselectable > div.widgetbar-tabs:first-child > div.wrap-Z4M3tWHb > div.scrollWrap-Z4M3tWHb.noScrollBar-Z4M3tWHb > div.content-Z4M3tWHb > div.toolbar-S4V6IoxY > button.button-I_wb5FjE.apply-common-tooltip.common-tooltip-vertical.accessible-I_wb5FjE:nth-child(8) { display: none !important; }
div.js-rootresizer__contents:nth-child(2) > div.black-border-bigger-radius.layout-with-border-radius > div.layout__area--right:nth-child(6) > div.widgetbar-wrap.unselectable > div.widgetbar-tabs:first-child > div.wrap-Z4M3tWHb > div.scrollWrap-Z4M3tWHb.noScrollBar-Z4M3tWHb > div.content-Z4M3tWHb > div.toolbar-S4V6IoxY > div.wrapper-AQgMXBop:nth-child(9) { display: none !important; }
div.js-rootresizer__contents:nth-child(2) > div.black-border-bigger-radius.layout-with-border-radius > div.layout__area--right:nth-child(6) > div.widgetbar-wrap.unselectable > div.widgetbar-tabs:first-child > div.wrap-Z4M3tWHb > div.scrollWrap-Z4M3tWHb.noScrollBar-Z4M3tWHb > div.content-Z4M3tWHb > div.toolbar-S4V6IoxY > button.button-I_wb5FjE.apply-common-tooltip.common-tooltip-vertical.accessible-I_wb5FjE:nth-child(11) { display: none !important; }
div.js-rootresizer__contents:nth-child(2) > div.black-border-bigger-radius.layout-with-border-radius > div.layout__area--right:nth-child(6) > div.widgetbar-wrap.unselectable > div.widgetbar-tabs:first-child > div.wrap-Z4M3tWHb > div.scrollWrap-Z4M3tWHb.noScrollBar-Z4M3tWHb > div.content-Z4M3tWHb > div.toolbar-S4V6IoxY > button.button-I_wb5FjE.apply-common-tooltip.common-tooltip-vertical.accessible-I_wb5FjE:nth-child(12) { display: none !important; }
div.js-rootresizer__contents:nth-child(2) > div.black-border-bigger-radius.layout-with-border-radius > div.layout__area--right:nth-child(6) > div.widgetbar-wrap.unselectable > div.widgetbar-tabs:first-child > div.wrap-Z4M3tWHb > div.scrollWrap-Z4M3tWHb.noScrollBar-Z4M3tWHb > div.content-Z4M3tWHb > div.toolbar-S4V6IoxY > div.separator-gZVyfVJP:nth-child(10) { display: none !important; }
div.js-rootresizer__contents:nth-child(2) > div.black-border-bigger-radius.layout-with-border-radius > div.layout__area--right:nth-child(6) > div.widgetbar-wrap.unselectable > div.widgetbar-tabs:first-child > div.wrap-Z4M3tWHb > div.scrollWrap-Z4M3tWHb.noScrollBar-Z4M3tWHb > div.content-Z4M3tWHb > div.toolbar-S4V6IoxY > button.button-I_wb5FjE.apply-common-tooltip.common-tooltip-vertical.accessible-I_wb5FjE:nth-child(4) { display: none !important; }
div.js-rootresizer__contents:nth-child(2) > div.black-border-bigger-radius.layout-with-border-radius > div.layout__area--top:nth-child(3) > div.toolbar-qqNP9X6e > div.overflowWrap-qqNP9X6e > div.inner-OhqNVIYA:last-child > div.wrapOverflow-wXGVFOC9:first-child > div.wrap-wXGVFOC9 > div.scrollWrap-wXGVFOC9.noScrollBar-wXGVFOC9 > div.content-OhqNVIYA > div.innerWrap-OhqNVIYA > div.group-MBOVGQRI:nth-child(2) { display: none !important; }
div.js-rootresizer__contents:nth-child(2) > div.black-border-bigger-radius.layout-with-border-radius > div.layout__area--top:nth-child(3) > div.toolbar-qqNP9X6e > div.overflowWrap-qqNP9X6e > div.inner-OhqNVIYA:last-child > div.wrapOverflow-wXGVFOC9:first-child > div.wrap-wXGVFOC9 > div.scrollWrap-wXGVFOC9.noScrollBar-wXGVFOC9 > div.content-OhqNVIYA > div.innerWrap-OhqNVIYA > div.separatorWrap-MBOVGQRI:nth-child(3) { display: none !important; }
div.js-rootresizer__contents:nth-child(2) > div.black-border-bigger-radius.layout-with-border-radius > div.layout__area--top:nth-child(3) > div.toolbar-qqNP9X6e > div.overflowWrap-qqNP9X6e > div.inner-OhqNVIYA:last-child > div.wrapOverflow-wXGVFOC9:first-child > div.wrap-wXGVFOC9 > div.scrollWrap-wXGVFOC9.noScrollBar-wXGVFOC9 > div.content-OhqNVIYA > div.innerWrap-OhqNVIYA > div.separatorWrap-MBOVGQRI:nth-child(9) { display: none !important; }
div.js-rootresizer__contents:nth-child(2) > div.black-border-bigger-radius > div.layout__area--center.unselectable.no-border-bottom-left-radius.no-border-bottom-right-radius.no-border-top-right-radius:nth-child(5) > div.chart-toolbar.chart-controls-bar:last-child { display: none !important; }

    html.theme-dark .button-O36zDbH4 .blackButton-O36zDbH4 {
      background-color: #f2f2f2 !important;
      color: #f2f2f2 !important;
    }
    /* Change color of specific time frames */
    #header-toolbar-intervals [data-value="10S"]:not(.isActive-GwQQdU8S), 
    #header-toolbar-intervals [data-value="45S"]:not(.isActive-GwQQdU8S), 
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
  }, 1000);
});

// Function to GIẢM khung thời gian dựa trên khung thời gian hiện tại
function changeTimeFrame() {
  const timeFrameMap = {
    '30S': '10S',   // 30S -> 10s
    '45S': '15S',   // 45S -> 15s
    '1': '15S',     // 1m -> 15s
    '2': '30S',     // 2m -> 30s
    '4': '1',       // 4m -> 1m
    '6': '2',       // 6m -> 2m
    '8': '2',       // 8m -> 2m
    '12': '4',      // 12m -> 4m
    '16': '4',      // 16m -> 4m
    '24': '8',      // 24m -> 8m
    '32': '8',      // 32m -> 8m
    '45': '16',     // 45m -> 16m
    '60': '16',     // 1h -> 16m
    '120': '32',    // 2h -> 32m
    '180': '60',    // 3h -> 1h
    '240': '60',    // 4h -> 1h
    '360': '120',   // 6h -> 2h
    '480': '120',   // 8h -> 2h
    '720': '240',   // 12h -> 4h
    '960': '240',   // 16h -> 4h
    '1D': '480',    // 1D -> 8h
    '2D': '720',    // 2D -> 12h
    '3D': '1D',     // 3D -> 1D
    '4D': '1D'      // 4D -> 1D
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
    '5S': '15S',  // 5s -> 15s
    '10S': '30S', // 10s -> 30s
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

// Add event listener for the ` key và Ctrl + Space
document.addEventListener('keydown', (event) => {
  // Ctrl + Space để dán tên khung thời gian hiện tại
  if (event.key === ' ' && event.ctrlKey) {
    event.preventDefault();
    event.stopPropagation();
    pasteCurrentTimeFrame(); // gọi hàm paste khung thời gian
    return; // không chạy tiếp các đoạn dưới
  }

  // Xử lý cho phím `
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

// Add variables for click and double-click handling of the `~` key
let tildeKeypressTimeout = null;
let tildeDoubleClickCooldown = false;

// Add event listener for the `~` key
document.addEventListener('keydown', (event) => {
  if (event.key === '~') {
    event.preventDefault(); // Ngăn chặn hành động mặc định của phím ~
    event.stopPropagation(); // Ngăn chặn sự kiện tiếp tục nổi lên

    if (tildeKeypressTimeout) {
      clearTimeout(tildeKeypressTimeout); // Hủy thời gian chờ nếu có double-click
      tildeDoubleClickCooldown = true;
      decreaseAdjacentTimeFrame();

      setTimeout(() => {
        tildeDoubleClickCooldown = false; // Kết thúc thời gian chờ sau 300ms
        tildeKeypressTimeout = null; // Reset hành động nhấn phím
      }, 300);
    } else {
      tildeKeypressTimeout = setTimeout(() => {
        if (!tildeDoubleClickCooldown) {
          increaseAdjacentTimeFrame();
        }
        tildeKeypressTimeout = null; // Reset hành động nhấn phím
      }, 300); // Thời gian chờ 300ms sau khi nhấn
    }
  }
});

// Function to TIẾN LÊN khung thời gian liền kề
function increaseAdjacentTimeFrame() {
  const timeFrameElements = Array.from(document.querySelectorAll('#header-toolbar-intervals button[role="radio"]'));
  const activeButton = document.querySelector('#header-toolbar-intervals .isActive-GwQQdU8S');
  if (activeButton) {
    let currentIndex = timeFrameElements.indexOf(activeButton);
    let nextIndex = (currentIndex + 1) % timeFrameElements.length; // Tiến lên 1 khung thời gian
    let newButton = timeFrameElements[nextIndex];

    if (!newButton) {
      newButton = document.querySelector('#header-toolbar-intervals [data-value="1"]'); // Quay về khung 1m nếu không có khung thời gian lớn hơn
    }

    if (newButton) {
      newButton.click();
    }
  }
}

// Function to GIẢM khung thời gian liền kề
function decreaseAdjacentTimeFrame() {
  const timeFrameElements = Array.from(document.querySelectorAll('#header-toolbar-intervals button[role="radio"]'));
  const activeButton = document.querySelector('#header-toolbar-intervals .isActive-GwQQdU8S');
  if (activeButton) {
    let currentIndex = timeFrameElements.indexOf(activeButton);
    let nextIndex = (currentIndex - 1 + timeFrameElements.length) % timeFrameElements.length; // Giảm đi 1 khung thời gian
    let newButton = timeFrameElements[nextIndex];

    if (!newButton) {
      newButton = document.querySelector('#header-toolbar-intervals [data-value="1"]'); // Quay về khung 1m nếu không có khung thời gian nhỏ hơn
    }

    if (newButton) {
      newButton.click();
    }
  }
}

// Function to paste the name of the current time frame
function pasteCurrentTimeFrame() {
  const timeFrameMap = {
    '1': '1m',
    '2': '2m',
    '3': '3m',
    '4': '4m',
    '5': '5m',
    '6': '6m',
    '7': '7m',
    '8': '8m',
    '9': '9m',
    '10': '10m',
    '11': '11m',
    '12': '12m',
    '13': '13m',
    '14': '14m',
    '15': '15m',
    '16': '16m',
    '17': '17m',
    '18': '18m',
    '19': '19m',
    '20': '20m',
    '21': '21m',
    '22': '22m',
    '23': '23m',
    '24': '24m',
    '25': '25m',
    '26': '26m',
    '27': '27m',
    '28': '28m',
    '29': '29m',
    '30': '30m',
    '31': '31m',
    '32': '32m',
    '33': '33m',
    '34': '34m',
    '35': '35m',
    '36': '36m',
    '37': '37m',
    '38': '38m',
    '39': '39m',
    '40': '40m',
    '41': '41m',
    '42': '42m',
    '43': '43m',
    '44': '44m',
    '45': '45m',
    '46': '46m',
    '47': '47m',
    '48': '48m',
    '49': '49m',
    '50': '50m',
    '51': '51m',
    '52': '52m',
    '53': '53m',
    '54': '54m',
    '55': '55m',
    '56': '56m',
    '57': '57m',
    '58': '58m',
    '59': '59m',
    '60': '1H',
    '120': '2H',
    '180': '3H',
    '240': '4H',
    '360': '6H',
    '480': '8H',
    '720': '12H',
    '960': '16H',
  };

  const activeButton = document.querySelector('#header-toolbar-intervals .isActive-GwQQdU8S');
  if (activeButton) {
    const currentValue = activeButton.getAttribute('data-value');
    const currentTimeFrameText = (timeFrameMap[currentValue] || currentValue) + '   '; // Thêm ba khoảng trắng vào sau tên khung thời gian

    // Dán vào vị trí con trỏ chuột
    const activeElement = document.activeElement;
    if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
      const start = activeElement.selectionStart;
      const end = activeElement.selectionEnd;
      activeElement.value = activeElement.value.substring(0, start) + currentTimeFrameText + activeElement.value.substring(end);
      activeElement.dispatchEvent(new Event('input', { bubbles: true })); // Trigger input event
      activeElement.selectionStart = activeElement.selectionEnd = start + currentTimeFrameText.length;
    } else {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(currentTimeFrameText));
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }
}
