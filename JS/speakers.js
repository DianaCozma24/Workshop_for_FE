const productListSpeakersString = localStorage.getItem('productListSpeakers');


if (!productListSpeakersString) {
  alert('Something went wrong!');
}

const productListSpeakers = JSON.parse(productListSpeakersString);


function createImg(imgUrl, alt) {
  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', imgUrl);
  imgElement.setAttribute('alt', alt);
  return imgElement;
}

function createCostumElement(element, text, elementClass) {
  const newElement = document.createElement(element);
  newElement.textContent = text;
  if (elementClass) {
    newElement.classList.add(elementClass);
  }
  return newElement;
}

function createCardElement(id, imgUrl, imgAlt, productTitle, productDescription) {
  const card = document.createElement('div');
  const container = document.createElement('div');
  card.classList.add('card');
  const img = createImg(imgUrl, imgAlt);
  const title = createCostumElement('h3', productTitle);
  const description = createCostumElement('p', productDescription);
  const anchor = document.createElement('a');
  const seeProduct = createCostumElement('button', 'See product');
  anchor.setAttribute('href', `productSpeakers.html?productId=${id}`);

  seeProduct.classList.add('seeProduct');

  container.appendChild(img);
  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(anchor);
  anchor.appendChild(seeProduct);
  card.appendChild(container);

  return card;
}

function generateList(list) {
  const productListElement = document.querySelector('.product-listSpeaker');
 
 
  for (let i = 0; i < list.length; i++) {
    const product = list[i];
    const cardElement = createCardElement(product.id, product.img, product.alt, product.title, product.shortDescription);
    productListElement.appendChild(cardElement);
   
  }
  return productListElement;
}

generateList(productListSpeakers);









