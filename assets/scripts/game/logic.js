'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./../auth/api')
const ui = require('./../auth/ui')

let success
const onGameSuccess = function (event) {
  if ($('#0').text() === 'x' && $('#1').text() === 'x' && $('#2').text() === 'x') {
    $('#message').text('!~!~!~!~!~!~!~!~!~!~!~!~!~!~!  PLAYER X WINS  !~!~!~!~!~!~!~!~!~!~!~!~!~!~!')
  } else if ($('#0').text() === 'o' && $('#1').text() === 'o' && $('#2').text() === 'o') {
    $('#message').text('PLAYER O WINS!')
  } else if ($('#3').text() === 'x' && $('#4').text() === 'x' && $('#5').text() === 'x') {
    $('#message').text('PLAYER X WINS!')
  } else if ($('#3').text() === 'o' && $('#4').text() === 'o' && $('#5').text() === 'o') {
    $('#message').text('PLAYER O WINS!')
  } else if ($('#6').text() === 'x' && $('#7').text() === 'x' && $('#8').text() === 'x') {
    $('#message').text('PLAYER X WINS!')
  } else if ($('#6').text() === 'o' && $('#7').text() === 'o' && $('#8').text() === 'o') {
    $('#message').text('PLAYER O WINS!')
  } else if ($('#0').text() === 'x' && $('#3').text() === 'x' && $('#6').text() === 'x') {
    $('#message').text('PLAYER X WINS!')
  } else if ($('#0').text() === 'o' && $('#3').text() === 'o' && $('#6').text() === 'o') {
    $('#message').text('PLAYER O WINS!')
  } else if ($('#1').text() === 'x' && $('#4').text() === 'x' && $('#7').text() === 'x') {
    $('#message').text('PLAYER X WINS!')
  } else if ($('#1').text() === 'o' && $('#4').text() === 'o' && $('#7').text() === 'o') {
    $('#message').text('PLAYER O WINS!')
  } else if ($('#2').text() === 'x' && $('#5').text() === 'x' && $('#8').text() === 'x') {
    $('#message').text('PLAYER X WINS!')
    success = true
  } else if ($('#2').text() === 'o' && $('#5').text() === 'o' && $('#8').text() === 'o') {
    $('#message').text('PLAYER O WINS!')
    success = true
  } else if ($('#0').text() === 'x' && $('#4').text() === 'x' && $('#8').text() === 'x') {
    $('#message').text('PLAYER X WINS!')
    success = true
  } else if ($('#0').text() === 'o' && $('#4').text() === 'o' && $('#8').text() === 'o') {
    $('#message').text('PLAYER O WINS!')
    console.log('success')
    return true
  } else {
    success = false
    console.log('not over yet')
  }
  console.log(success)
}
console.log('success')
module.exports = {
  onGameSuccess,
  success
}
