import React, { useState } from "react";
import * as Tone from "tone";

interface SequencerProps {
  setOpenStepSequencer: (open: boolean) => void;
}

const StepSequencer: React.FC<SequencerProps> = ({ setOpenStepSequencer }) => {
  const notes = Array(64).fill("");
  const [bpm, setBpm] = useState(120);
  let isPlaying = false;

  const synths = [
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
    new Tone.Synth().toDestination(),
  ];

  const scaleOfNotes = ["C4", "D4", "Eb4", "F4"];

  let rows = [
    Array.from({ length: 16 }, (_, i) => ({
      note: scaleOfNotes[3],
      active: false,
    })),
    Array.from({ length: 16 }, (_, i) => ({
      note: scaleOfNotes[2],
      active: false,
    })),
    Array.from({ length: 16 }, (_, i) => ({
      note: scaleOfNotes[1],
      active: false,
    })),
    Array.from({ length: 16 }, (_, i) => ({
      note: scaleOfNotes[0],
      active: false,
    })),
  ];

  Tone.Transport.scheduleRepeat((time) => {
    rows.forEach((row, index) => {
      let synth = synths[index];
      let note = row[beat];
      if (note.active) synth.triggerAttackRelease(note.note, "16n", time);
    });
    beat = (beat + 1) % 16;
  }, "16n");

  const handleBpmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBpm(parseInt(event.target.value));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <p
        className=" font-bold text-[20px] cursor-pointer top-4 right-4 absolute"
        onClick={() => setOpenStepSequencer(false)}
      >
        X
      </p>
      <div className=" items-center w-[1000px] h-fit rounded-xl bg-background">
        <div className="bpm-controls">
          <label htmlFor="bpm">{bpm}BPM</label>
          <input
            type="range"
            min="60"
            max="240"
            value={bpm}
            onChange={handleBpmChange}
          />
          <button>Play</button>
          <button>Stop</button>
        </div>
        <div className="sequencer">
          {rows.map((row, i) =>
            row.map((note, j) => (
              <button
                key={j}
                className={`note ${i === 0 ? "active" : ""} ${
                  i % 4 ? "" : "first-beat-of-the-bar"
                }`}
              ></button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default StepSequencer;
