chrome.storage.local.get('listOfItems', (obj) => {
  let productList = obj.listOfItems;
  const imgDisplays = document.getElementById('imgDisplay')
    .getElementsByTagName('img');
  const titleDisplays = document.getElementById('productTitle')
    .getElementsByTagName('div');
  const priceDisplays = document.getElementById('priceDisplay')
    .getElementsByTagName('div');
  const productDetails = document.getElementById('productDetails')
    .getElementsByTagName('ul');
  const customerReviews = document.getElementById('customerReviews')
    .getElementsByTagName('ul');

  console.log(productList);
  for(let i = 0;i < 2; i ++) {
    imgDisplays[i].src = productList[i].imageUrl;
    titleDisplays[i+1].innerText = productList[i].title;
    priceDisplays[i+1].innerText = productList[i].price;
    productDetails[i].innerHTML = "";
    customerReviews[i].innerHTML = "";
    for(detail of productList[i].details.featureDetails) {
      if(typeof detail === 'string') {
        productDetails[i].innerHTML += `<li>${detail}</li>` + '\n';
      } else {
        Object.keys(detail).forEach(key => {
          if(key) {
            productDetails[i].innerHTML += `<li>${key}: ${detail[key]}</li>` + '\n';
          }
        })
      }
    }
    for(let j = 0 ; j < productList[i].reviews.length; j +=2) {
      customerReviews[i].innerHTML += `<li>
        ${productList[i].reviews[j]}
        <br>
        ${productList[i].reviews[j+1]}
      </li>`
    }
  }
})
