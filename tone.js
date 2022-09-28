function mousePressed(){
  if (toneStart = 0){
    Tone.start();
    toneStart = 1;
  }
}

// UPDATE: there is a problem in chrome with starting audio context
//  before a user gesture. This fixes it.
document.documentElement.addEventListener('mousedown', () => {
  if (Tone.context.state !== 'running') Tone.context.resume();
});



// Creating sampler instruments

const samplers = [
  new Tone.Sampler({
	"C1" : "TR808/BD/BD5050.wav",
}),
  new Tone.Sampler({
  "C1" : "TR808/SD/SD0050.wav",
  }),
  new Tone.Sampler({
  "C1" : "TR808/LT/LT00.wav",
  }),
];



// GAIN STRUCTURE
const gain = new Tone.Gain(0.6);
gain.toMaster();

samplers.forEach(sampler => sampler.connect(gain));

const $rows = document.body.querySelectorAll('.step-sequencer > div'),
      notes = ['C1', 'C1', 'C1'];
let index = 0;

Tone.Transport.scheduleRepeat(repeat, '16n');

function repeat(time) {
  let step = index % 16;
  for (let i = 0; i < $rows.length; i++) {
    let sampler = samplers[i],
        note = notes[i],
        $row = $rows[i],
        $input = $row.querySelector(`input:nth-child(${step + 1})`);
    if ($input.checked) sampler.triggerAttackRelease(note, '2n', time);
  }
  index++;
}




// Play - Stop toggle button
const startToggleBtn = document.getElementById('start-stop');

startToggleBtn.addEventListener('click', (event) => {
  Tone.Transport.toggle();
});



// BassDrum Sequence Checkbox variables

let BDBox1 = $rows[0].querySelector('input:nth-child(1)');
let BDBox2 = $rows[0].querySelector('input:nth-child(2)');
let BDBox3 = $rows[0].querySelector('input:nth-child(3)');
let BDBox4 = $rows[0].querySelector('input:nth-child(4)');
let BDBox5 = $rows[0].querySelector('input:nth-child(5)');
let BDBox6 = $rows[0].querySelector('input:nth-child(6)');
let BDBox7 = $rows[0].querySelector('input:nth-child(7)');
let BDBox8 = $rows[0].querySelector('input:nth-child(8)');
let BDBox9 = $rows[0].querySelector('input:nth-child(9)');
let BDBox10 = $rows[0].querySelector('input:nth-child(10)');
let BDBox11 = $rows[0].querySelector('input:nth-child(11)');
let BDBox12 = $rows[0].querySelector('input:nth-child(12)');
let BDBox13 = $rows[0].querySelector('input:nth-child(13)');
let BDBox14 = $rows[0].querySelector('input:nth-child(14)');
let BDBox15 = $rows[0].querySelector('input:nth-child(15)');
let BDBox16 = $rows[0].querySelector('input:nth-child(16)');


// BassDrum Drum machine Buttons

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

// Tacky function linking Drum machine buttons to checkbox sequencer

step1Btn.addEventListener('click', (event) => {
  BDBox1.checked = !BDBox1.checked;
  if (BDBox1.checked) {
    step1Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step1Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
step2Btn.addEventListener('click', (event) => {
  BDBox2.checked = !BDBox2.checked;
  if (BDBox2.checked) {
    step2Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step2Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
step3Btn.addEventListener('click', (event) => {
  BDBox3.checked = !BDBox3.checked;
  if (BDBox3.checked) {
    step3Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step3Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
step4Btn.addEventListener('click', (event) => {
  BDBox4.checked = !BDBox4.checked;
  if (BDBox4.checked) {
    step4Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step4Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
step5Btn.addEventListener('click', (event) => {
  BDBox5.checked = !BDBox5.checked;
  if (BDBox5.checked) {
    step5Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step5Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
step6Btn.addEventListener('click', (event) => {
  BDBox6.checked = !BDBox6.checked;
  if (BDBox6.checked) {
    step6Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step6Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
step7Btn.addEventListener('click', (event) => {
  BDBox7.checked = !BDBox7.checked;
  if (BDBox7.checked) {
    step7Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step7Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
step8Btn.addEventListener('click', (event) => {
  BDBox8.checked = !BDBox8.checked;
  if (BDBox8.checked) {
    step8Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step8Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
step9Btn.addEventListener('click', (event) => {
  BDBox9.checked = !BDBox9.checked;
  if (BDBox9.checked) {
    step9Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step9Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
step10Btn.addEventListener('click', (event) => {
  BDBox10.checked = !BDBox10.checked;
  if (BDBox10.checked) {
    step10Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step10Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
step11Btn.addEventListener('click', (event) => {
  BDBox11.checked = !BDBox11.checked;
  if (BDBox11.checked) {
    step11Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step11Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
step12Btn.addEventListener('click', (event) => {
  BDBox12.checked = !BDBox12.checked;
  if (BDBox12.checked) {
    step12Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step12Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
step13Btn.addEventListener('click', (event) => {
  BDBox13.checked = !BDBox13.checked;
  if (BDBox13.checked) {
    step13Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step13Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
step14Btn.addEventListener('click', (event) => {
  BDBox14.checked = !BDBox14.checked;
  if (BDBox14.checked) {
    step14Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step14Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
step15Btn.addEventListener('click', (event) => {
  BDBox15.checked = !BDBox15.checked;
  if (BDBox15.checked) {
    step15Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step15Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});
step16Btn.addEventListener('click', (event) => {
  BDBox16.checked = !BDBox16.checked;
  if (BDBox16.checked) {
    step16Btn.firstElementChild.style.backgroundColor = "red";
  } else {
    step16Btn.firstElementChild.style.backgroundColor = "#570000";
  }
});