/* global chrome */

chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) =>{

    chrome.tabs.sendMessage(
      tabs[0].id,
      { greeting: "hello" },
      function (response) {
        console.log(response.farewell);
      }
    );
    const ul = document.createElement("ul");

    for (let tab of tabs) {
      const li = document.createElement("li");
      li.innerHTML = tab;
      ul.appendChild(li);
    }

    const body = document.getElementById("body");
    body.append(ul);

    console.log(ul);
    console.log(tabs);
})

