let bottomElement = document.querySelector(".bottom");
let topLeftElement = document.querySelector(".top-left");
let topRightElement = document.querySelector(".top-right");
let copyColorElement = document.querySelector("#sk-color-copy > input");
let spanFTop = document.querySelector("#sk-color-copy > span");

let topColor;

const pickrBottom = Pickr.create({
  el: ".color-picker-bottom",
  theme: "classic", // or 'monolith', or 'nano'

  swatches: [
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)",
    "rgba(0, 188, 212, 0.7)",
    "rgba(0, 150, 136, 0.75)",
    "rgba(76, 175, 80, 0.8)",
    "rgba(139, 195, 74, 0.85)",
    "rgba(205, 220, 57, 0.9)",
    "rgba(255, 235, 59, 0.95)",
    "rgba(255, 193, 7, 1)",
  ],

  components: {
    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: false,
      rgba: false,
      hsla: false,
      hsva: false,
      cmyk: false,
      input: false,
      clear: true,
      save: true,
    },
  },
});

pickrBottom.on("change", (color, source, instance) => {
  let colorId = color.toRGBA();
  // console.log('Event: "change"', color.toRGBA());
  bottomElement.style.backgroundColor = `rgba(${colorId[0]},${colorId[1]},${colorId[2]},${colorId[3]})`;
});

const pickrTop = Pickr.create({
  el: ".color-picker-top",
  theme: "classic", // or 'monolith', or 'nano'

  swatches: [
    "rgba(244, 67, 54, 1)",
    "rgba(233, 30, 99, 0.95)",
    "rgba(156, 39, 176, 0.9)",
    "rgba(103, 58, 183, 0.85)",
    "rgba(63, 81, 181, 0.8)",
    "rgba(33, 150, 243, 0.75)",
    "rgba(3, 169, 244, 0.7)",
    "rgba(0, 188, 212, 0.7)",
    "rgba(0, 150, 136, 0.75)",
    "rgba(76, 175, 80, 0.8)",
    "rgba(139, 195, 74, 0.85)",
    "rgba(205, 220, 57, 0.9)",
    "rgba(255, 235, 59, 0.95)",
    "rgba(255, 193, 7, 1)",
  ],

  components: {
    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: false,
      rgba: false,
      hsla: false,
      hsva: false,
      cmyk: false,
      input: false,
      clear: true,
      save: true,
    },
  },
});

pickrTop.on("change", (color, source, instance) => {
  let colorId = color.toRGBA();
  topColor = colorId;
  // console.log('Event: "change"', color.toRGBA());
  topLeftElement.style.backgroundColor = `rgba(${colorId[0]},${colorId[1]},${colorId[2]},${colorId[3]})`;
  topRightElement.style.backgroundColor = `rgba(${colorId[0]},${colorId[1]},${colorId[2]},${colorId[3]})`;
});

copyColorElement.addEventListener("click", function () {
  bottomElement.style.backgroundColor = `rgba(${topColor[0]},${topColor[1]},${topColor[2]},${topColor[3]})`;
  spanFTop.style.background = `rgba(${topColor[0]},${topColor[1]},${topColor[2]},${topColor[3]})`;
});

const abstraction = [
  {
    id:1207,
    link:"images/abstraction/image1207.jpg"
  },
  {
    id:1206,
    link:"images/abstraction/image1206.jpg"
  },
  {
    id:1205,
    link:"images/abstraction/image1205.jpg"
  },
  {
    id:1204,
    link:"images/abstraction/image1204.jpg"
  },
  {
    id:1207,
    link:"images/abstraction/image1207.jpg"
  },
  {
    id:1206,
    link:"images/abstraction/image1206.jpg"
  },
  {
    id:1205,
    link:"images/abstraction/image1205.jpg"
  },
  {
    id:1204,
    link:"images/abstraction/image1204.jpg"
  },
  {
    id:1207,
    link:"images/abstraction/image1207.jpg"
  },
  {
    id:1206,
    link:"images/abstraction/image1206.jpg"
  },
  {
    id:1205,
    link:"images/abstraction/image1205.jpg"
  },
  {
    id:1204,
    link:"images/abstraction/image1204.jpg"
  },
  {
    id:1207,
    link:"images/abstraction/image1207.jpg"
  },
  {
    id:1206,
    link:"images/abstraction/image1206.jpg"
  },
  {
    id:1205,
    link:"images/abstraction/image1205.jpg"
  },
  {
    id:1204,
    link:"images/abstraction/image1204.jpg"
  },
  {
    id:1207,
    link:"images/abstraction/image1207.jpg"
  },
  {
    id:1206,
    link:"images/abstraction/image1206.jpg"
  },
  {
    id:1205,
    link:"images/abstraction/image1205.jpg"
  },
  {
    id:1204,
    link:"images/abstraction/image1204.jpg"
  },
  {
    id:1207,
    link:"images/abstraction/image1207.jpg"
  },
  {
    id:1206,
    link:"images/abstraction/image1206.jpg"
  },
  {
    id:1205,
    link:"images/abstraction/image1205.jpg"
  },
  {
    id:1204,
    link:"images/abstraction/image1204.jpg"
  },
  {
    id:1207,
    link:"images/abstraction/image1207.jpg"
  },
  {
    id:1206,
    link:"images/abstraction/image1206.jpg"
  },
  {
    id:1205,
    link:"images/abstraction/image1205.jpg"
  },
  {
    id:1204,
    link:"images/abstraction/image1204.jpg"
  },
  {
    id:1207,
    link:"images/abstraction/image1207.jpg"
  },
  {
    id:1206,
    link:"images/abstraction/image1206.jpg"
  },
  {
    id:1205,
    link:"images/abstraction/image1205.jpg"
  },
  {
    id:1204,
    link:"images/abstraction/image1204.jpg"
  },
  {
    id:1207,
    link:"images/abstraction/image1207.jpg"
  },
  {
    id:1206,
    link:"images/abstraction/image1206.jpg"
  },
  {
    id:1205,
    link:"images/abstraction/image1205.jpg"
  },
  {
    id:1204,
    link:"images/abstraction/image1204.jpg"
  },
  {
    id:1207,
    link:"images/abstraction/image1207.jpg"
  },
  {
    id:1206,
    link:"images/abstraction/image1206.jpg"
  },
  {
    id:1205,
    link:"images/abstraction/image1205.jpg"
  },
  {
    id:1204,
    link:"images/abstraction/image1204.jpg"
  },
  {
    id:1207,
    link:"images/abstraction/image1207.jpg"
  },
  {
    id:1206,
    link:"images/abstraction/image1206.jpg"
  },
  {
    id:1205,
    link:"images/abstraction/image1205.jpg"
  },
  {
    id:1204,
    link:"images/abstraction/image1204.jpg"
  },
];

const cities = [
  {
    id:2179,
    link:"images/cities/image2179.jpg"
  },
  {
    id:2178,
    link:"images/cities/image2178.jpg"
  },
  {
    id:2177,
    link:"images/cities/image2177.jpg"
  },
  {
    id:2176,
    link:"images/cities/image2176.jpg"
  },
 
];

const flowers = [
  {
    id:3409,
    link:"images/flowers/image3409.jpg"
  },
  {
    id:3408,
    link:"images/flowers/image3408.jpg"
  },
  {
    id:3407,
    link:"images/flowers/image3407.jpg"
  },
  {
    id:3406,
    link:"images/flowers/image3406.jpg"
  },
];

const eatsAndDrinks = [
  {
    id:4138,
    link:"images/eatsAndDrinks/image4138.jpg"
  },
  {
    id:4137,
    link:"images/eatsAndDrinks/image4137.jpg"
  },
  {
    id:4136,
    link:"images/eatsAndDrinks/image4136.jpg"
  },
  {
    id:4135,
    link:"images/eatsAndDrinks/image4135.jpg"
  },
];

const nature = [
  {
    id:5196,
    link:"images/natura/image5196.jpg"
  },
  {
    id:5195,
    link:"images/natura/image5195.jpg"
  },
  {
    id:5194,
    link:"images/natura/image5194.jpg"
  },
  {
    id:5172,
    link:"images/natura/image5172.jpg"
  },

 
];

const sea = [
  {
    id:6039,
    link:"images/sea/image6039.jpg",
  },
  {
    id:6073,
    link:"images/sea/image6073.jpg",
  },
  {
    id:6083,
    link:"images/sea/image6083.jpg",
  },
  {
    id:6093,
    link:"images/sea/image6093.jpg",
  },
];

const bridges = [
  {
    id:7043,
    link:"images/bridges/image7043.jpg",
  },
  {
    id:7053,
    link:"images/bridges/image7053.jpg",
  },
  {
    id:7063,
    link:"images/bridges/image7063.jpg",
  },
  {
    id:7073,
    link:"images/bridges/image7073.jpg",
  },
];

const texture = [
  {
    id:8191,
    link:"images/texture/image8191.jpg",
  },
  {
    id:8192,
    link:"images/texture/image8192.jpg",
  },
  {
    id:8193,
    link:"images/texture/image8193.jpg",
  },
  {
    id:8197,
    link:"images/texture/image8197.jpg",
  },
];

const patterns = [
  {
    id:9030,
    link:"images/patterns/image9030.jpg",
  },
  {
    id:9103,
    link:"images/patterns/image9103.jpg",
  },
  {
    id:9113,
    link:"images/patterns/image9113.jpg",
  },
  {
    id:9123,
    link:"images/patterns/image9123.jpg",
  },
];

const berryAndFruit = [
  {
    id:1803,
    link:"images/berryAndFruit/image1803.jpg",
  },
  {
    id:1813,
    link:"images/berryAndFruit/image1813.jpg",
  },
  {
    id:1983,
    link:"images/berryAndFruit/image1983.jpg",
  },
  {
    id:1993,
    link:"images/berryAndFruit/image1993.jpg",
  },
];


const plain = [
  {
    id:3001,
    link:"images/plain/image3001.jpg",
  },
  {
    id:3005,
    link:"images/plain/image3005.jpg",
  },
  {
    id:3015,
    link:"images/plain/image3015.jpg",
  },
  {
    id:9003,
    link:"images/plain/image9003.jpg",
  },
];





let allImagesArr = [...abstraction, ...cities, ...flowers, ...eatsAndDrinks, ...nature, ...sea, ...bridges, ...texture, ...patterns, ...berryAndFruit, ...plain];


const imagesBlock = document.querySelector(".imagesBlock_wrapper");
const middleElement = document.querySelector(".middle");
const abstractionBtn = document.querySelector(".abstraction");
const allImagesBtn = document.querySelector(".allImages");
const citiesBtn = document.querySelector(".cities");
const flowersBtn = document.querySelector(".flowers");
const eatsAndDrinksBtn = document.querySelector(".eatsAndDrinks");
const natureBtn = document.querySelector(".nature");
const searchInput = document.querySelector("#searchInput");
let listImages;



showAllImages(allImagesArr);

function showAllImages(allImagesArr){
  addBackImage(allImagesArr);

  listImages = document.querySelectorAll(".imagesBlock_wrapper__box > img");
 

  

  for(let i =0; i < listImages.length; i++){
   
    listImages[i].addEventListener('click',()=>{
     
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  let link = listImages[i].src;
  middleElement.style.backgroundImage = `url("${link}")`;
  middleElement.style.backgroundSize = `cover`;
  middleElement.style.backgroundRepeat = `no-repeat`;
  middleElement.style.backgroundPosition = `center center`;

  });
  }


}



function addBackImage(dataArr){
  
  imagesBlock.innerHTML = "";
  dataArr.map((el)=>{
    let div = document.createElement("div");
    div.classList.add("col-md-4", "col-sm-6", "imagesBlock_wrapper__box");
    div.innerHTML = `
    
      <img  id="${el.id}" src="${el.link}" alt="img${el.id}"/>
   
    `;
    imagesBlock.appendChild(div);
  })
}

//----------------- All Images --------------------------------

allImagesBtn.addEventListener('click', function(e){
  e.preventDefault();
  showAllImages(allImagesArr);
  displayList(allImagesArr, null, rows, 1);
  setupPagination(allImagesArr, null, rows);

} );


//----------------- Abstraction --------------------------------

abstractionBtn.addEventListener('click', function(e){
  e.preventDefault();
 
  addBackImage(abstraction);
  listImages = document.querySelectorAll(".imagesBlock_wrapper__box > img");
  

  for(let i = 0; i < listImages.length; i++){
   
    listImages[i].addEventListener('click',()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
      
  let link = listImages[i].src;
  middleElement.style.backgroundImage = `url("${link}")`;
  middleElement.style.backgroundSize = `cover`;
  middleElement.style.backgroundRepeat = `no-repeat`;
  middleElement.style.backgroundPosition = `center center`;
  });
  }

  displayList(abstraction, null, rows, 1);
  setupPagination(abstraction, null, rows);


});

//----------------- Cities --------------------------------



citiesBtn.addEventListener('click', function(e){
  e.preventDefault();
 
  addBackImage(cities);
  listImages = document.querySelectorAll(".imagesBlock_wrapper__box > img");
  

  for(let i = 0; i < listImages.length; i++){
   
    listImages[i].addEventListener('click',()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
      
  let link = listImages[i].src;
  middleElement.style.backgroundImage = `url("${link}")`;
  middleElement.style.backgroundSize = `cover`;
  middleElement.style.backgroundRepeat = `no-repeat`;
  middleElement.style.backgroundPosition = `center center`;
 
  });
  }

  displayList(cities, null, rows, 1);
  setupPagination(cities, null, rows);

});

//----------------- Flowers --------------------------------



flowersBtn.addEventListener('click', function(e){
  e.preventDefault();
 
  addBackImage(flowers);
  listImages = document.querySelectorAll(".imagesBlock_wrapper__box > img");
  

  for(let i = 0; i < listImages.length; i++){
   
    listImages[i].addEventListener('click',()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
      
  let link = listImages[i].src;
  middleElement.style.backgroundImage = `url("${link}")`;
  middleElement.style.backgroundSize = `cover`;
  middleElement.style.backgroundRepeat = `no-repeat`;
  middleElement.style.backgroundPosition = `center center`;
  });
  }

  displayList(flowers, null, rows, 1);
setupPagination(flowers, null, rows);


});

//----------------- eatsAndDrinksBtn --------------------------------



eatsAndDrinksBtn.addEventListener('click', function(e){
  e.preventDefault();
 
  addBackImage(eatsAndDrinks);
  listImages = document.querySelectorAll(".imagesBlock_wrapper__box > img");
  

  for(let i = 0; i < listImages.length; i++){
   
    listImages[i].addEventListener('click',()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
      
  let link = listImages[i].src;
  middleElement.style.backgroundImage = `url("${link}")`;
  middleElement.style.backgroundSize = `cover`;
  middleElement.style.backgroundRepeat = `no-repeat`;
  middleElement.style.backgroundPosition = `center center`;
  });
  }

  displayList(eatsAndDrinks, null, rows, 1);
setupPagination(eatsAndDrinks, null, rows);


});

//----------------- Nature --------------------------------



natureBtn.addEventListener('click', function(e){
  e.preventDefault();
 
  addBackImage(nature);
  listImages = document.querySelectorAll(".imagesBlock_wrapper__box > img");
  

  for(let i = 0; i < listImages.length; i++){
   
    listImages[i].addEventListener('click',()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
      
  let link = listImages[i].src;
  middleElement.style.backgroundImage = `url("${link}")`;
  middleElement.style.backgroundSize = `cover`;
  middleElement.style.backgroundRepeat = `no-repeat`;
  middleElement.style.backgroundPosition = `center center`;
  });
  }

  displayList(nature, null, rows, 1);
setupPagination(nature, null, rows);


});



//----------------- Sea --------------------------------

const seaBtn = document.querySelector(".sea");

seaBtn.addEventListener('click', function(e){
  e.preventDefault();
 
  addBackImage(sea);
  listImages = document.querySelectorAll(".imagesBlock_wrapper__box > img");
  

  for(let i = 0; i < listImages.length; i++){
   
    listImages[i].addEventListener('click',()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
      
  let link = listImages[i].src;
  middleElement.style.backgroundImage = `url("${link}")`;
  middleElement.style.backgroundSize = `cover`;
  middleElement.style.backgroundRepeat = `no-repeat`;
  middleElement.style.backgroundPosition = `center center`;
  });
  }

  displayList(sea, null, rows, 1);
setupPagination(sea, null, rows);


});


//----------------- Bridges --------------------------------


const bridgesBtn = document.querySelector(".bridges");

bridgesBtn.addEventListener('click', function(e){
  e.preventDefault();
 
  addBackImage(bridges);
  listImages = document.querySelectorAll(".imagesBlock_wrapper__box > img");
  

  for(let i = 0; i < listImages.length; i++){
   
    listImages[i].addEventListener('click',()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
      
  let link = listImages[i].src;
  middleElement.style.backgroundImage = `url("${link}")`;
  middleElement.style.backgroundSize = `cover`;
  middleElement.style.backgroundRepeat = `no-repeat`;
  middleElement.style.backgroundPosition = `center center`;
  });
  }

  displayList(bridges, null, rows, 1);
setupPagination(bridges, null, rows);


});


//----------------- Texture --------------------------------

const textureBtn = document.querySelector(".texture");

textureBtn.addEventListener('click', function(e){
  e.preventDefault();
 
  addBackImage(texture);
  listImages = document.querySelectorAll(".imagesBlock_wrapper__box > img");
  

  for(let i = 0; i < listImages.length; i++){
   
    listImages[i].addEventListener('click',()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
      
  let link = listImages[i].src;
  middleElement.style.backgroundImage = `url("${link}")`;
  middleElement.style.backgroundSize = `cover`;
  middleElement.style.backgroundRepeat = `no-repeat`;
  middleElement.style.backgroundPosition = `center center`;
  });
  }

  displayList(texture, null, rows, 1);
setupPagination(texture, null, rows);


});


//----------------- Patterns --------------------------------

const patternsBtn = document.querySelector(".patterns");

patternsBtn.addEventListener('click', function(e){
  e.preventDefault();
 
  addBackImage(patterns);
  listImages = document.querySelectorAll(".imagesBlock_wrapper__box > img");
  

  for(let i = 0; i < listImages.length; i++){
   
    listImages[i].addEventListener('click',()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
      
  let link = listImages[i].src;
  middleElement.style.backgroundImage = `url("${link}")`;
  middleElement.style.backgroundSize = `cover`;
  middleElement.style.backgroundRepeat = `no-repeat`;
  middleElement.style.backgroundPosition = `center center`;
  });
  }

  displayList(patterns, null, rows, 1);
setupPagination(patterns, null, rows);


});


//----------------- BerryAndFruit --------------------------------

const berryAndFruitBtn = document.querySelector(".berryAndFruit");

berryAndFruitBtn.addEventListener('click', function(e){
  e.preventDefault();
 
  addBackImage(berryAndFruit);
  listImages = document.querySelectorAll(".imagesBlock_wrapper__box > img");
  

  for(let i = 0; i < listImages.length; i++){
   
    listImages[i].addEventListener('click',()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
      
  let link = listImages[i].src;
  middleElement.style.backgroundImage = `url("${link}")`;
  middleElement.style.backgroundSize = `cover`;
  middleElement.style.backgroundRepeat = `no-repeat`;
  middleElement.style.backgroundPosition = `center center`;
  });
  }

  displayList(berryAndFruit, null, rows, 1);
setupPagination(berryAndFruit, null, rows);


});


//----------------- Plain --------------------------------

const plainBtn = document.querySelector(".plain");

plainBtn.addEventListener('click', function(e){
  e.preventDefault();
 
  addBackImage(plain);
  listImages = document.querySelectorAll(".imagesBlock_wrapper__box > img");
  

  for(let i = 0; i < listImages.length; i++){
   
    listImages[i].addEventListener('click',()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
      
  let link = listImages[i].src;
  middleElement.style.backgroundImage = `url("${link}")`;
  middleElement.style.backgroundSize = `cover`;
  middleElement.style.backgroundRepeat = `no-repeat`;
  middleElement.style.backgroundPosition = `center center`;
  });
  }

  displayList(plain, null, rows, 1);
setupPagination(plain, null, rows);


});



//------------------ Search Input ------------------------



searchInput.addEventListener('input', function(e){
  // paginationElement.innerHTML ="";
  if(e.target.value == ""){
    
    showAllImages(allImagesArr);
   
  }else{

    let searchArr = [];
    allImagesArr.forEach(el => {
     
      let strId = el.id + "";

      if(strId.search(e.target.value) != -1){
        searchArr.push(el)
        
      }
      addBackImage(searchArr);
    })
   
  
   
    listImages = document.querySelectorAll(".imagesBlock_wrapper__box > img");
     
   
    for(let i = 0; i < listImages.length; i++){
     
      listImages[i].addEventListener('click',()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
        
    let link = listImages[i].src;
    middleElement.style.backgroundImage = `url("${link}")`;
  middleElement.style.backgroundSize = `cover`;
  middleElement.style.backgroundRepeat = `no-repeat`;
  middleElement.style.backgroundPosition = `center center`;
    });
    }
  }
  

});


// ---------------------- Pagination -------------------------

const paginationElement = document.querySelector("#pagination");

let currentPage = 1;
let rows = 30;

function displayList(items, wrapper, rows_per_page, page){
  
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);
  console.log(paginatedItems);

  // for(let i = loop_start; i < loop_start + rows_per_page; i++){

  // }

  addBackImage(paginatedItems);

  listImages = document.querySelectorAll(".imagesBlock_wrapper__box > img");
  

  for(let i = 0; i < listImages.length; i++){
   
    listImages[i].addEventListener('click',()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
      
  let link = listImages[i].src;
  middleElement.style.backgroundImage = `url("${link}")`;
  middleElement.style.backgroundSize = `cover`;
  middleElement.style.backgroundRepeat = `no-repeat`;
  middleElement.style.backgroundPosition = `center center`;
  });
  }
}

function setupPagination(items, wrapper, rows_per_page){
  paginationElement.innerHTML ="";

  let page_count = Math.ceil(items.length/ rows_per_page);

  for(let i = 1; i < page_count + 1; i++){
   let btnPagination = paginationButton(i, items);
   paginationElement.appendChild(btnPagination);

  }
}

function paginationButton(page, items){

  let button = document.createElement("button");
  button.classList.add("paginationBtn")
  button.innerText = page;

  if( currentPage == page ){
    button.classList.add("activePaginationBtn");
  }



  button.addEventListener("click", function(){
    current_page = page;
    displayList(items, null, rows, current_page);

    let current_btn = document.querySelector("#pagination .activePaginationBtn");
    current_btn.classList.remove("activePaginationBtn");

    button.classList.add("activePaginationBtn");
  });

  return button;
}

displayList(allImagesArr, null, rows, 1);
setupPagination(allImagesArr, null, rows);
