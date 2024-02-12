// random number setting
// bring user input number, go button
// you got correct sign
// random num < user num Down sign!!
// random num > user num Up sign!!
// reset button game reset
// 5 chances and game disabled
//  show correct answer
// notify user only 1~100 numbers allowed and not losing chance
// user cannot input the same number already put and not losing chance

let computerNum = 0;
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-num');
let userResult = document.getElementById('result');
let resetButton = document.getElementById('reset-button');
let chances = 5;
let chanceArea = document.getElementById('chance');
let history = [];
let answerArea = document.getElementById('answer');
let boo = document.getElementById('win-picture');
let gameName = document.getElementById('main-title');
let gameType = document.getElementById('subtitle');
let gameBox = document.getElementById('mainBox');
let parentElement = gameName.parentNode;
let parentResult = userResult.parentNode;
let parentReset = resetButton.parentNode;

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', function () {
  userInput.value = '';
});
// focus는 커서가
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
  let userValue = userInput.value; // .value 값을 읽어옴
  userResult.removeAttribute('hidden');

  if (userValue < 1 || userValue > 100) {
    userResult.textContent = 'PUT 1 ~ 100 number..';
    return;
    // 이후의 값은 실행시키지 않음
  }
  if (history.includes(userValue)) {
    userResult.textContent = 'NO same number..';
    return;
  }
  chances--;
  chanceArea.textContent = `Chances: ${chances}`;
  console.log('Chances', chances);

  if (userValue < computerNum) {
    userResult.textContent = 'GO UP!';
  } else if (userValue > computerNum) {
    userResult.textContent = 'GO DOWN!';
  } else if (userValue == computerNum) {
    userResult.textContent = `You're lucky!`;
    playButton.disabled = true;
    chanceArea.style.display = 'none';
    userInput.style.display = 'none';
    playButton.style.display = 'none';
    boo.style.display = 'block';
    gameName.style.display = 'none';
    gameType.style.display = 'none';
    parentElement.insertBefore(userResult, gameName);
  }

  history.push(userValue);

  console.log(history);
  if (chances == 1) {
    chanceArea.textContent = 'One Last Chance...';
  }
  if (chances < 1) {
    chanceArea.textContent = '';
    playButton.disabled = true;
    userResult.textContent = '';
    chanceArea.style.display = 'none';
    userInput.style.display = 'none';
    playButton.style.display = 'none';
    gameName.style.display = 'none';
    gameType.style.display = 'none';
    gameBox.style.backgroundImage = 'none';
    resetButton.style.position = 'fixed';
    resetButton.style.bottom = '35px';
    showFailed();
  }
}

function showFailed() {
  document.body.style.backgroundImage = "url('scary.gif')";
  document.body.style.backgroundSize = '100% 100%';
}

function reset() {
  // user input is clear
  userInput.value = '';
  userResult.textContent = '';
  userInput.style.display = 'block';
  playButton.style.display = 'block';
  chanceArea.style.display = 'block';
  boo.style.display = 'none';
  gameName.style.display = 'block';
  gameType.style.display = 'block';
  gameBox.style.backgroundImage = 'url(dark-hallway.jpg)';
  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundSize = 'auto';
  resetButton.style.position = 'static';
  resetButton.style.bottom = 'auto';
  parentResult.insertBefore(userResult, chanceArea);
  playButton.disabled = false;
  chances = 5;
  chanceArea.textContent = `You have ${chances} chances..`;
  history = [];

  // re-operate number
  pickRandomNumber();
}

pickRandomNumber();

// function randomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
// } // min부터 시작하며, min을 포함해서 min + 6까지의 값이 가능합니다.

// const num = randomInt(3, 10);
// console.log(num);
