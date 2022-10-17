window.addEventListener("scroll", function(){
    var header = document.querySelector("header") ;
    header.classList.toggle("sticky-down", window.scrollY > 0)
    header.classList.toggle("sticky-up", window.scrollY < 10)
})

window.addEventListener("scroll", function(){
    var spike = document.querySelector(".spike") ;
    var bg = document.querySelector(".top-background") ;
    spike.classList.toggle("spike-up", window.scrollY > 0)
    spike.classList.toggle("spike-down", window.scrollY < 30)
    bg.classList.toggle("background-up", window.scrollY > 0)
    bg.classList.toggle("background-down", window.scrollY < 30)
})

const imageWrapper = document.querySelector('.image-wrapper')
const imageItems = document.querySelectorAll('.image-wrapper > *')
const imageLength = imageItems.length
const perView = 3
let totalScroll = 0
const delay = 2000

imageWrapper.style.setProperty('--per-view', perView)
for(let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
}

let autoScroll = setInterval(scrolling, delay)

function scrolling() {
  totalScroll++
  if(totalScroll == imageLength + 1) {
    clearInterval(autoScroll)
    totalScroll = 1
    imageWrapper.style.transition = '0s'
    imageWrapper.style.left = '0'
    autoScroll = setInterval(scrolling, delay)
  }
  const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24
  imageWrapper.style.left = `-${totalScroll * widthEl}px`
  imageWrapper.style.transition = '.3s'
}

// window.onload = function(){
//     console.log("loading")
// };