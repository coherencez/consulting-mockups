'use strict'

const getRandomHexColor = () => `#${Math.random().toString(16).slice(2,8)}`

const $button = $('#alertMe')
const height = $button.css('height')
const width = $button.css('width')
const heightNum = Number(height.slice(0,2))
const widthNum = Number(width.slice(0,2))
let bool = true
$button.on('click', () => {
  if (bool) {
    $button.css('height', `${heightNum + 100}px`)
    $button.css('width', `${widthNum + 100}px`)
  } else {
    $button.css('height', height)
    $button.css('width', width)
  }
  $('body').css('background-color', getRandomHexColor())
  bool = !bool
})
