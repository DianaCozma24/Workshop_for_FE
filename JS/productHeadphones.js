const title = document.querySelector('.title');
const img = document.querySelector('.image-container img');
const price = document.querySelector('.price');
const description = document.querySelector('.product-informations');

const searchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(searchParams.entries());


const counter = localStorage.getItem('counter');

if (!counter) {
  localStorage.setItem('counter', 0);
} else {
  const cart = document.getElementById('cart');
  cart.textContent = counter;
}


console.log(params.productId);

const productListString = localStorage.getItem('productListHeadphones');
if (!productListString) {
  alert('Ceva s-a intamplat, trebuie vazut in localStorage');
}

const productList = JSON.parse(productListString);

const product = productList.find(function (element) {
  return element.id === params.productId
});

console.log(product);

if (!product) {
  alert('Produsul nu a fost gasit');
} else {
  const title = document.querySelector('.title');
  const img = document.querySelector('.img-container img');
  const price = document.querySelector('.price');
  const description = document.querySelector('.product-informations');


  title.textContent = product.title;
  img.setAttribute('src', product.img);
  img.setAttribute('alt', product.alt);
  price.textContent = `${product.price} ${product.currency}`;
  description.textContent = product.shortDescription;
}


const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const num = document.querySelector('.num');
const addToCartButton = document.getElementById('addToCart');

//  

plus.addEventListener('click', (e) => {
  e.preventDefault();
 
  const counterString = localStorage.getItem('counter');
  let counterNumber = parseInt(counterString);
  if (parseInt(num.innerText) === product.stoc) {
    alert('Ai depasit stocul');
    counterNumber=product.stoc;
    cart.textContent=counterNumber;
  } else {
    
    localStorage.setItem('counter', counterNumber + 1);
    num.innerText = parseInt(num.innerText) + 1;
  }

})

minus.addEventListener('click', (e) => {
  e.preventDefault();
  
  const counterString = localStorage.getItem('counter');
  const counterNumber = parseInt(counterString);
  if (counterNumber - 1 <= 0) {
    localStorage.setItem('counter', 0);
    
  } else {
    localStorage.setItem('counter', counterNumber - 1);
  
    num.innerText = parseInt(num.innerText) - 1;
  }

}
)


addToCartButton.addEventListener('click', (e) => {
  e.preventDefault();
  let cartVal = document.getElementById('cart');
  cartVal.textContent=parseInt(cartVal.textContent)+parseInt(document.getElementById('productNumber').textContent);
  const cart = JSON.parse(localStorage.getItem('cart'));
  cart.push({
    ...product,
    qty: document.getElementById('productNumber').textContent,
  })
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('counter', cartVal.textContent);
})

