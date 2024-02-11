// random number setting
// bring user input number, go button
// you got correct sign
// random num < user num Down sign!!
// random num > user num Up sign!!
// reset button game reset
// 5 chances and game disabled
// notify user only 1~100 numbers allowed and not losing chance
// user cannot input the same number already put and not losing chance

let computerNum = 0;
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-num');
let userResult = document.getElementById('result');

playButton.addEventListener('click', play);

// getElementById - 아이디를 통해 가져오는 방식
//getElementByClassName, querySelector
// addEventListener - 이벤트 추가 focus hover etc.
// 함수를 매개변수로 줘야함  () 넣을시 자동실행됨
// document.querySelector('#play-button), ('.user-num'), ('nav a');
// 선택자를 기반으로 요소를 찾아내며, 첫 번째로 일치하는 요소만 반환
// document.querySelectorAll
// 선택자를 기반으로 요소를 찾아내며, 일치하는 모든 요소를 NodeList 형태로 반환

function pickRandomNumber() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  //   math.random - 0~1 사이의 숫자를 함수로 반환 (소수점, 1에 근접한 숫자 까지)
  console.log('Answer', computerNum);
}

function play() {
  let userValue = userInput.value;
  if (userValue < computerNum) {
    userResult.textContent = 'Go up!';
  } else if (userValue > computerNum) {
    userResult.textContent = 'Go down!';
  } else if (userValue == computerNum) {
    userResult.textContent = 'Correct guess!!!';
  }
  // .value 값을 읽어옴
}

pickRandomNumber();

// function randomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
// } // min부터 시작하며, min을 포함해서 min + 6까지의 값이 가능합니다.

// const num = randomInt(3, 10);
// console.log(num);
