import { atom } from 'recoil';
import { RankingItem, ResponsiveItem, SakeRankingProps } from '@/ts/interfaces';

const AtomKeys = {
  SAKE_RANKING_STATE: 'sakeRankingState',
  SAKE_RANKING_PARAM_STATE: 'sakeRankingParamState',
  RESPONSIVE_ITEM_STATE: 'responsiveItemState',
  SAKE_FAVORITE_LIST_STATE: 'sakeFavoriteListState'
} as const;

export const sakeRankingState = atom<SakeRankingProps | null>({
  key: AtomKeys.SAKE_RANKING_STATE,
  default: null
});

export const sakeFavoriteListState = atom<RankingItem[] | []>({
  key: AtomKeys.SAKE_FAVORITE_LIST_STATE,
  default: []
});

export const sakeRankingParamState = atom<string[]>({
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
