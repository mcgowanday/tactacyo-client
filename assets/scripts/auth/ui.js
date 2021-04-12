'use strict'
const store = require('./../store')
const events = require('./events')
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
  console.log(store.user)
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
  // $('#message').delay(1000).fadeOut()
  // $('form').trigger('reset')
}
const onNewGameSuccess = function (response) {
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
  $('#message').text('Move logged')
  $('.box').trigger('reset')
  console.log(store.game)
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
