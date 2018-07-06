let ulContainer = document.getElementById('itemsList');
const backgroundPage = chrome.extension.getBackgroundPage();

const openPageBtn = document.getElementById('openPage');
openPageBtn.addEventListener('click', () => {
  const tabProperties = {
    url: './comparePage.html'
  }
  chrome.tabs.create(tabProperties);
})
chrome.storage.sync.get('itemsList', function (object) {
  // let items = JSON.parse(object.itemsList);
  // items.forEach(function (element) {
  //   let liElement = document.createElement('li');
  //   liElement.innerHTML = `
  //     <a href='${element.url}'>
  //       ${element.url.length > 80 ? element.url.slice(0, 80) + '...' : element.url }
  //     </a>
  //   `;
  //   itemsUL.appendChild(liElement);
  // })
})
