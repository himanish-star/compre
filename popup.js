const ulContainer = document.getElementById('compareList');
const displayMSG = document.getElementById('display');
const backgroundPage = chrome.extension.getBackgroundPage();

function isEmpty(obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

const openPageBtn = document.getElementById('openPage');
openPageBtn.addEventListener('click', () => {
  const tabProperties = {
    url: './comparePage.html'
  }
  chrome.tabs.create(tabProperties);
})

chrome.storage.local.get('listOfItems', function (object) {
  if(isEmpty(object)) {
    displayMSG.innerText = "Please add something to compare";
    document.getElementById('openPage').style.display = "none";
  } else {
    let items = object.listOfItems;
    backgroundPage.console.log(items);
    items.forEach(function (element) {
      let liElement = document.createElement('li');
      liElement.innerHTML = `
        <b>${element.title}</b>
      `;
      ulContainer.appendChild(liElement);
    })
  }
})
