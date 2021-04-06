'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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
  console.log(data)
  api.newGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}
// let currentPlayer = 'x'
// const onBoxClick = function (event) {
//   event.preventDefault()
//   const cell = event.target.id
//   // const cellText = cell.text()
//   console.log('you clicked!')
//   $('#' + cell).append(currentPlayer)
//   if (currentPlayer === 'x') {
//     currentPlayer = 'o'
//   } else if (currentPlayer === 'o') {
//     currentPlayer = 'x'
//   }
let currentPlayer = 'x'
const onBoxClick = function (event) {
  event.preventDefault()
  // const form = event.target
  // const data = getFormFields(form)
  const box = event.target.id
  const boxText = $(event.target).text()
  if (boxText === 'x' || boxText === 'o') {
    $('#message').text('This space is taken!')
    // $('#message').delay(800).text('Try again.')
  } else {
    $('#' + box).append(currentPlayer)
    $('#message').text('Move logged!')
    if (currentPlayer === 'x') {
      currentPlayer = 'o'
    } else if (currentPlayer === 'o') {
      currentPlayer = 'x'
    }
    // api.boxClick(data)
    //   .then(ui.onBoxClickSuccess)
    //   .catch(ui.onBoxClickFailure)
  }
  // const cell = event.target.index
  // api.boxClick(cell)
  //   .then(ui.onBoxClickSuccess)
  //   .catch(ui.onBoxClickFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onBoxClick
}
