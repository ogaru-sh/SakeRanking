import { atom } from 'recoil';
import { SakeRanking } from '@/ts/interfaces';

const AtomKeys = {
  SAKE_RANKING_STATE: 'sakeRankingState',
  SAKE_RANKING_PARAM_STATE: 'sakeRankingParamState'
} as const;

export const sakeRankingState = atom<SakeRanking | null>({
  key: AtomKeys.SAKE_RANKING_STATE,
  default: null
});

export const sakeRankingParamState = atom<String>({
  key: AtomKeys.SAKE_RANKING_PARAM_STATE,
  default: ''
});
