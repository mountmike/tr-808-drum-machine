let toneStart = 0;

function mousePressed(){
  if (toneStart = 0){
    Tone.start();
    toneStart = 1;
  }
  //place other code needed in function mousePressed() here
}


const samples = [
  new Tone.Sampler({
	"C1" : "TR808/BD/BD5050.wav",
	"C2" : "TR808/SD/SD5050.wav",
}),

];

// new sequence
let pattern1 = new Tone.Sequence(function(time, note){
	console.log(note);
//straight quater notes
}, ["C1", "C1", "C1", "C1"], "4n");


const gain = new Tone.Gain(0.8);
gain.toDestination();

samples.forEach(sample => sample.connect(gain));



const $rows = document.body.querySelectorAll('div.checkbox'),
      notes = ['C1', 'C2', 'G1'];
let index = 0;


Tone.Transport.scheduleRepeat(repeat, '16n');

function repeat(time) {
  let step = index % 16;
  for (let i = 0; i < pattern1.length; i++) {
    let sample = samples[i],
        note = notes[i],
        pattern1 = pattern1[i],
        $input = $row.querySelector(`input:nth-child(${step + 1})`);
    if ($input.checked) sample.triggerAttackRelease(note, '16n', time);
  }
  index++;
}

// Play - Stop toggle button
const startToggleBtn = document.getElementById('start-stop');

startToggleBtn.addEventListener('click', (event) => {
  Tone.Transport.toggle();
});


// making sampler
const sampler = new Tone.Sampler({
	"C1" : "TR808/BD/BD5050.wav",
	"C2" : "TR808/SD/SD5050.wav",
	"C3" : "TR808/LT/LT10.wav",
	"C4" : "TR808/MT/MT10.wav",
}, function(){
	//sampler will repitch the closest sample
	sampler.triggerAttack("C1")
})


const stepBtnContainer = document.querySelectorAll("button.samplebtn");

const step1Btn = document.getElementById('s1');
const step2Btn = document.getElementById('s2');
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