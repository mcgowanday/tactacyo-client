'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#game-board').hide()
  $('#new-game').hide()
  $('#sign-out').hide()
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#new-game').on('click', authEvents.onNewGame)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.box').on('click', authEvents.onBoxClick)
  // $('#1').on('click', authEvents.onBoxClick)
})
