chrome.runtime.onInstalled.addListener(function () {
  contextMenuProperties = {
    id: "c45oreft56",
    title: "add this item to compare"
  }
  chrome.contextMenus.create(contextMenuProperties);
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  chrome.tabs.executeScript({
    file: "scrapeItemPage.js"
  });
})
