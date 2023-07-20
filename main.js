const backgroundFade = document.querySelector(".dark");
const menuDesktop = document.querySelector('.navbar-desktop');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetalItem = document.querySelector(".product-detail-item");
const productDetailsCl = document.querySelector(".product-detail-close");
const body = document.querySelector(".body");
const imgSrc = document.querySelector(".img-src");
const nameTitle = document.querySelector(".name-Title")
const priceDetail = document.querySelector(".price-detail");
const myOrderContent = document.querySelector(".my-order-content");
const totalAmount = document.querySelector(".total-Amount");
const order = document.querySelector(".order");
const primaryButton = document.querySelector(".primary-button")
const counter = document.querySelector(".counter");
const cartEmpty = document.querySelector(".cart-empty")
const addToCartButton = document.querySelector(".add-to-cart-button");

let amount = 0;
let numItems = 0;
counter.innerHTML = numItems;
checkCart();

productDetailsCl.addEventListener("click", productDetailsClose);
backgroundFade.addEventListener("click", closeAll);
menuHamIcon.addEventListener('click', mobilFunction);
menuDesktop.addEventListener('click', desktopFunction);
menuCarritoIcon.addEventListener('click', asideFunction);


function mobilFunction(){
  evaluation("mobilArgument");
}
function desktopFunction(){
  evaluation("desktopArgument");
}
function asideFunction(){
  evaluation("asideArgument");
}
function evaluation(status){
  if(status == "mobilArgument"){
    desktopMenu.classList.add('desktop-menu-hide');
    aside.classList.add('product-detail-hide');
    mobileMenu.classList.toggle('mobile-menu-hide');
    menuHamIcon.classList.toggle("menu-open");
  }
  if(status == "desktopArgument"){
    mobileMenu.classList.add('mobile-menu-hide');
    menuHamIcon.classList.remove("menu-open");
    aside.classList.add('product-detail-hide');
    desktopMenu.classList.toggle('desktop-menu-hide');
  }
  if(status == "asideArgument"){
    mobileMenu.classList.add('mobile-menu-hide');
    menuHamIcon.classList.remove("menu-open");
    desktopMenu.classList.add('desktop-menu-hide');
    aside.classList.toggle('product-detail-hide');
  }
  if(!mobileMenu.classList.contains('mobile-menu-hide') || !desktopMenu.classList.contains('desktop-menu-hide') || !aside.classList.contains('product-detail-hide')){
    backgroundFade.classList.remove("inactive");
    delayBackground()
    body.classList.add("scroll-off");
  }
  if(mobileMenu.classList.contains('mobile-menu-hide') && desktopMenu.classList.contains('desktop-menu-hide') && aside.classList.contains('product-detail-hide')){
    backgroundFade.classList.remove("background-dark");
    delayInactive();
    body.classList.remove("scroll-off");
  }
}
function delayBackground(){
  setTimeout(()=>{
    backgroundFade.classList.add("background-dark");
  }, 100);
}
function delayInactive(){
  setTimeout(()=>{
    backgroundFade.classList.add("inactive");
  }, 700);
}
function closeAll(){
  mobileMenu.classList.add('mobile-menu-hide');
  menuHamIcon.classList.remove("menu-open");
  desktopMenu.classList.add('desktop-menu-hide');
  aside.classList.add('product-detail-hide');
  backgroundFade.classList.remove("background-dark");
  delayInactive();
  body.classList.remove("scroll-off");
}
function productDetailsOpen(event){

  const imgSelect = event.target.currentSrc;
  const price = event.target.parentElement.childNodes[1].childNodes[0].childNodes[0].childNodes[1].innerText;
  const title = event.target.parentElement.childNodes[1].childNodes[0].childNodes[1].innerText;

  imgSrc.setAttribute("src", imgSelect);
  nameTitle.innerText = title;
  priceDetail.innerText = price;

  addToCartButton.addEventListener("click", addToCart);
  productDetalItem.classList.remove("inactive");
  
}
function checkCart(){
  if(amount == 0){
    order.classList.add("inactive");
    order.classList.remove("order-dispay-on");
    primaryButton.classList.add("inactive");
    cartEmpty.classList.remove("inactive");
  }else{
    order.classList.remove("inactive");
    order.classList.add("order-dispay-on");
    primaryButton.classList.remove("inactive");
    cartEmpty.classList.add("inactive");
  }
}
function addToCart(event){
  let imgCar;
  let descCart;
  let priceCart;

  if(event.target.id == "cart-img"){
    imgCar = event.target.parentElement.parentElement.parentElement.childNodes[0].currentSrc;
    descCart = event.target.parentElement.parentElement.childNodes[0].childNodes[1].innerText;
    priceCart = event.target.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[1].innerText;
  }
  else if(event.target.className == "primary-button add-to-cart-button"){
    imgCar = event.target.parentElement.parentElement.childNodes[3].currentSrc;
    descCart = event.target.parentElement.childNodes[3].innerText;
    priceCart = event.target.parentElement.childNodes[1].innerText;
  }

  const cartCloseContainer = document.createElement("div");
  cartCloseContainer.setAttribute("class", "x-close");
  cartCloseContainer.innerText = "X";
  cartCloseContainer.addEventListener("click", clear);

  const cartPriceAmount = document.createElement("p");
  cartPriceAmount.innerText = priceCart;

  const moneySign = document.createElement("p");
  moneySign.innerText = "$";

  const priceContainer = document.createElement("div");
  priceContainer.setAttribute("class", "price-container");
  priceContainer.appendChild(moneySign);
  priceContainer.appendChild(cartPriceAmount);

  const cartDescription = document.createElement("p");
  cartDescription.innerText = descCart;

  const cartImgFig = document.createElement("img");
  cartImgFig.setAttribute("src", imgCar);
  const cartFigContainer = document.createElement("figure");
  cartFigContainer.appendChild(cartImgFig);
 
  const cartContainer = document.createElement("div");
  cartContainer.setAttribute("class", "shopping-cart");
  cartContainer.appendChild(cartFigContainer);
  cartContainer.appendChild(cartDescription);
  cartContainer.appendChild(priceContainer);
  cartContainer.appendChild(cartCloseContainer);

  myOrderContent.appendChild(cartContainer)
  
  amount += Number(priceCart);
  totalAmount.innerText = `$ ${amount}`;

  numItems++;
  counter.innerHTML = numItems;
  checkCart();
}
function clear(event){
  myOrderContent.removeChild(event.target.parentElement)
  numItems--;
  counter.innerHTML = numItems;
  
  amount -= Number(event.target.parentElement.childNodes[2].childNodes[1].innerText);
  totalAmount.innerText = `$ ${amount}`;
  checkCart();
}
function productDetailsClose(){
  productDetalItem.classList.add("inactive");
}

const productList = [];

productList.push({
  name: 'Separadora de pantalla',
  price: 1190,
  image: 'https://m.media-amazon.com/images/I/71ST-RSRfFL._AC_SL1500_.jpg',
});
productList.push({
  name: 'Pantalla LCD',
  price: 488,
  image: 'https://m.media-amazon.com/images/I/61+I00feV9L._AC_SL1100_.jpg',
});
productList.push({
  name: 'Pantalla LCD',
  price: 504,
  image: 'https://m.media-amazon.com/images/I/51wU8SLM13L._AC_.jpg',
});
productList.push({
  name: 'Separadora de pantalla LCD',
  price: 1052,
  image: 'https://m.media-amazon.com/images/I/41wvzxwA5UL._AC_.jpg',
});
productList.push({
  name: 'Separadora de pantalla',
  price: 1032,
  image: 'https://m.media-amazon.com/images/I/61f1PfgQXYL._AC_SL1001_.jpg',
});
productList.push({
  name: 'Almohadilla de Calefacción Portátil',
  price: 1455,
  image: 'https://m.media-amazon.com/images/I/61Nk4eY-k1L._AC_SL1500_.jpg',
});
productList.push({
  name: 'Abrazadera de fijación',
  price: 267,
  image: 'https://m.media-amazon.com/images/I/61vAsvgA9VL._AC_SL1500_.jpg',
});
productList.push({
  name: 'T7000 50ml Pegamento',
  price: 120,
  image: 'https://m.media-amazon.com/images/I/41c8hKlbvhL._SX425_.jpg',
});
productList.push({
  name: 'B7000 50ml Pegamento',
  price: 115,
  image: 'https://m.media-amazon.com/images/I/31y6HFmlawL.jpg',
});

function renderProducts(arr) {
  for (product of arr) {
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('id', 'cart-img');
    productImgCart.setAttribute('src', './icons/cart.svg');
    productImgCart.addEventListener("click", addToCart);
    const productInfoFigure = document.createElement('figure');
    productInfoFigure.appendChild(productImgCart);

    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productDescriptionDiv = document.createElement('div');
    productDescriptionDiv.setAttribute("class", "product-description-div")
    productDescriptionDiv.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.innerText = product.price;
    const productSign = document.createElement('p');
    productSign.innerText = "$";
    const productInfoDiv = document.createElement('div');
    productInfoDiv.setAttribute("class","product-info-div")
    productInfoDiv.append(productSign, productPrice);
    
    const productTextcontainer = document.createElement('div');
    productTextcontainer.setAttribute("class", "product-text-container")
    productTextcontainer.append(productInfoDiv, productDescriptionDiv);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productInfo.append(productTextcontainer, productInfoFigure);

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', productDetailsOpen);

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);

