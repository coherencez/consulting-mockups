'use strict'
const jumbotron = document.querySelector('#jumbo')
const      body = document.body

const h1 = document.querySelector('#h1')
const p = document.querySelector('#p')

const animateJumbotron = () => {
  let lastScrollTop = 0
  window.addEventListener(`scroll`, () => {
     const st = window.pageYOffset || document.documentElement.scrollTop
     if (st > lastScrollTop){
        console.log('scrolling down')
        jumbotron.classList.add('hoverHeight')
        h1.classList.add('h1Hover')
        p.classList.add('pHover')
     } else if (st === 0) {
        jumbotron.classList.remove('hoverHeight')
        h1.classList.remove('h1Hover')
        p.classList.remove('pHover')
     } else {
        console.log('scrolling up')
     }
     lastScrollTop = st;
  }, false)
}

window.onload = animateJumbotron
