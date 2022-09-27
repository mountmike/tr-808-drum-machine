let toneStart = 0;

function mousePressed(){
  if (toneStart = 0){
    Tone.start();
    toneStart = 1;
  }
  //place other code needed in function mousePressed() here
}

console.clear();

// UPDATE: there is a problem in chrome with starting audio context
//  before a user gesture. This fixes it.
document.documentElement.addEventListener('mousedown', () => {
  if (Tone.context.state !== 'running') Tone.context.resume();
});




const samplers = [
  new Tone.Sampler({
	"C1" : "TR808/BD/BD5050.wav",
	"C2" : "TR808/SD/SD5050.wav",
}),
];

// SEQUENCES 
let BDSequence = [[null, null, null, null], [null, null, null, null], [null, null, null, null],[null, null, null, null]];

let pattern1 = 
  new Tone.Sequence(function(time, note){
  samplers[0].triggerAttackRelease(note, 0.9);
	console.log(note);
}, BDSequence, "4n",);



// GAIN STRUCTURE
const gain = new Tone.Gain(1);
gain.toDestination();
samplers.forEach(sample => sample.connect(gain));








// Play - Stop toggle button
const startToggleBtn = document.getElementById('start-stop');

startToggleBtn.addEventListener('click', (event) => {
  Tone.Transport.toggle();
  pattern1.start(); 
});




const stepBtnContainer = document.querySelectorAll("button.samplebtn");

const step1Btn = document.getElementById('s1');
step1Btn.addEventListener('click', (event) => {
  if (BDSequence[0][0] == null) {
    BDSequence[0][0] = "C1";
    step1Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    BDSequence[0][0] = null;
    step1Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});

const step2Btn = document.getElementById('s2');
step2Btn.addEventListener('click', (event) => {
  if (BDSequence[0][1] == null) {
    BDSequence[0][1] = "C1";
    step2Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    BDSequence[0][1] = null;
    step2Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
const step3Btn = document.getElementById('s3');
const step4Btn = document.getElementById('s4');
const step5Btn = document.getElementById('s5');
const step6Btn = document.getElementById('s6');
const step7Btn = document.getElementById('s7');
const step8Btn = document.getElementById('s8');
const step9Btn = document.getElementById('s9');
const step10Btn = document.getElementById('s10');
const step11Btn = document.getElementById('s11');
const step12Btn = document.getElementById('s12');
const step13Btn = document.getElementById('s13');
const step14Btn = document.getElementById('s14');
const step15Btn = document.getElementById('s15');
const step16Btn = document.getElementById('s16');
