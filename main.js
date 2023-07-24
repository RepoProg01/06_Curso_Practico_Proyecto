// ######################################### var & const #########################################
// body
const body = document.querySelector(".body");
// ------------------------------------------- navbar ---------------------------------------------
// menu hamburgesa icon
const menuHamIcon = document.querySelector('.menu');
// mobile menu
const mobileMenu = document.querySelector('.mobile-menu');
// desktop menus
const desktopAll = document.querySelectorAll(".desktop-all");
const desktopCells = document.querySelectorAll(".desktop-cells");
const desktopTools = document.querySelectorAll(".desktop-tools");
const desktopScreens = document.querySelectorAll(".desktop-screens");
const desktopGlue = document.querySelectorAll(".desktop-glue");
const desktopkits = document.querySelectorAll(".desktop-kits");
// menu desktop icon
const menuDesktop = document.querySelector('.navbar-desktop');
// desktop menu
const desktopMenu = document.querySelector('.desktop-menu');
// shopping cart icon
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
// shopping cart window
const aside = document.querySelector('.product-detail');
const myOrderContent = document.querySelector(".my-order-content");
const order = document.querySelector(".order");
const totalAmount = document.querySelector(".total-Amount");
const cartEmpty = document.querySelector(".cart-empty")
const primaryButton = document.querySelector(".primary-button")
// shopping cart counter
const counter = document.querySelector(".counter");
// fade background
const backgroundFade = document.querySelector(".dark");
// banner
const bannerTop = document.querySelector(".banner-top");

// -------------------------------------------- products ---------------------------------------------
// main-container
const cardsContainer = document.querySelector('.cards-container');
// const productCards = document.querySelectorAll('.product-card');
// -------------------------------------------- details ----------------------------------------------
// product-detail=items
const productDetalItem = document.querySelector(".product-detail-item");
const productDetailsCl = document.querySelector(".product-detail-close");
const imgSrc = document.querySelector(".img-src");
const priceDetail = document.querySelector(".price-detail");
const nameTitle = document.querySelector(".name-Title");
const descriptionDetail = document.querySelector(".description-detail");
const addToCartButton = document.querySelector(".add-to-cart-button");

let amount = 0;
let numItems = 0;
counter.innerHTML = numItems;

// ######################################### Array & objects #########################################
const productList = [];
// objects products

// Cells
productList.push({
  category: 'cells',
  name: 'Xiaomi Celular Redmi',
  price: 3834,
  image: 'https://m.media-amazon.com/images/I/61LvXyda+6L._AC_SL1000_.jpg',
  definition: "Xiaomi Celular Redmi Note 12S 8GB 256GB Negro Onix Desbloqueado 2303ERA42L"
});
productList.push({
  category: 'cells',
  name: 'Xiaomi Celular Poco',
  price: 3333,
  image: 'https://m.media-amazon.com/images/I/51aQ+dft2nL._AC_SL1000_.jpg',
  definition: "Xiaomi Celular Poco M5s Blue 8GB Ram 256GB ROM"
});
productList.push({
  category: 'cells',
  name: 'Xiaomi Celular Redmi Note',
  price: 3336,
  image: 'https://m.media-amazon.com/images/I/51UhkQTNxmL._AC_SL1000_.jpg',
  definition: "Xiaomi Celular Redmi Note 11S Graphite Gray 8Gb Ram 128Gb ROM"
});
productList.push({
  category: 'cells',
  name: 'SAMSUNG Galaxy M14 5G Azul',
  price: 4999,
  image: 'https://m.media-amazon.com/images/I/71ktEUgiLUL._AC_SL1500_.jpg',
  definition: "SAMSUNG Galaxy M14 5G Azul"
});
productList.push({
  category: 'cells',
  name: 'XIAOMI REDMI 9A',
  price: 1503,
  image: 'https://m.media-amazon.com/images/I/71UHrexGN5L._AC_SL1500_.jpg',
  definition: "XIAOMI REDMI 9A 2GB 32GB GRIS DESBLOQUEADO"
});
productList.push({
  category: 'cells',
  name: 'Apple iPhone 11',
  price: 6590,
  image: 'https://m.media-amazon.com/images/I/31PpUfTCiFL._AC_.jpg',
  definition: "Apple iPhone 11, Totalmente Desbloqueado, 64GB, Negro (Reacondicionado)"
});
// Tools
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
  name: 'Almohadilla de Calefacción',
  price: 1455,
  image: 'https://m.media-amazon.com/images/I/61Nk4eY-k1L._AC_SL1500_.jpg',
});
productList.push({
  category: 'tools',
  name: 'Abrazadera de fijación',
  price: 267,
  image: 'https://m.media-amazon.com/images/I/61vAsvgA9VL._AC_SL1500_.jpg',
});
// Screens
productList.push({
  category: 'screens',
  name: 'MEPED Pantalla LCD',
  price: 429,
  image: 'https://m.media-amazon.com/images/I/61aM4ckUnFL._AC_SL1000_.jpg',
  definition: "MEPED Pantalla LCD Compatible con Huawei Y9 2019 Jkm-lx1 Lx2 Lx3 LCD, Display Digitalizador de Pantalla para Y9 2019 Jkm-lx1 Lx2 Lx3"
});
productList.push({
  category: 'screens',
  name: ' Pantalla táctil de repuesto',
  price: 646.,
  image: 'https://m.media-amazon.com/images/I/61fY-7iF27L._AC_SL1500_.jpg',
  definition: "HYYT - Pantalla táctil de repuesto para Huawei Y9 Prime 2019 6,6 pulgadas LCD digitalizador de pantalla táctil + un conjunto de herramientas (negro)"
});
productList.push({
  category: 'screens',
  name: 'Yodoit Pantalla para iPhone 11',
  price: 549,
  image: 'https://m.media-amazon.com/images/I/61q9aXltpLL._AC_SL1200_.jpg',
  definition: "Yodoit Pantalla para iPhone 11 Reemplazo Negro, 6.1 Pulgadas Display y Digitalizador Táctil Vidrio con Herramientas, Compatible con Modello A2111, A2221, A2223"
});
productList.push({
  category: 'screens',
  name: 'Yodoit Pantalla para Huawei ',
  price: 599,
  image: 'https://m.media-amazon.com/images/I/617GONNLEpS._AC_SL1200_.jpg',
  definition: "Yodoit Pantalla para Huawei Y9 2019 / Enjoy 9 Plus, 6,5 LCD Táctil Digitalizador Cristal Reemplazo con Herramienta de reparación Negro"
});
productList.push({
  category: 'screens',
  name: 'Reemplazo de Pantalla Huawei',
  price: 753,
  image: 'https://m.media-amazon.com/images/I/61gySA55GeL._AC_SL1500_.jpg',
  definition: "Reemplazo de Pantalla Huawei, Montaje de Digitalizador de Pantalla LCD Táctil 3D para Huawei para Nova 5T, para Honor 20 YAL-L21 L61A L61D L71A con Herramientas de Reparación Completas"
});
productList.push({
  category: 'screens',
  name: 'Pantalla LCD OEM para Huawei',
  price: 1117,
  image: 'https://m.media-amazon.com/images/I/61dIsVoejFL._AC_SL1100_.jpg',
  definition: "Pantalla LCD OEM para Huawei Honor 20 / Nova 5T Digitizer Ensamblaje Completo con Marco"
});
// Glue
productList.push({
  category: 'glue',
  name: 'ewrTM00sdQ Pegamento',
  price: 139,
  image: 'https://m.media-amazon.com/images/I/61N8AKWnpIL._SL1500_.jpg',
  definition: "ewrTM00sdQ Pegamento calcomanía negro, sin olor, flexible, sin olor, T-7000, alta pureza, ecológico, 2 unidades, 15 ml"
});
productList.push({
  category: 'glue',
  name: 'B7000 Pegamento',
  price: 781,
  image: 'https://m.media-amazon.com/images/I/71KjakUWD-L._SL1500_.jpg',
  definition: "B7000 Pegamento adhesivo de diamantes de imitación para manualidades, 2 piezas 110 ml / 3.7 fl oz B7000 Pegamento transparente con 5 bolígrafos de puntos, lápiz de cera y pinzas, pegamento de joyería para manualidades, maquillaje, zapatos, joyería, arte de uñas"
});
productList.push({
  category: 'glue',
  name: 'Eclectic 570110, transparente',
  price: 300,
  image: 'https://m.media-amazon.com/images/I/61cYJzUC4hL._AC_SL1000_.jpg',
  definition: "Eclectic 570110, transparente 0.9 onzas líquidas E6000+Plus calcomanía multiusos, 0.9 onzas, 0.9 onzas"
});
productList.push({
  category: 'glue',
  name: 'Flex Super Glue',
  price: 249.,
  image: 'https://m.media-amazon.com/images/I/81Ui5+UYyyL._SL1500_.jpg',
  definition: "Flex Super Glue, Adhesivo en Gel de Secado Rápido Cianoacrilato, Alto Rendimiento, Fijacíon Super Fuerte, Durabilidad Extrema, Fijación Inmediata, Transparente, Botella de 15 gramos"
});
productList.push({
  category: 'glue',
  name: 'Kit de 2 piezas de pegamento negro',
  price: 480,
  image: 'https://m.media-amazon.com/images/I/61gFHV5E+ML._SL1280_.jpg',
  definition: "Kit de 2 piezas de pegamento negro T7000 de 110 ml para teléfono celular, computadora, electrónica, kit de herramientas de reparación adhesiva, caja de marco de visualización LCD de goma, tela de plástico, arte, manualidades, suministros de manualidades, impermeable, pegamento universal de precisión"
});
productList.push({
  category: 'glue',
  name: 'T-7000 - Pegamento',
  price: 1154,
  image: 'https://m.media-amazon.com/images/I/619VnErU52L._SL1500_.jpg',
  definition: "T-7000 - Pegamento apto para reparación, multiusos, de alto rendimiento, industrial, semilíquido, adhesivo negro (50 ml, 1 paquete)"
});
// Kits
productList.push({
  category: 'kits',
  name: 'Kit de Reparación',
  price: 224,
  image: 'https://m.media-amazon.com/images/I/61eGDSi1SAL._AC_SL1500_.jpg',
  definition: "Kit de Reparación de Electrónica, Smartphone, Computadora Y Tableta, Kit de Reparación de Herramienta de Palanca de Apertura de Electrónica Profesional para Mantenimiento de Electrónica"
});
productList.push({
  category: 'kits',
  name: 'Herramientas de extracción',
  price: 299,
  image: 'https://m.media-amazon.com/images/I/61q+FB0XKKL._AC_SL1000_.jpg',
  definition: "Juego de 10, kit de herramientas de extracción de recorte automático, kit de herramientas de palanca de instalador de extracción de radio del panel del coche findTop, kit de eliminación de tapicería, raspador de barra de palanca de removedor de sujetador - azul y rojo"
});
productList.push({
  category: 'kits',
  name: 'Destornilladores de precisión',
  price: 309,
  image: 'https://m.media-amazon.com/images/I/71FI6aew5dL._AC_SL1128_.jpg',
  definition: "Kit de Destornilladores de precisión 130 en 1 – AFujia Juego de Herramientas Magnéticas de Reparación Electrónica Profesional para iPhone, Computadora, Xbox Macbook PS4, PC"
});
productList.push({
  category: 'kits',
  name: 'Pinzas Precisión Kit',
  price: 249.,
  image: 'https://m.media-amazon.com/images/I/71TxKEynq7L._AC_SL1000_.jpg',
  definition: "PUBUNUS Pinzas Precisión Kit, 9 Piezas Pinzas ESD Conjunto, Anti-estática de Aacero Inoxidable, Pinzas no Magnéticas Pinzas Fijadas para Artesanía, Joyería, Electrónica, Trabajo de Laboratorio, Ceja y Pelo Encarnado"
});
productList.push({
  category: 'kits',
  name: 'Pinzas de Precision',
  price: 157.,
  image: 'https://m.media-amazon.com/images/I/51yoNRjHA7L._AC_.jpg',
  definition: "Bauihr Pinzas de Precision, 9 Piezas Pinzas ESD Conjunto, Antiácidas Tweezers de Acero Inoxidable Para Trabajos de Laboratorio, Electrónica, Manualidades, Joyería, Soldadura"
});
productList.push({
  category: 'kits',
  name: 'Destornilladores de precisión',
  price: 149,
  image: 'https://m.media-amazon.com/images/I/61D6JGq-JKL._AC_SL1200_.jpg',
  definition: "Kit de Destornilladores de precisión 25 en 1 – AFujia Juego de Herramientas de Reparación Electrónica Profesional con Caja Portátil para iPhone, Computadora, Xbox Macbook PS4, PC"
});

// ######################################### addEventListeners #########################################
// ------------------------------------------- navbar ---------------------------------------------
// menu hamburgesa icon
menuHamIcon.addEventListener('click', mobilFunction);
// desktop menus
desktopAll[0].addEventListener("click", origin);
desktopAll[1].addEventListener("click", origin);

desktopCells[0].addEventListener("click", origin);
desktopCells[1].addEventListener("click", origin);

desktopTools[0].addEventListener("click", origin);
desktopTools[1].addEventListener("click", origin);

desktopScreens[0].addEventListener("click", origin);
desktopScreens[1].addEventListener("click", origin);

desktopGlue[0].addEventListener("click", origin);
desktopGlue[1].addEventListener("click", origin);

desktopkits[0].addEventListener("click", origin);
desktopkits[1].addEventListener("click", origin);

// menu desktop icon
menuDesktop.addEventListener('click', desktopFunction);
// shopping cart icon
menuCarritoIcon.addEventListener('click', asideFunction);
// product-detail=items
productDetailsCl.addEventListener("click", productDetailsClose);
// fade background
backgroundFade.addEventListener("click", closeAll);

// ######################################### functions #########################################
// ------------------------------------------- navbar ---------------------------------------------
// menu hamburgesa icon
function mobilFunction(){
  evaluation("mobilArgument");
}
// menu desktop icon
function desktopFunction(){
  evaluation("desktopArgument");
}
// shopping cart icon
function asideFunction(){
  evaluation("asideArgument");
}
// evaluation menus opened
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
// fade background
function closeAll(){
  mobileMenu.classList.add('mobile-menu-hide');
  menuHamIcon.classList.remove("menu-open");
  desktopMenu.classList.add('desktop-menu-hide');
  aside.classList.add('product-detail-hide');
  setOffDark();
}
function setOnDark(){
  backgroundFade.classList.remove("inactive");
  delayBackground()
  body.classList.add("scroll-off");
}
function delayBackground(){
  setTimeout(()=>{
    backgroundFade.classList.add("background-dark");
  }, 100);
}
function setOffDark(){
  backgroundFade.classList.remove("background-dark");
  delayInactive();
  body.classList.remove("scroll-off");
}
function delayInactive(){
  setTimeout(()=>{
    backgroundFade.classList.add("inactive");
  }, 700);
}
// main-container
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
  productDetalItem.classList.remove("inactive");
  productDetalItem.classList.add("active");
  setOnDark();
  delayBackground()
  body.classList.add("scroll-off");
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
    setOffDark();
  },1500);
}
function clear(event){
  myOrderContent.removeChild(event.target.parentElement)
  numItems--;
  counter.innerHTML = numItems;
  
  amount -= Number(event.target.parentElement.childNodes[2].childNodes[1].innerText);
  totalAmount.innerText = `$ ${amount}`;
  checkCart();
}
// render trigers
function origin(event){
  closeAll();
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
// render function
function renderProducts(arr, category) {
  clearAllproducts();
  for (product of arr) {
    if(product.category == category || category == "all"){
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
// product-detail=items
function productDetailsClose(){
  productDetalItem.classList.add("inactive");
  productDetalItem.classList.remove("active");
  setOffDark();
}
function clearAllproducts(){
  cardsContainer.innerHTML = "";
}
checkCart();
