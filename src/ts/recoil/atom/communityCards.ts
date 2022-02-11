import { atom } from 'recoil';
import { CommunityCards } from '@/ts/interfaces';

const AtomKeys = {
  COMMUNITY_CARDS_STATE: 'communityCardsState'
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
