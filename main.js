// body
const body = document.querySelector(".body");
let width; 
let height = body.offsetHeight;

// ###################################### var & const #########################################

// icon menu mobile navbar
const menuIconMobil = document.querySelector('.menu-icon-mobil');
// nav menu
const navMenu = document.querySelector('.nav-menu');

// icon menu desktop navbar
const menuTextDesktop = document.querySelector('.menu-text-desktop');
// menu share
const current = document.querySelector('.current');

// div counter
const counter = document.querySelector(".counter");
// icon shopping cart desktop navbar
const navbarCartContainer= document.querySelector('.navbar-cart-container');
// checkout window
const checkout = document.querySelector('.checkout');

// dark
const backgroundFade = document.querySelector(".dark");

// menu options
const desktopAll = document.querySelector(".desktop-all");
const desktopCells = document.querySelector(".desktop-cells");
const desktopTools = document.querySelector(".desktop-tools");
const desktopScreens = document.querySelector(".desktop-screens");
const desktopGlue = document.querySelector(".desktop-glue");
const desktopkits = document.querySelector(".desktop-kits");

// main page products
const cardsContainer = document.querySelector('.cards-container');

// products added
const myOrderContent = document.querySelector(".my-order-content");

// product-details
const productDetalItem = document.querySelector(".product-detail-item");
const productDetailsClose = document.querySelector(".product-detail-close");
const imgSrc = document.querySelector(".img-src");
const priceDetail = document.querySelector(".price-detail");
const nameTitle = document.querySelector(".name-Title");
const descriptionDetail = document.querySelector(".description-detail");
const addToCartButton = document.querySelector(".add-to-cart-button");

// total amount
const order = document.querySelector(".order");
const totalAmount = document.querySelector(".total-Amount");

// banner empty message
const cartEmpty = document.querySelector(".cart-empty")
const primaryButton = document.querySelector(".primary-button")

// main page products
const mainContainer = document.querySelector('.main-container');

// banner
const bannerTop = document.querySelector(".banner-top");


// ##################################### addEventListeners #########################################

// icon menu mobile navbar
menuIconMobil.addEventListener('click', mobilFunction);

// icon menu desktop navbar
menuTextDesktop.addEventListener('click', desktopFunction);

// icon shopping cart desktop navbar
navbarCartContainer.addEventListener('click', asideFunction);

// dark
backgroundFade.addEventListener("click", closeAll);

// menu options
desktopAll.addEventListener("click", origin);
desktopCells.addEventListener("click", origin);
desktopTools.addEventListener("click", origin);
desktopScreens.addEventListener("click", origin);
desktopGlue.addEventListener("click", origin);
desktopkits.addEventListener("click", origin);

// product-details
productDetailsClose.addEventListener("click", productDetailsCloseFn);


// ######################################### functions #########################################

// icon menu mobile navbar
function mobilFunction(){
  evaluation("mobilArgument");
}

// icon menu desktop navbar
function desktopFunction(){
  evaluation("desktopArgument");
}

// icon shopping cart desktop navbar
function asideFunction(){
  evaluation("asideArgument");
}

// dark
function closeAll(){
  if(width < 640){
    scaleItemClose();
  };
  checkout.classList.remove('check-out-active');
  menuIconMobil.classList.remove("menu-ico-mobil-open");
  navMenu.classList.remove('mobile-menu-active');
  current.classList.remove('desktop-menu-active');
  setOffDark();
}

// setting dark on
function setOnDark(){
  backgroundFade.classList.remove("inactive");
  delayBackground()
  body.classList.add("scroll-off");
}
// delay dark on
function delayBackground(){
  setTimeout(()=>{
    backgroundFade.classList.add("background-dark");
  }, 100);
}
// setting dark off
function setOffDark(){
  backgroundFade.classList.remove("background-dark");
  delayInactive();
  body.classList.remove("scroll-off");
}
// delay dark off
function delayInactive(){
  setTimeout(()=>{
    backgroundFade.classList.add("inactive");
  }, 700);
}

// scroll 0
function scrollTop(){
  checkout.scrollTop = 0;
  productDetalItem.scrollTop = 0;
  cardsContainer.scrollTop = 0;
}

// clear items DOM
function clearAllproducts(){
  cardsContainer.innerHTML = "";
}

// evaluation menus opened
function evaluation(status){
  scaleItemClose();
  
  if(status == "mobilArgument"){
    checkout.classList.remove('check-out-active');
    current.classList.remove('desktop-menu-active');
    menuIconMobil.classList.toggle("menu-ico-mobil-open");
    navMenu.classList.toggle('mobile-menu-active');
  }
  if(status == "desktopArgument"){
    checkout.classList.remove('check-out-active');
    navMenu.classList.remove('mobile-menu-active');
    menuIconMobil.classList.remove("menu-ico-mobil-open");
    current.classList.toggle('desktop-menu-active');
  }
  if(status == "asideArgument"){
    menuIconMobil.classList.remove("menu-ico-mobil-open");
    navMenu.classList.remove('mobile-menu-active');
    current.classList.remove('desktop-menu-active');
    checkout.classList.toggle('check-out-active');
  }
  if(menuIconMobil.classList.contains('menu-ico-mobil-open') && navMenu.classList.contains('mobile-menu-active') || checkout.classList.contains('check-out-active') || current.classList.contains('desktop-menu-active')){
    setOnDark();
  }
  if(!menuIconMobil.classList.contains('menu-ico-mobil-open') && !navMenu.classList.contains('mobile-menu-active') && !checkout.classList.contains('check-out-active') && !current.classList.contains('desktop-menu-active')){
    setOffDark();
  }
  scrollTop();
}

// menu options
function origin(event){
  closeAll();
  
  if(event.target.innerText == "All"){
    renderProducts(productList, 'all');
  }
  else if(event.target.innerText == "Cells"){
    renderProducts(productList, 'cells');
  }
  else if(event.target.innerText == "Tools"){
    renderProducts(productList, 'tools');
  }
  else if(event.target.innerText == "Screens"){
    renderProducts(productList, 'screens');
  }
  else if(event.target.innerText == "Glue"){
    renderProducts(productList, 'glue');
  }
  else if(event.target.innerText == "kits"){
    renderProducts(productList, 'kits');
  }
}

// main page products
function renderProducts(array, filter) {
  clearAllproducts();
  for (product of array) {
    if(product.category == filter || filter == "all"){
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('id', 'cart-img');
      productImgCart.setAttribute('src', './icons/cart.svg');
      productImgCart.addEventListener("click", addToCart);
      const productInfoFigure = document.createElement('figure');
      productInfoFigure.appendChild(productImgCart);
  
      const productDefinition = document.createElement('p');
      productDefinition.innerText = product.definition;
      const productDefinitionDiv = document.createElement('div');
      productDefinitionDiv.setAttribute("class", "product-definition")
      productDefinitionDiv.appendChild(productDefinition);

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
      productTextcontainer.append(productInfoDiv, productDescriptionDiv,productDefinitionDiv);
  
      const productInfo = document.createElement('div');
      productInfo.setAttribute("class", 'product-info');
      productInfo.append(productTextcontainer, productInfoFigure);
  
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener('click', productDetailsOpen);
  
      const productCardContainer = document.createElement('div');
      productCardContainer.setAttribute("class", 'product-card');
      productCardContainer.append(productImg, productInfo);
  
      cardsContainer.appendChild(productCardContainer);
    }
  }
}

// check cart items
function checkCart(){
  if(amount == 0){
    order.classList.add("inactive");
    order.classList.remove("order-display-on");
    primaryButton.classList.add("inactive");
    cartEmpty.classList.remove("inactive");
  }else{
    order.classList.remove("inactive");
    order.classList.add("order-display-on");
    primaryButton.classList.remove("inactive");
    cartEmpty.classList.add("inactive");
  }
}

// active banner 
function activeBanner(){
  bannerTop.classList.remove("inactive");
  setOnDark();

  setTimeout(()=>{
    bannerTop.classList.add("inactive");
    setOffDark();
  },700);
}

// products added
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
    priceCart = event.target.parentElement.childNodes[1].childNodes[3].textContent;
  }

  const cartCloseContainer = document.createElement("div");
  cartCloseContainer.setAttribute("class", "item-delete");
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

// remove items from checkout window
let amount = 0;
let numItems = 0;
counter.innerHTML = numItems;
function clear(event){
  myOrderContent.removeChild(event.target.parentElement)
  numItems--;
  counter.innerHTML = numItems;
  
  amount -= Number(event.target.parentElement.childNodes[2].childNodes[1].innerText);
  totalAmount.innerText = `$ ${amount}`;
  checkCart();
}

// preview from photo card
function productDetailsOpen(event){
  const imgSelect = event.target.currentSrc;
  const price = event.target.parentElement.childNodes[1].childNodes[0].childNodes[0].childNodes[1].innerText;
  const title = event.target.parentElement.childNodes[1].childNodes[0].childNodes[1].innerText;
  const description = event.target.parentElement.childNodes[1].childNodes[0].childNodes[2].innerText
 
  imgSrc.setAttribute("src", imgSelect);
  nameTitle.innerText = title;
  priceDetail.innerText = price;
  descriptionDetail.innerHTML = description;

  addToCartButton.addEventListener("click", addToCart);
  width = body.offsetWidth;
  if(width < 640){
    setOnDark();
  };
  scaleItemOpen();
  scrollTop();
}

// product-detail=items
function productDetailsCloseFn(){
  if(width < 640){
    setOffDark();
  };
  scaleItemClose();
  scrollTop();
}

function scaleItemOpen(){
  mainContainer.classList.add("window");
  setTimeout(()=>{
    productDetalItem.classList.add("product-detail-item-max");
  },50);

}
function scaleItemClose(){
  productDetalItem.classList.remove("product-detail-item-max");
  setTimeout(()=>{
    mainContainer.classList.remove("window");
  },500);
  
}
checkCart();

