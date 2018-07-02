chrome.runtime.onInstalled.addListener(function () {
  contextMenuProperties = {
    id: "c45oreft56",
    title: "add this item to compare"
  }
  chrome.contextMenus.create(contextMenuProperties);
})

function isEmpty(obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  chrome.tabs.executeScript({
    file: "scrapeItemPage.js"
  }, function () {
    console.log('done');
  })
})
