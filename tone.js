

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

synths.forEach(synth => synth.toDestination());

const $rows = document.body.querySelectorAll('div > div'),
      notes = ['G5', 'E4', 'C3'];
let index = 0;

Tone.Transport.scheduleRepeat(repeat, '4n');
Tone.Transport.start();

function repeat(time) {
    let step = index % 4;
    for (let i = 0; i <$rows.length; i++) {
      let synth = synths[i],
        note = notes[i],
        $row = $rows[i],
        $input = $row.querySelector(`input:nth-child(${step + 1})`);
      if ($input.checked) synth.triggerAttackRelease(note, '4n', time);
    }
    index++;
}
