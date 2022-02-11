import { css } from '@emotion/react';
import whiteMen from '@/img/human.png';

const Player = (props: { top: number; left: number }) => {
  const { top, left } = props;
  const styles = {
    player: css`
      position: absolute;
      width: 10%;
      left: 30%;
      top: ${top}px;
      left: ${left}px;
    `
  };
  return (
    <div>
      <img css={styles.player} src={whiteMen} className="App-logo" alt="logo" />
    </div>
  );
};

export { Player };
