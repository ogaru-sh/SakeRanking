import { atom } from 'recoil';
import { CommunityCards, CommunityStep } from '@/ts/interfaces';

const AtomKeys = {
  COMMUNITY_CARDS_STATE: 'communityCardsState',
  CURRENT_STEP_STATE: 'currentStepState',
  DISPLAYED_POOL_STATE: 'displayedPoolState',
  PLAYERS_CARDS_STATE: 'currentPlayersCardsState'
} as const;

export const communityCardsState = atom<CommunityCards>({
  key: AtomKeys.COMMUNITY_CARDS_STATE,
  default: {
    flop1: '',
    flop2: '',
    flop3: '',
    turn: '',
    river: ''
  }
});

export const currentStepState = atom<CommunityStep>({
  key: AtomKeys.CURRENT_STEP_STATE,
  default: ''
});

export const displayedPoolState = atom<boolean>({
  key: AtomKeys.DISPLAYED_POOL_STATE,
  default: false
});

export const playersCardsState = atom<string[]>({
  key: AtomKeys.PLAYERS_CARDS_STATE,
  default: []
});
