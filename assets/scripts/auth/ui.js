'use strict'
const store = require('./../store')
const onSignUpSuccess = function () {
  $('#message').text('Signed up successfully')
  $('#sign-up').trigger('reset')
}
const onSignUpFailure = function () {
  $('#message').text('Sign up failed')
}
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' signed in successfully')
  $('#sign-in').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#new-game').show()
  $('#sign-out').show()
  console.log(response)
  console.log(store.user)
  console.log(response.user)
}
const onSignInFailure = function () {
  $('#message').text('Sign in failed!')
}
const onSignOutSuccess = function (response) {
  store.user = null
  $('#message').text('User signed out!')
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#game-board').hide()
  $('#new-game').hide()
  $('#message2').text('')
  // $('#message').delay(1000).fadeOut()
  // $('form').trigger('reset')
}
const onNewGameSuccess = function (response) {
  console.log(response)
  // resetting box text to empty string
  $('.box').text('')
  // resetting Game outcome message text to empty string
  $('#message2').text('')
  store.game = response.game
  $('#message').text('New game ready!')
  $('#game-board').show()
  console.log(store.game)
}
const onNewGameFailure = function () {
  $('#message').text('Game failed to load!')
}
const onBoxClickSuccess = function (response) {
  store.game = response.game
  // $('#message').text('Move logged')
  $('.box').trigger('reset')
  // console.log(store.game)
  console.log(response)
}
const onBoxClickFailure = function (response) {
  $('#message').text('Click did not register!')
  $('.box').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onNewGameSuccess,
  onNewGameFailure,
  onBoxClickSuccess,
  onBoxClickFailure
}
