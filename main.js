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

const desktopAll = document.querySelector(".desktop-all");
const desktopCells = document.querySelector(".desktop-cells");
const desktopTools = document.querySelector(".desktop-tools");
const desktopScreens = document.querySelector(".desktop-screens");
const desktopGlue = document.querySelector(".desktop-glue");
const desktopkits = document.querySelector(".desktop-kits");

const bannerTop = document.querySelector(".banner-top");

let amount = 0;
let numItems = 0;
counter.innerHTML = numItems;
checkCart();

productDetailsCl.addEventListener("click", productDetailsClose);
backgroundFade.addEventListener("click", closeAll);
menuHamIcon.addEventListener('click', mobilFunction);
menuDesktop.addEventListener('click', desktopFunction);
menuCarritoIcon.addEventListener('click', asideFunction);

desktopAll.addEventListener("click", allf);
desktopCells.addEventListener("click", origin);
desktopTools.addEventListener("click", origin);
desktopScreens.addEventListener("click", origin);
desktopGlue.addEventListener("click", origin);
desktopkits.addEventListener("click", origin);

function mobilFunction(){
  evaluation("mobilArgument");
}
function desktopFunction(){
  evaluation("desktopArgument");
}
function asideFunction(){
  evaluation("asideArgument");
}
function setOnDark(){
  backgroundFade.classList.remove("inactive");
  delayBackground()
  body.classList.add("scroll-off");
}
function setOffDark(){
  backgroundFade.classList.remove("background-dark");
  delayInactive();
  body.classList.remove("scroll-off");
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
    setOnDark();
  }
  if(mobileMenu.classList.contains('mobile-menu-hide') && desktopMenu.classList.contains('desktop-menu-hide') && aside.classList.contains('product-detail-hide')){
    setOffDark();
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
  productDetalItem.classList.add("active");
  // setOnDark();
  backgroundFade.classList.remove("inactive");
  delayBackground()
  // body.classList.add("scroll-off");

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

function activeBanner(){
  bannerTop.classList.remove("inactive");
  bannerTop.classList.add("active");
  setOnDark();
 
  setTimeout(()=>{
    bannerTop.classList.remove("active");
    bannerTop.classList.add("inactive");
    // setOffDark();
    backgroundFade.classList.remove("background-dark");
    delayInactive();
    // body.classList.remove("scroll-off");
  },1500);
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
  activeBanner();
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
  productDetalItem.classList.remove("active");
  setOffDark();
}

const productList = [];

productList.push({
  category: 'tools',
  name: 'Separadora de pantalla',
  price: 1190,
  image: 'https://m.media-amazon.com/images/I/71ST-RSRfFL._AC_SL1500_.jpg',
});
productList.push({
  category: 'tools',
  name: 'Separadora de pantalla LCD',
  price: 1052,
  image: 'https://m.media-amazon.com/images/I/41wvzxwA5UL._AC_.jpg',
});
productList.push({
  category: 'tools',
  name: 'Separadora de pantalla',
  price: 1032,
  image: 'https://m.media-amazon.com/images/I/61f1PfgQXYL._AC_SL1001_.jpg',
});
productList.push({
  category: 'tools',
  name: 'Almohadilla de Calefacción Portátil',
  price: 1455,
  image: 'https://m.media-amazon.com/images/I/61Nk4eY-k1L._AC_SL1500_.jpg',
});
productList.push({
  category: 'tools',
  name: 'Abrazadera de fijación',
  price: 267,
  image: 'https://m.media-amazon.com/images/I/61vAsvgA9VL._AC_SL1500_.jpg',
});


productList.push({
  category: 'screens',
  name: 'Pantalla LCD',
  price: 488,
  image: 'https://m.media-amazon.com/images/I/61+I00feV9L._AC_SL1100_.jpg',
});
productList.push({
  category: 'screens',
  name: 'Pantalla LCD',
  price: 504,
  image: 'https://m.media-amazon.com/images/I/51wU8SLM13L._AC_.jpg',
});
productList.push({
  category: 'glue',
  name: 'T7000 50ml Pegamento',
  price: 120,
  image: 'https://m.media-amazon.com/images/I/41c8hKlbvhL._SX425_.jpg',
});
productList.push({
  category: 'glue',
  name: 'B7000 50ml Pegamento',
  price: 115,
  image: 'https://m.media-amazon.com/images/I/31y6HFmlawL.jpg',
});


productList.push({
  category: 'cells',
  name: 'Xiaomi Celular Redmi 12C',
  price: 2048,
  image: 'https://m.media-amazon.com/images/I/51cU7HevYPL._AC_SL1000_.jpg',
});
productList.push({
  category: 'cells',
  name: 'DOOGEE N50 2023',
  price: 3204,
  image: 'https://m.media-amazon.com/images/I/71455e5RWrL._AC_SL1500_.jpg',
});
productList.push({
  category: 'cells',
  name: 'Samsung Galaxy S20 Plus',
  price: 6499,
  image: 'https://m.media-amazon.com/images/I/61kaZwuwdzL._AC_SL1200_.jpg',
});
productList.push({
  category: 'cells',
  name: 'SAMSUNG Galaxy M23',
  price: 6999,
  image: 'https://m.media-amazon.com/images/I/61nNowhLzwL._AC_SL1500_.jpg',
});
productList.push({
  category: 'cells',
  name: 'motorola Edge 30 Neo',
  price: 6999,
  image: 'https://m.media-amazon.com/images/I/61F2s51MtVL._AC_SL1500_.jpg',
});
productList.push({
  category: 'cells',
  name: 'Celular Poco X5 Pro 5G Black',
  price: 5799,
  image: 'https://m.media-amazon.com/images/I/71BJz1Hyz6L._AC_SL1000_.jpg',
});

function origin(event){
  if(event.target.className == "desktop-all"){
    renderProducts(productList, 'all');
  }
  else if(event.target.className == "desktop-cells"){
    renderProducts(productList, 'cells');
  }
  else if(event.target.className == "desktop-tools"){
    renderProducts(productList, 'tools');
  }
  else if(event.target.className == "desktop-screens"){
    renderProducts(productList, 'screens');
  }
  else if(event.target.className == "desktop-glue"){
    renderProducts(productList, 'glue');
  }
  else if(event.target.className == "desktop-kits"){
    renderProducts(productList, 'kits');
  }
}
function allf(){
  cardsContainer.remove(".product-card");
}

function renderProducts(arr, category) {
  
  for (product of arr) {
    if(product.category == category){
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
}




