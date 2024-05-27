// When the user chooses one of the channel buttons, change the src attribute of the img inside the .tv-show div
// You should write a single function to change the channel that accepts a single input, the channel number, and uses a conditional statement to change the TV to the image specific to that channel.
// When you set up your event listeners for the buttons, the callback function should call upon that change channel function
// Use a conditional statement to evaluate which channel they've chosen, so you can set a specific image for each channel
// Feel free to look up and use any images of your choice and include them in your conditional statement! Be sure to use an absolute path to the image file.

// Image files
/*
1-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg

2-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg

3-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg

4-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg

5-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg

6-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg

7-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg

8-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg

9-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg
*/

// Variables
// 1 - get channel from the remote
// 2 - get the screen and change in the image in there

// Pseudo-code
// Variable1, listen to it for a click
// function() {Listener would update the image in the screen}

let images = [
  `https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg
`,
  `https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg
`,
  `https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg
`,
  `https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg
`,
  `https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg
`,
  `https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg
`,
  `https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg
`,
  `https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg
`,
  `https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg
`,
  `https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg
`,
];

let imgSrc = document.getElementById('imgHere');

let btns = document.getElementsByClassName('channel');

let btn1 = btns[0];
let btn2 = btns[1];
let btn3 = btns[2];
let btn4 = btns[3];
let btn5 = btns[4];
let btn6 = btns[5];
let btn7 = btns[6];
let btn8 = btns[7];
let btn9 = btns[8];

function changeChannel(btn) {
  //   imgSrc.src = images[0];
  for (img in images) {
    if (btn.innerHTML === img) {
      imgSrc.src = images[img];
    }
  }
}

btns[0].addEventListener('click', () => {
  changeChannel(btns[0]);
});
btns[1].addEventListener('click', () => {
  changeChannel(btns[1]);
});
btns[2].addEventListener('click', () => {
  changeChannel(btns[2]);
});
btns[3].addEventListener('click', () => {
  changeChannel(btns[3]);
});
btns[4].addEventListener('click', () => {
  changeChannel(btns[4]);
});
btns[5].addEventListener('click', () => {
  changeChannel(btns[5]);
});
btns[6].addEventListener('click', () => {
  changeChannel(btns[6]);
});
btns[7].addEventListener('click', () => {
  changeChannel(btns[7]);
});
btns[8].addEventListener('click', () => {
  changeChannel(btns[8]);
});
btns[9].addEventListener('click', () => {
  changeChannel(btns[9]);
});
