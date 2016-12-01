'use strict'
const $outputDivForBoxes = $('#boxes')
for (let i = 0; i < 1000; i++) {
  $outputDivForBoxes.append($('<div class="box"></div>'))
}

const getRandomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min
const getRandomHexColor = () => `#${Math.random().toString(16).slice(2,8)}`

const $button = $('#alertMe')
const height = $button.css('height')
const width = $button.css('width')
const heightNum = Number(height.slice(0,2))
const widthNum = Number(width.slice(0,2))
let bool = true
$button.on('click', () => {

  // if (bool) {
  //   $button.css('height', `${heightNum + 100}px`)
  //   $button.css('width', `${widthNum + 100}px`)
  // } else {
  //   $button.css('height', height)
  //   $button.css('width', width)
  // }
  $('.box').css('height', (index, style) => getRandomNumber(50,5) )
  $('body').css( { backgroundColor: getRandomHexColor() } )
  bool = !bool
})
