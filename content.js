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

  switchButton.addEventListener('click', changeTimeFrame);
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
    div.js-rootresizer__contents.black-border-bigger-radius.layout-with-border-radius:nth-child(2) > div.layout__area--top:nth-child(3) > div.toolbar-qqNP9X6e > div.overflowWrap-qqNP9X6e > div.inner-qqNP9X6e { display: none !important; }
    #header-toolbar-chart-styles { display: none !important; }
    div.js-rootresizer__contents.black-border-bigger-radius.layout-with-border-radius:nth-child(2) > div.layout__area--top:nth-child(3) > div.toolbar-qqNP9X6e > div.overflowWrap-qqNP9X6e > div.inner-qqNP9X6e { display: none !important; }
    #header-toolbar-indicators > button.button-OhqNVIYA.button-ptpAHg8E.withText-ptpAHg8E.button-GwQQdU8S.apply-common-tooltip.isInteractive-GwQQdU8S.accessible-GwQQdU8S:first-child > div.js-button-text { display: none !important; }
    div.js-rootresizer__contents.black-border-bigger-radius.layout-with-border-radius:nth-child(2) > div.layout__area--top:nth-child(3) > div.toolbar-qqNP9X6e > div.overflowWrap-qqNP9X6e > div.inner-qqNP9X6e { display: none !important; }
    #header-toolbar-symbol-search { display: none !important; }
    div.js-rootresizer__contents.black-border-bigger-radius:nth-child(2) > div.layout__area--center:nth-child(5) > div.chart-toolbar.chart-controls-bar:last-child { display: none !important; }
    div.js-rootresizer__contents.black-border-bigger-radius:nth-child(2) > div.layout__area--center.no-border-bottom-left-radius.no-border-bottom-right-radius.no-border-top-right-radius:nth-child(5) > div.chart-toolbar.chart-controls-bar { display: none !important; }
    html.theme-dark .button-O36zDbH4 .blackButton-O36zDbH4 {
      background-color: #f2f2f2 !important;
      color: #f2f2f2 !important;
    }
    /* Change color of specific time frames */
    #header-toolbar-intervals [data-value="3"], 
    #header-toolbar-intervals [data-value="6"], 
    #header-toolbar-intervals [data-value="12"], 
    #header-toolbar-intervals [data-value="24"], 
    #header-toolbar-intervals [data-value="45"] {
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
    checkMissingTimeFrames();
  }, 1000); // Delay to ensure the page has fully loaded
});

// Function to change time frame based on current time frame
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

// Function to check for missing time frames
function checkMissingTimeFrames() {
  const requiredTimeFrames = ['15S', '30S', '1', '2', '3', '4', '6', '8', '12', '16', '24', '32', '45', '60', '120', '240', '480', '960'];
  const timeFrameNames = {
    '15S': '15s',
    '30S': '30s',
    '1': '1m',
    '2': '2m',
    '3': '3m',
    '4': '4m',
    '6': '6m',
    '8': '8m',
    '12': '12m',
    '16': '16m',
    '24': '24m',
    '32': '32m',
    '45': '45m',
    '60': '1h',
    '120': '2h',
    '240': '4h',
    '480': '8h',
    '960': '16h'
  };
  
  const missingTimeFrames = requiredTimeFrames.filter(timeFrame => !document.querySelector(`#header-toolbar-intervals [data-value="${timeFrame}"]`))
    .map(timeFrame => timeFrameNames[timeFrame]);

  if (missingTimeFrames.length > 0) {
    alert(`Các khung thời gian còn thiếu: ${missingTimeFrames.join(', ')}`);
  }
}

// ------Nhấn phím mũi tên để di chuyển giữa các timeframe
//function handleKeyDown(event) {
//  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA' || event.target.isContentEditable) return;
//  if (event.keyCode !== 37 && event.keyCode !== 39) return; // Only handle left and right arrow keys

//  const activeButton = document.querySelector('#header-toolbar-intervals .isActive-GwQQdU8S');
//  if (!activeButton) return;

//  const buttons = Array.from(document.querySelectorAll('#header-toolbar-intervals button[role="radio"]'));
//  const activeIndex = buttons.indexOf(activeButton);

//  if (event.keyCode === 37) { // Left arrow key
//    const prevIndex = activeIndex > 0 ? activeIndex - 1 : buttons.length - 1;
//    buttons[prevIndex].click();
//  } else if (event.keyCode === 39) { // Right arrow key
//    const nextIndex = activeIndex < buttons.length - 1 ? activeIndex + 1 : 0;
//    buttons[nextIndex].click();
//  }
//}

document.addEventListener('keydown', handleKeyDown);
