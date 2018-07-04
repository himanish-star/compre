function isEmpty(obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

function retrieveImageURL(doc) {
  return (doc.getElementById("landingImage") || doc.getElementById("imgBlkFront")).getAttribute('src');
}

function retrieveTitle(doc) {
  return doc.getElementById("productTitle").innerText.trim();
}

function retrievePrice(doc) {
  return (doc.getElementById("priceblock_saleprice")
    || doc.getElementById("priceblock_ourprice")
    || doc.getElementById("priceblock_dealprice")
    || doc.getElementsByClassName("offer-price")[0])
    .innerText.trim();
}

function retrieveDetails(doc) {
  const featureBullets = doc.getElementById("feature-bullets");
  let morePoints = doc.getElementById('prodDetails');
  let featureDetails = [];
  if(featureBullets) {
    const points = featureBullets.getElementsByTagName('li');
    for(point of points) {
      featureDetails.push(point.innerText.trim());
    }
  }
  let moreDetails = [];
  if(morePoints) {
    morePoints = morePoints.getElementsByTagName('table')[0]
    .getElementsByTagName('td');
    for(let i = 0; i < morePoints.length; i += 2) {
      let object = {};
      object[morePoints[i].innerText.trim()] = morePoints[i+1].innerText.trim();
      moreDetails.push(object);
    }
  }
  return { moreDetails: moreDetails, featureDetails: featureDetails };
}

function extractWebPage(doc) {
  return new Promise((resolve, reject) => {
    resolve({
      imageUrl: retrieveImageURL(doc),
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
