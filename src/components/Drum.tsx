import { AudioClip } from "../types";

interface DrumProps {
  audioClip: AudioClip;
  playAudio: (clip: AudioClip) => void;
}

const Drum = ({ audioClip, playAudio }: DrumProps) => {
  return (
    <button
      className="drum-pad"
      id={"drum-" + audioClip.keyTrigger}
      onClick={() => playAudio(audioClip)}
    >
      <audio
        className="clip"
        id={audioClip.keyTrigger}
        src={audioClip.url}
      ></audio>
      {audioClip.keyTrigger}
    </button>
  );
};

export default Drum;
