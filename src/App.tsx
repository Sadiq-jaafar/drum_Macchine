import "./App.css";
import { AudioClip } from "./types";
import Drum from "./components/Drum";

const AudioClips: AudioClip[] = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater-1",
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater-2",
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater-3",
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater-4",
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap",
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open-HH",
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick-n-Hat",
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick",
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed-HH",
  },
];

function App() {
  const playAudio = (clip: AudioClip) => {
    const audioElement = document.getElementById(
      clip.keyTrigger
    ) as HTMLAudioElement;
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play().catch(console.error);
      document.getElementById("display")!.innerText = clip.description;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = AudioClips.find(
      (clip) => clip.keyTrigger === e.key.toUpperCase()
    );
    if (clip) {
      playAudio(clip);
    }
  };

  return (
    <div
      className="container"
      id="drum-machine"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <h1>FreeCodeCamp Drum Machine</h1>
      <div className="whole-drum">
        {AudioClips.map((clip) => (
          <Drum key={clip.keyTrigger} audioClip={clip} playAudio={playAudio} />
        ))}
      </div>
      <div id="display"></div>
    </div>
  );
}

export default App;
