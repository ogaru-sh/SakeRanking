import { css } from '@emotion/react';
import pokerTable from '@/img/poker-table.png';
import { Players } from './Players';

const styles = {
  PokerField: css`
    position: relative;
    left: 50px;
    top: 100px;
  `,
  pokerTableWrapper: css`
    position: absolute;
    height: 300px;
  `,
  pokerTable: css`
    display: block;
    transform: rotate(90deg) translate(30%, 50%);
    width: 40%;
  `
};

const PokerTable = () => (
  <div css={styles.PokerField}>
    <div css={styles.pokerTableWrapper}>
      <img
        css={styles.pokerTable}
        src={pokerTable}
        className="App-logo"
        alt="logo"
      />
      <Players />
    </div>
  </div>
);

export { PokerTable };
