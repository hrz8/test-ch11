import { useState } from 'react';
import { Player, ControlBar, PlayToggle } from 'video-react';

function App() {
  const [player, setPlayer] = useState(null);

  return (
    <>
      <Player ref={(instance) => setPlayer(instance)} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
        <ControlBar autoHide={false} disableDefaultControls={true}>
          {/* <PlayToggle /> */}
        </ControlBar>
      </Player>

      <button onClick={() => {
        player.play();
      }}>Play</button>

      <button onClick={() => {
        player.pause();
      }}>Pause</button>

      <button onClick={() => {
        player.toggleFullscreen();
      }}>FullScreen</button>

      <button onClick={() => {
        player.muted = true;
      }}>Mute</button>
    </>
  )
}

export default App
