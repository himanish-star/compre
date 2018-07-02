function isEmpty(obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

function retrieveURL(doc) {
  return (doc.getElementById("landingImage") || doc.getElementById("imgBlkFront")).getAttribute('src');
}

function retrieveTitle(doc) {
  return doc.getElementById("productTitle").innerText.trim();
}

function retrievePrice(doc) {
  return (doc.getElementById("priceblock_saleprice")
    || doc.getElementById("priceblock_ourprice")
    || doc.getElementsByClassName("offer-price")[0])
    .innerText.trim();
}

function retrieveDetails(doc) {

}

function extractWebPage(doc) {
  return new Promise((resolve, reject) => {
    resolve({
      url: retrieveURL(doc),
      title: retrieveTitle(doc),
      price: retrievePrice(doc),
      details: retrieveDetails(doc)
    });
  })
}

chrome.storage.sync.get('itemsList', async function (object) {
  if(isEmpty(object)) {
    extractWebPage(document)
      .then((JSON_data) => {
        console.log(JSON_data);
        // let itemsList = [];
        // itemsList.push(JSON_data);
        // chrome.storage.sync.set({ itemsList: JSON.stringify(itemsList) });
      })
  }
})
