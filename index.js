'use strict'
const eventListeners = () => {
  const jumbotron = document.querySelector('#jumbo')
  const      body = document.body
  const        h1 = document.querySelector('#h1')
  const         p = document.querySelector('#p')

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

  const       link1 = document.querySelector('#link1')
  const link1Anchor = document.querySelector('#link1click')
  const       link2 = document.querySelector('#link2')
  const link2Anchor = document.querySelector('#link2click')

  link2Anchor.addEventListener(`click`, (e) => {
    e.preventDefault()
    link1.classList.toggle('show')
    link2.classList.toggle('show')
  })

  link1Anchor.addEventListener(`click`, (e) => {
    e.preventDefault()
    link1.classList.toggle('show')
    link2.classList.toggle('show')
  })
}

window.onload = eventListeners
