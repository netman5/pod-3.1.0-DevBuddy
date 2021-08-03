/* global chrome */

const body = document.getElementsByTagName("body");


const h1 = document.createElement('h1')
h1.style.fontSize = '18px'
h1.innerHTML = 'Welcome to our new chrome extension'

body[0]?.append(h1)

console.log(h1)