'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
let currentPlayer = 'x'
let success
let turnNumber = 0

const onSignUp = function (event) {
  event.preventDefault()
  // get the data from the form
  const form = event.target
  const data = getFormFields(form)
  // pass the data to an api function
  api.signUp(data)
    // handle success
    .then(ui.onSignUpSuccess)
    // handle failure
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  // get the data from the form
  const form = event.target
  const data = getFormFields(form)
  // pass the data to an api function
  api.signIn(data)
    // handle success
    .then(ui.onSignInSuccess)
    // handle failure
    .catch(ui.onSignInFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    // handle success
    .then(ui.onSignOutSuccess)
    // handle failure
    .catch(ui.onSignOutFailure)
}
const onNewGame = function (event) {
  event.preventDefault()
  const id = event.target
  const data = getFormFields(id)
  // resets success = true to success = false for a fresh game
  success = false
  // resets turnNumber counter on new game to check for ties
  turnNumber = 0
  console.log(id)
  console.log(data)
  api.newGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
  console.log(success)
}
const onBoxClick = function (event) {
  event.preventDefault()
  const box = event.target.id
  const boxText = $(event.target).text()
  if (success === true || turnNumber === 9) {
    console.log('game over')
    $('#message').text('The game is over!')
  } else if (boxText === 'x' || boxText === 'o') {
    $('#message').text('This space is taken!')
    // $('#message').delay(800).text('Try again.')
  } else {
    $('#' + box).text(currentPlayer)
    $('#message').text('Move logged!!')
    // const cellIndex = $("data-cell-index").data

    turnNumber = turnNumber + 1
    console.log(turnNumber)

    if ($('#0').text() === 'x' && $('#1').text() === 'x' && $('#2').text() === 'x') {
      $('#message2').text('!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!  PLAYER X WINS  ~!~!~!~!~!~!~!~!x!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!')
      success = true
    } else if ($('#0').text() === 'o' && $('#1').text() === 'o' && $('#2').text() === 'o') {
      $('#message2').text('PLAYER O WINS!')
      success = true
    } else if ($('#3').text() === 'x' && $('#4').text() === 'x' && $('#5').text() === 'x') {
      $('#message2').text('!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!  PLAYER X WINS  !~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!')
      success = true
    } else if ($('#3').text() === 'o' && $('#4').text() === 'o' && $('#5').text() === 'o') {
      $('#message2').text('PLAYER O WINS!')
      success = true
    } else if ($('#6').text() === 'x' && $('#7').text() === 'x' && $('#8').text() === 'x') {
      $('#message2').text('!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!  PLAYER X WINS  !~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!')
      success = true
    } else if ($('#6').text() === 'o' && $('#7').text() === 'o' && $('#8').text() === 'o') {
      $('#message2').text('PLAYER O WINS!')
      success = true
    } else if ($('#0').text() === 'x' && $('#3').text() === 'x' && $('#6').text() === 'x') {
      $('#message2').text('!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!  PLAYER X WINS  !~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!')
      success = true
    } else if ($('#0').text() === 'o' && $('#3').text() === 'o' && $('#6').text() === 'o') {
      $('#message2').text('PLAYER O WINS!')
      success = true
    } else if ($('#1').text() === 'x' && $('#4').text() === 'x' && $('#7').text() === 'x') {
      $('#message2').text('!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!  PLAYER X WINS  !~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!')
      success = true
    } else if ($('#1').text() === 'o' && $('#4').text() === 'o' && $('#7').text() === 'o') {
      $('#message2').text('PLAYER O WINS!')
      success = true
    } else if ($('#2').text() === 'x' && $('#5').text() === 'x' && $('#8').text() === 'x') {
      $('#message2').text('!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!  PLAYER X WINS  !~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!')
      success = true
    } else if ($('#2').text() === 'o' && $('#5').text() === 'o' && $('#8').text() === 'o') {
      $('#message2').text('PLAYER O WINS!')
      success = true
    } else if ($('#0').text() === 'x' && $('#4').text() === 'x' && $('#8').text() === 'x') {
      $('#message2').text('!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!  PLAYER X WINS  !~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!')
      success = true
    } else if ($('#0').text() === 'o' && $('#4').text() === 'o' && $('#8').text() === 'o') {
      $('#message2').text('PLAYER O WINS!')
      success = true
    } else if ($('#2').text() === 'x' && $('#4').text() === 'x' && $('#6').text() === 'x') {
      $('#message2').text('!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!  PLAYER X WINS  !~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!~!~!~!~x~!~!~!~!')
      success = true
    } else if ($('#2').text() === 'o' && $('#4').text() === 'o' && $('#6').text() === 'o') {
      $('#message2').text('PLAYER O WINS!')
      success = true
      // number of turns start with 0 ends with 9
    } else if (turnNumber === 9) {
      $('#message2').text('YOU TIED, YO!')
      success = true
    }
  }

  api.boxClick(box, currentPlayer, success)
    .then(ui.onBoxClickSuccess)
    .catch(ui.onBoxClickFailure)

  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else if (currentPlayer === 'o') {
    currentPlayer = 'x'
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onBoxClick
}
