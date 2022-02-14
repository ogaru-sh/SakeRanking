import { atom } from 'recoil';
import { SakeRanking } from '@/ts/modules/interfaces';

const AtomKeys = {
  SAKE_RANKING_STATE: 'sakeRankingState',
  SAKE_RANKING_PARAM_STATE: 'sakeRankingParamState',
  RESPONSIVE_ITEM_STATE: 'responsiveItem'
} as const;

export const sakeRankingState = atom<SakeRanking | null>({
  key: AtomKeys.SAKE_RANKING_STATE,
  default: null
});

export const sakeRankingParamState = atom<String[]>({
  key: AtomKeys.SAKE_RANKING_PARAM_STATE,
  default: []
});

export const responsiveItemState = atom<{
  columns: number;
  listItemWidth: number;
}>({
  key: AtomKeys.RESPONSIVE_ITEM_STATE,
  default: {
    columns: 0,
    listItemWidth: 0
  }
});
