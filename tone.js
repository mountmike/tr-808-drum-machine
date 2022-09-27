const { Tone } = require("tone/build/esm/core/Tone");

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

const synths = [
  new Tone.Synth(),
  new Tone.Synth(),
  new Tone.Synth()
];

synths[0].oscillator.type = 'triangle';
synths[1].oscillator.type = 'sine';
synths[2].oscillator.type = 'sawtooth';

const gain = new Tone.Gain(0.5);
gain.toDestination();

synths.forEach(synth => synth.connect(gain));

const $rows = document.body.querySelectorAll('div.checkbox'),
      notes = ['G4', 'E4', 'G1'];
let index = 0;

Tone.Transport.scheduleRepeat(repeat, '8n');

function repeat(time) {
  let step = index % 8;
  for (let i = 0; i < $rows.length; i++) {
    let synth = synths[i],
        note = notes[i],
        $row = $rows[i],
        $input = $row.querySelector(`input:nth-child(${step + 1})`);
    if ($input.checked) synth.triggerAttackRelease(note, '8n', time);
  }
  index++;
}

// Play - Stop toggle button
const startToggleBtn = document.getElementById('start-stop');

startToggleBtn.addEventListener('click', (event) => {
  Tone.Transport.toggle();
});

//new sequence
pattern1 = new Tone.Sequence();




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