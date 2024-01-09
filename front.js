


// let element = document.getElementsByClassName("body")[0]

// element.addEventListener("scroll", (event) => {
//     output.innerHTML = "Scroll event fired!";
//     setTimeout(() => {
//       output.innerHTML = "Waiting on scroll events...";
//     }, 1000);
// });


  //  let vid = document.getElementsByClassName("video")[0];
  //  vid.playbackRate = 1;


let stories = document.getElementsByClassName("stories-cont")[0]
let support = document.getElementsByClassName("support-cont")[0]
let social = document.getElementsByClassName("social")[0]
let tops = document.getElementsByClassName("top")[0]

document.getElementsByClassName("stories")[0].addEventListener("click",()=>{
  stories.scrollIntoView({ behavior: "smooth", block: "center" });
})


document.getElementsByClassName("support")[0].addEventListener("click",()=>{
  
  support.scrollIntoView({ behavior: "smooth", block: "center" });
})

document.getElementsByClassName("to-top")[0].addEventListener("click",()=>{
  
  tops.scrollIntoView({ behavior: "smooth", block: "center" });
})


document.getElementsByClassName("social_btn")[0].addEventListener("click",()=>{
  
  social.scrollIntoView({ behavior: "smooth", block: "center" });
})


function shiftRight(array){
   
  let arry2 = [] 
  arry2[0] = array.slice(array.length-1)[0]
  for(let i = 1; i<array.length; i++){
   arry2[i] = array[i-1]
  }
  for(let i = 0; i<array.length; i++){
   array[i] = arry2[i]
  }
  return arry2
}

function shiftLeft(array){
   
  let arry2 = [] 
  arry2[array.length-1] = array[0]
  console.log(arry2)
  for(let i = 0; i<array.length-1; i++){
   arry2[i] = array[i+1]
  }
  for(let i = 0; i<array.length; i++){
   array[i] = arry2[i]
  }
  return arry2
}

document.getElementsByClassName("info--img")

let arr = ['first','second','third']
let arr2 = ['left-dot','middle-dot','right-dot']


document.getElementsByClassName("right")[0].addEventListener("click",()=>{

  shiftRight(arr)
  shiftRight(arr2)
  document.getElementsByClassName("first")[0].classList.remove("first");
  document.getElementsByClassName("second")[0].classList.remove("second");
  document.getElementsByClassName("third")[0].classList.remove("third");

  document.getElementsByClassName("left-dot")[0].classList.remove("left-dot");
  document.getElementsByClassName("middle-dot")[0].classList.remove("middle-dot");
  document.getElementsByClassName("right-dot")[0].classList.remove("right-dot");

  const slides = document.getElementsByClassName("info-cont--3");
  const dots = document.getElementsByClassName("dots");

  for(let i = 0; i< slides.length; i++){
    slides[i].classList.add(arr[i]);
    dots[i].classList.add(arr2[i]);
  }
})


document.getElementsByClassName("left")[0].addEventListener("click",()=>{

  shiftLeft(arr)
  shiftLeft(arr2)
  document.getElementsByClassName("first")[0].classList.remove("first");
  document.getElementsByClassName("second")[0].classList.remove("second");
  document.getElementsByClassName("third")[0].classList.remove("third");

  document.getElementsByClassName("left-dot")[0].classList.remove("left-dot");
  document.getElementsByClassName("middle-dot")[0].classList.remove("middle-dot");
  document.getElementsByClassName("right-dot")[0].classList.remove("right-dot");


  const slides = document.getElementsByClassName("info-cont--3");
  const dots = document.getElementsByClassName("dots");

  
  for(let i = 0; i< slides.length; i++){
    slides[i].classList.add(arr[i]);
    dots[i].classList.add(arr2[i]);
  }
})

  setTimeout(() => {
    for(let i=0; i<document.getElementsByClassName('article').length; i++){
   
     setInterval(() => {
        document.getElementsByClassName('article')[i].classList.remove("fly")
      }, i*150);
    
  
   }
}, 1000);



window.onload = function() {
  window.addEventListener("scroll", handleScroll);
};


function handleScroll() {
  const element = document.getElementsByClassName("to-top")[0];
  if (window.scrollY === 0) {
    element.style.opacity = "0";
  } else {
    element.style.opacity = "1";
  }
}



const articles = document.getElementsByClassName("article");

for(let i = 0; i< articles.length; i++){
  
  document.getElementsByClassName("article")[i].addEventListener("mouseover", ()=>{
    document.getElementsByClassName("article-img")[i].classList.add("zoom")
  })
  
  document.getElementsByClassName("article")[i].addEventListener("mouseout", ()=>{
    document.getElementsByClassName("article-img")[i].classList.remove("zoom")
  })
  

}


document.getElementsByClassName("all-button")[0].addEventListener("click", ()=>{
  
  // START LOADING ANIMATION
  
  for(let i = 0; i < articles.length; i++){
    articles[i].classList.add("rand") 
  }

  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      articles[i].style.display = "none";   
    }
  }, 600);


  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      articles[i].style.display = "flex";
    }
  
  }, 700);


  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      setTimeout(() => {
        articles[i].classList.remove("rand");
      }, i*150);
     
    }
  }, 800);
})




document.getElementsByClassName("science-button")[0].addEventListener("click", ()=>{
  
  // START LOADING ANIMATION


  for(let i = 0; i < articles.length; i++){
    articles[i].classList.add("rand") 
  }

  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      articles[i].style.display = "none";   
    }
  }, 600);

  // STOP LOADING ANIMATION

  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      if(articles[i].classList.contains("science")){
        articles[i].style.display = "flex";
      }
    }
  
  }, 700);


  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      if(articles[i].classList.contains("science")){

        setTimeout(() => {
          articles[i].classList.remove("rand");
        }, i*150);
      }
    }
  }, 800);
})


document.getElementsByClassName("culture-button")[0].addEventListener("click", ()=>{
  
  // START LOADING ANIMATION


  for(let i = 0; i < articles.length; i++){
    articles[i].classList.add("rand") 
  }

  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      articles[i].style.display = "none";   
    }
  }, 600);

  // STOP LOADING ANIMATION

  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      if(articles[i].classList.contains("culture")){
        articles[i].style.display = "flex";
      }
    }
  
  }, 700);


  setTimeout(() => {
    for(let i = 0; i < articles.length; i++){
      if(articles[i].classList.contains("culture")){
       
        articles[i].classList.remove("rand");
        // articles[i].style.display = "flex";
      }
    }
  }, 800);
})