const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
}


function printMinutes() {
  minDec.innerText = chronometer.splitClick()[0]
  minUni.innerText = chronometer.splitClick()[1]

}

function printSeconds() {
  secDec.innerText = chronometer.splitClick()[3]
  secUni.innerText = chronometer.splitClick()[4]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.classList.remove("start")
  btnLeft.classList.add("stop")
  btnLeft.innerText = "STOP"
  btnRight.classList.remove("reset") //
  btnRight.classList.add("split") //
  btnRight.innerText = "SPLIT" //
  
  
}

function setSplitBtn() {
  btnRight.classList.remove("reset")
  btnRight.classList.add("split")
  btnRight.innerText = "SPLIT"
  
  
}

function setStartBtn() {
  btnLeft.classList.remove("stop")
  btnLeft.classList.add("start")
  btnLeft.innerText = "START"
  btnRight.classList.remove("split")
  btnRight.classList.add("reset")
  btnRight.innerHTML = "RESET"
  
  
}

function setResetBtn() {
  btnRight.classList.remove("split")
  btnRight.classList.add("reset")
  btnRight.innerText = "RESET"
  
}


// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains("start")) {
    setStopBtn()
    setSplitBtn() 
    chronometer.startClick(printTime) //from chronometer.js
  } else {
    setStartBtn()
    setResetBtn()
    
      }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains("reset")){
   setSplitBtn()
  }
  else {
    setResetBtn()
  }
});
