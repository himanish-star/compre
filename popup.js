let itemsUL = document.getElementById('itemsList');
const backgroundPage = chrome.extension.getBackgroundPage();

chrome.storage.sync.get('itemsList', function (item) {
  let itemsURL = JSON.parse(item.itemsList);
  itemsURL.forEach(function (element) {
    let liElement = document.createElement('li');
    liElement.innerHTML = `
      <a href='${element.url}'>
        ${element.url.length > 80 ? element.url.slice(0, 80) + '...' : element.url }
      </a>
    `;
    itemsUL.appendChild(liElement);
  })
})
