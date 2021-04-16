// 'use strict'
// const getFormFields = require('./../../../lib/get-form-fields')
// const api = require('./../auth/api')
// const ui = require('./../auth/ui')
//
// let success
// const onGameSuccess = function (event) {
//   if ($('#0').text() === 'x' && $('#1').text() === 'x' && $('#2').text() === 'x') {
//     $('#message').text('!~!~!~!~!~!~!~!~!~!~!~!~!~!~!  PLAYER X WINS  !~!~!~!~!~!~!~!~!~!~!~!~!~!~!')
//   } else if ($('#0').text() === 'o' && $('#1').text() === 'o' && $('#2').text() === 'o') {
//     $('#message').text('PLAYER O WINS!')
//   } else if ($('#3').text() === 'x' && $('#4').text() === 'x' && $('#5').text() === 'x') {
//     $('#message').text('PLAYER X WINS!')
//   } else if ($('#3').text() === 'o' && $('#4').text() === 'o' && $('#5').text() === 'o') {
//     $('#message').text('PLAYER O WINS!')
//   } else if ($('#6').text() === 'x' && $('#7').text() === 'x' && $('#8').text() === 'x') {
//     $('#message').text('PLAYER X WINS!')
//   } else if ($('#6').text() === 'o' && $('#7').text() === 'o' && $('#8').text() === 'o') {
//     $('#message').text('PLAYER O WINS!')
//   } else if ($('#0').text() === 'x' && $('#3').text() === 'x' && $('#6').text() === 'x') {
//     $('#message').text('PLAYER X WINS!')
//   } else if ($('#0').text() === 'o' && $('#3').text() === 'o' && $('#6').text() === 'o') {
//     $('#message').text('PLAYER O WINS!')
//   } else if ($('#1').text() === 'x' && $('#4').text() === 'x' && $('#7').text() === 'x') {
//     $('#message').text('PLAYER X WINS!')
//   } else if ($('#1').text() === 'o' && $('#4').text() === 'o' && $('#7').text() === 'o') {
//     $('#message').text('PLAYER O WINS!')
//   } else if ($('#2').text() === 'x' && $('#5').text() === 'x' && $('#8').text() === 'x') {
//     $('#message').text('PLAYER X WINS!')
//     success = true
//   } else if ($('#2').text() === 'o' && $('#5').text() === 'o' && $('#8').text() === 'o') {
//     $('#message').text('PLAYER O WINS!')
//     success = true
//   } else if ($('#0').text() === 'x' && $('#4').text() === 'x' && $('#8').text() === 'x') {
//     $('#message').text('PLAYER X WINS!')
//     success = true
//   } else if ($('#0').text() === 'o' && $('#4').text() === 'o' && $('#8').text() === 'o') {
//     $('#message').text('PLAYER O WINS!')
//     console.log('success')
//     return true
//   } else {
//     success = false
//     // this does not work
//     console.log('not over yet')
//   }
//   console.log(success)
// }
// console.log('success')
// module.exports = {
//   onGameSuccess,
//   success
// }

// const onBoxClick = function (event) {
//   event.preventDefault()
//   // console.log(logic.onGameSuccess)
//   // const form = event.target
//   // const data = getFormFields(form)
//   const box = event.target.id
//   const boxText = $(event.target).text()
//   // console.log(logic.success)
//   // $('#message').text() === 'PLAYER O WINS!' || $('#message').text() === 'PLAYER X WINS!'
//   if (success === true) {
//     console.log('game over')
//     $('#message').text('The game is over!')
//   } else if (boxText === 'x' || boxText === 'o') {
//     $('#message').text('This space is taken!')
//     // $('#message').delay(5000).text('')
//     // $('#message').delay(800).text('Try again.')
//   } else {
//     $('#' + box).text(currentPlayer)
//     $('#message').text('Move logged!')
//     if (currentPlayer === 'x') {
//       currentPlayer = 'o'
//     } else if (currentPlayer === 'o') {
//       currentPlayer = 'x'
//     } if ($('#0').text() === 'x' && $('#1').text() === 'x' && $('#2').text() === 'x') {
//         $('#message').text('!~!~!~!~!~!~!~!~!~!~!~!~!~!~!  PLAYER X WINS  !~!~!~!~!~!~!~!~!~!~!~!~!~!~!')
//         success = true
//       } else if ($('#0').text() === 'o' && $('#1').text() === 'o' && $('#2').text() === 'o') {
//         $('#message').text('PLAYER O WINS!')
//         success = true
//       } else if ($('#3').text() === 'x' && $('#4').text() === 'x' && $('#5').text() === 'x') {
//         $('#message').text('PLAYER X WINS!')
//         success = true
//       } else if ($('#3').text() === 'o' && $('#4').text() === 'o' && $('#5').text() === 'o') {
//         $('#message').text('PLAYER O WINS!')
//         success = true
//       } else if ($('#6').text() === 'x' && $('#7').text() === 'x' && $('#8').text() === 'x') {
//         $('#message').text('PLAYER X WINS!')
//         success = true
//       } else if ($('#6').text() === 'o' && $('#7').text() === 'o' && $('#8').text() === 'o') {
//         $('#message').text('PLAYER O WINS!')
//         success = true
//       } else if ($('#0').text() === 'x' && $('#3').text() === 'x' && $('#6').text() === 'x') {
//         $('#message').text('PLAYER X WINS!')
//         success = true
//       } else if ($('#0').text() === 'o' && $('#3').text() === 'o' && $('#6').text() === 'o') {
//         $('#message').text('PLAYER O WINS!')
//         success = true
//       } else if ($('#1').text() === 'x' && $('#4').text() === 'x' && $('#7').text() === 'x') {
//         $('#message').text('PLAYER X WINS!')
//         success = true
//       } else if ($('#1').text() === 'o' && $('#4').text() === 'o' && $('#7').text() === 'o') {
//         $('#message').text('PLAYER O WINS!')
//         success = true
//       } else if ($('#2').text() === 'x' && $('#5').text() === 'x' && $('#8').text() === 'x') {
//         $('#message').text('PLAYER X WINS!')
//         success = true
//       } else if ($('#2').text() === 'o' && $('#5').text() === 'o' && $('#8').text() === 'o') {
//         $('#message').text('PLAYER O WINS!')
//         success = true
//       } else if ($('#0').text() === 'x' && $('#4').text() === 'x' && $('#8').text() === 'x') {
//         $('#message').text('PLAYER X WINS!')
//         success = true
//       } else if ($('#0').text() === 'o' && $('#4').text() === 'o' && $('#8').text() === 'o') {
//         $('#message').text('PLAYER O WINS!')
//         success = true
//         // number of turns start with 0 ends with 9
//       } else {
//         success = false
//         // this does not work
//         console.log('not over yet')
//         // or message of who is next
//       }
//       console.log(success)
//     }

// else if (turnNumber === 9) {
//  $('#message').text('TIE GAME!')
//  console.log('not over yet')
//  // or message of who is next
// }
//
// console.log(success)
// }
//
// function checkForTurn() {
//   let i = 0
//   for(i = 0; i < 9; i++) {
//
//   }
