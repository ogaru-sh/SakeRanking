import { Player } from './Player';

const Players = () => (
  <div>
    <Player top={40} left={-50} />
    <Player top={40} left={120} />
    <Player top={150} left={-50} />
    <Player top={150} left={120} />
    <Player top={260} left={32} />
    <Player top={-50} left={32} />
  </div>
);

export { Players };
