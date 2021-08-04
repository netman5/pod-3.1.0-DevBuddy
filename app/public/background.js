/* global chrome */

chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create(
    { url: chrome.extension.getURL('index.html') },
    function (tab) {
      //Tab opened
    }
  );
});

// captures all current window tabs
chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
  const arrTabs = [...tabs]
  arrTabs.forEach(tab => {
    const {url, id, title} = tab;
    console.log(id, url, title)
  })
})



   
