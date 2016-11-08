'use strict'
const jumbotron = document.querySelector('#jumbo')
const      body = document.body
const    height = jumbotron.style.height


let lastScrollTop = 0
window.addEventListener(`scroll`, () => {
   const st = window.pageYOffset || document.documentElement.scrollTop
   if (st > lastScrollTop){
       console.log('scrolling down')
       jumbotron.classList.add('hoverHeight')
   } else if (st === 0) {
      jumbotron.classList.remove('hoverHeight')
   } else {
     console.log('scrolling up')
   }
   lastScrollTop = st;
}, false);
