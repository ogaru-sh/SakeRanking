import { atom } from 'recoil';
import { SakeRanking } from '@/ts/interfaces';

const AtomKeys = {
  SAKE_RANKING_STATE: 'sakeRankingState'
} as const;

export const sakeRankingState = atom<SakeRanking | null>({
  key: AtomKeys.SAKE_RANKING_STATE,
  default: null
});
