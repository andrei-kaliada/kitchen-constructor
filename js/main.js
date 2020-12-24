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


let allImagesArr = [...abstraction, ...cities, ...flowers, ...eatsAndDrinks, ...nature];


const imagesBlock = document.querySelector(".imagesBlock_wrapper");
const middleElement = document.querySelector(".middle");
const abstractionBtn = document.querySelector(".abstraction");
const allImagesBtn = document.querySelector(".allImages");
const citiesBtn = document.querySelector(".cities");
const flowersBtn = document.querySelector(".flowers");
const eatsAndDrinksBtn = document.querySelector(".eatsAndDrinks");
const natureBtn = document.querySelector(".nature");
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
  middleElement.style.background = `url("${link}")`;
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
  middleElement.style.background = `url("${link}")`;
  });
  }


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
  middleElement.style.background = `url("${link}")`;
  });
  }


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
  middleElement.style.background = `url("${link}")`;
  });
  }


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
  middleElement.style.background = `url("${link}")`;
  });
  }


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
  middleElement.style.background = `url("${link}")`;
  });
  }


});





