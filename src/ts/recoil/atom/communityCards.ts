import { atom } from 'recoil';
import { CommunityCards, SakeRanking } from '@/ts/interfaces';

const AtomKeys = {
  COMMUNITY_CARDS_STATE: 'communityCardsState',
  SAKE_RANKING_STATE: 'sakeRankingState'
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

export const sakeRankingState = atom<SakeRanking>({
  key: AtomKeys.SAKE_RANKING_STATE,
  default: {
    copyright: '',
    yearMonth: '',
    overall: [],
    area: []
  }
});
