import { atom } from 'recoil';
import {
  RankingItem,
  ResponsiveItem,
  SakeRanking
} from '@/ts/interfaces';

const AtomKeys = {
  SAKE_RANKING_STATE: 'sakeRankingState',
  SAKE_RANKING_PARAM_STATE: 'sakeRankingParamState',
  RESPONSIVE_ITEM_STATE: 'responsiveItem',
  SAKE_FAVORITE_LIST_STATE: 'sakeFavoriteListState'
} as const;

export const sakeRankingState = atom<SakeRanking | null>({
  key: AtomKeys.SAKE_RANKING_STATE,
  default: null
});

export const sakeFavoriteListState = atom<RankingItem[] | []>({
  key: AtomKeys.SAKE_FAVORITE_LIST_STATE,
  default: []
});

export const sakeRankingParamState = atom<String[]>({
  key: AtomKeys.SAKE_RANKING_PARAM_STATE,
  default: []
});

export const responsiveItemState = atom<ResponsiveItem>({
  key: AtomKeys.RESPONSIVE_ITEM_STATE,
  default: {
    columns: 0,
    listItemWidth: 0
  }
});
