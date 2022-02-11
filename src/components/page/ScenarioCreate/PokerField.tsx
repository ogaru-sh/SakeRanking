import { css } from '@emotion/react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  communityCardsState,
  currentStepState,
  displayedPoolState,
  playersCardsState
} from '@/components/recoil/atom/communityCards';
import { selectedPoolCardsState } from '@/components/recoil/selector/communityCards';

const PlayerCard = (props: { oneCard: string; index: number }) => {
  const { oneCard, index } = props;
  const [isPoolDisplayed, setIsPoolDisplayed] =
    useRecoilState(displayedPoolState);
  const setCurrentStep = useSetRecoilState(currentStepState);
  return (
    <button
      type="button"
      onClick={() => {
        if (isPoolDisplayed) {
          setIsPoolDisplayed(false);
          setCurrentStep('');
        } else {
          setIsPoolDisplayed(true);
          setCurrentStep('player');
        }
      }}
      css={css`
        padding: 0;
        border: none;
        background: transparent;
      `}
    >
      <img
        css={css`
          height: 73px;
          position: absolute;
          top: 0;
          right: ${51 * index}px;
        `}
        alt=""
        src={oneCard ? `img/cards/${oneCard}` : 'img/pokerItems/back.png'}
      />
    </button>
  );
};

const HoleCards = () => {
  const playersCards = useRecoilValue(playersCardsState);
  return (
    <div className="holecards">
      {(() => {
        const list = [];
        for (let i = 0; i < 2; i++) {
          const oneCard = playersCards[i] ? playersCards[i] : '';
          list.push(<PlayerCard oneCard={oneCard} index={i} key={i} />);
        }
        return list;
      })()}
    </div>
  );
};

const PlayerStatus = () => (
  <div className="name-chips">
    <div className="player-name">Player 1</div>
    <div className="chips">$1000.00</div>
  </div>
);

const BettedChips = () => <div className="bet">$80.00</div>;

const Pot = () => (
  <div id="pot">
    <div id="current-pot"></div>
    <div id="total-pot">Total pot: $1520.25</div>
  </div>
);

const Sheat = (props: { sheatNumber: number }) => {
  const { sheatNumber } = props;
  return (
    <div id={`seat${sheatNumber}`} className="seat">
      <HoleCards />
      <PlayerStatus />
      <BettedChips />
    </div>
  );
};

const Card = (props: { suitCardKind: string; cardIndex: number }) => {
  const { suitCardKind, cardIndex } = props;
  const currentStep = useRecoilValue(currentStepState);
  const [communityCards, setCommunityCards] =
    useRecoilState(communityCardsState);
  const [playersCards, setPlayersCards] = useRecoilState(playersCardsState);
  const cardFilePath = `${suitCardKind}/${suitCardKind}_${cardIndex}.png`;
  const selectedPoolCards = useRecoilValue(selectedPoolCardsState);
  const isSelected = selectedPoolCards.indexOf(cardFilePath) !== -1;
  return (
    <td>
      <button
        type="button"
        onClick={() => {
          if (currentStep !== 'player') {
            setCommunityCards({
              ...communityCards,
              [currentStep]: cardFilePath
            });
          } else {
            setPlayersCards([...playersCards, cardFilePath]);
          }
        }}
        css={css`
          padding: 0;
          border: none;
          background: transparent;
        `}
        disabled={isSelected}
      >
        <img
          src={
            isSelected ? 'img/pokeritems/back.png' : `img/cards/${cardFilePath}`
          }
          alt="card"
        />
      </button>
    </td>
  );
};

const CardPoolLine = (props: { suitCardKind: string }) => {
  const { suitCardKind } = props;
  const suitedCardMaxNumber = 14;
  return (
    <tr>
      {(() => {
        const list = [];
        for (let i = 2; i <= suitedCardMaxNumber; i++) {
          list.push(<Card suitCardKind={suitCardKind} cardIndex={i} key={i} />);
        }
        return list;
      })()}
    </tr>
  );
};

const CardPool = () => {
  const isPoolDisplayed = useRecoilValue(displayedPoolState);
  const styles = {
    cardPool: css`
      position: absolute;
      width: 200px;
      border-spacing: 0px;
      display: ${isPoolDisplayed ? '' : 'none'};
      z-index: 10000;
      background-color: white;
      bottom: 80px;
      right: 25px;
      padding: 3px 3px 0px 3px;
      img {
        width: 100%;
      }
    `
  };
  const suitCardLine = 4;
  const suitCardKind = ['club', 'diamond', 'heart', 'spade'];
  return (
    <table css={styles.cardPool}>
      <tbody>
        {(() => {
          const list = [];
          for (let i = 0; i < suitCardLine; i++) {
            list.push(
              <CardPoolLine
                suitCardKind={suitCardKind[i]}
                key={suitCardKind[i]}
              />
            );
          }
          return list;
        })()}
      </tbody>
    </table>
  );
};

const CommunityCard = (props: {
  communityStepId: 'flop1' | 'flop2' | 'flop3' | 'turn' | 'river';
}) => {
  const { communityStepId } = props;
  const [isPoolDisplayed, setIsPoolDisplayed] =
    useRecoilState(displayedPoolState);
  const setCurrentStep = useSetRecoilState(currentStepState);
  const communityCards = useRecoilValue(communityCardsState);
  return (
    <button
      type="button"
      aria-label="community card id"
      onClick={() => {
        if (isPoolDisplayed) {
          setIsPoolDisplayed(false);
          setCurrentStep('');
        } else {
          setIsPoolDisplayed(true);
          setCurrentStep(communityStepId);
        }
      }}
      id={communityStepId}
      css={css`
        padding: 0;
        border: none;
        background: transparent;
      `}
    >
      <img
        alt=""
        css={css`
          width: 50px;
          height: 73px;
          background-size: 100%;
        `}
        src={
          communityCards[communityStepId]
            ? `img/cards/${communityCards[communityStepId]}`
            : 'img/pokerItems/back.png'
        }
      />
    </button>
  );
};

const PokerField = () => (
  <div id="poker_table" className="poker-table" data-uid="">
    <Sheat sheatNumber={1} />
    {/* <Sheat sheatNumber={2} />
    <Sheat sheatNumber={3} />
    <Sheat sheatNumber={4} />
    <Sheat sheatNumber={5} />
    <Sheat sheatNumber={6} /> */}
    <div id="board">
      <CardPool />
      <CommunityCard communityStepId="flop1" />
      <CommunityCard communityStepId="flop2" />
      <CommunityCard communityStepId="flop3" />
      <CommunityCard communityStepId="turn" />
      <CommunityCard communityStepId="river" />
    </div>
    {/* <Pot /> */}
  </div>
);

export { PokerField };
