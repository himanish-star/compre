chrome.runtime.onInstalled.addListener(function () {
  contextMenuProperties = {
    id: "compreft56",
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
  chrome.storage.sync.get('itemsList', function (item) {
    if(isEmpty(item)) {
      let itemsList = [];
      itemsList.push({
        url: tab.url
      })
      chrome.storage.sync.set({
        'itemsList': JSON.stringify(itemsList)
      })
    } else {
      let itemsList = JSON.parse(item.itemsList);
      itemsList.push({
        url: tab.url
      });
      chrome.storage.sync.set({
        'itemsList': JSON.stringify(itemsList)
      })
    }
  });
})
