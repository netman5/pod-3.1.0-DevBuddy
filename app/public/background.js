/* global chrome */

chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create(
    { url: chrome.extension.getURL('index.html') },
    function (tab) {
      //Tab opened
    }
  );
});

// async function getCurrentTab() {
//   let queryOptions = { active: true, currentWindow: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   console.log(tab)
//   return tab
// }

// getCurrentTab()

chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
  const arrTabs = [...tabs]
  arrTabs.forEach(tab => {
    const {url, id, title} = tab;
    console.log(id, url, title)
  })
})


// const getAllTabs = async () => {
//   let queryOpts = {currentWindow: true}
//   let [tabs] = await chrome.tabs.query(queryOpts)
//   console.log(tabs)
//   return tabs
// } 
// getAllTabs()


   
