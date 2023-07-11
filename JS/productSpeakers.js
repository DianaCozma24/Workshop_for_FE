const title = document.querySelector('.title');
const img = document.querySelector('.image-container img');
const price = document.querySelector('.price');
const description = document.querySelector('.product-informations');

const searchParams= new URLSearchParams(window.location.search);
const params= Object.fromEntries(searchParams.entries());


console.log(params.productId);

const productListString=localStorage.getItem('productListSpeakers');
if (!productListString) {
  alert('Ceva s-a intamplat, trebuie vazut in localStorage');
}

const productList = JSON.parse(productListString);

const product = productList.find(function(element){
  return element.id === params.productId
});

console.log(product);

if (!product) {
  alert('Produsul nu a fost gasit');
}else{
  const title = document.querySelector('.title');
  const img = document.querySelector('.img-container img');
  const price = document.querySelector('.price');
  const description = document.querySelector('.product-informations');


  title.textContent = product.title;
    img.setAttribute('src', product.img);
    img.setAttribute('alt', product.alt);
    price.textContent = `${product.price} ${product.currency}`;
    description.textContent= product.shortDescription;
}