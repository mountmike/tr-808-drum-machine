// Disable text selection on whole page

const disableselect = (e) => {  
  return false  
}  
document.onselectstart = disableselect  
document.onmousedown = disableselect

// Loading all samples to variables
const bassDrumSample = new Audio("TR808/BD/BD5050.wav");
const snareDrumSample = new Audio("TR808/SD/SD5050.wav");
const lowTomSample = new Audio("TR808/LT/LT10.wav");
const midTomSample = new Audio("TR808/MT/MT10.wav");
const hiTomSample = new Audio("TR808/HT/HT10.wav");
const rimShotSample = new Audio("TR808/RS/RS.wav");
const clapSample = new Audio("TR808/CP/CP.wav");
const cowbellSample = new Audio("TR808/CB/CB.wav");
const cymbalSample = new Audio("TR808/CY/CY0010.wav");
const openHatSample = new Audio("TR808/OH/OH10.wav");
const closedHatSample = new Audio("TR808/CH/CH.wav");


// Defining sample buttons

const bassDrumBtn = document.querySelector('#s1');

bassDrumBtn.addEventListener('click', function() {
  bassDrumSample.currentTime = 0;
  bassDrumSample.play();
  });


