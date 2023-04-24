import { RecoilState, selector } from 'recoil';
import { sakeFavoriteListState } from '@/ts/recoil/atom/sakeRanking';
import { RankingItem } from '@/ts/interfaces';

export const sakeFavoriteSelector: RecoilState<RankingItem[]> = selector({
  key: 'sakeFavoriteSelector',
  get: ({ get }) => get(sakeFavoriteListState),
  set: ({ set }, newValue) => set(sakeFavoriteListState, newValue)
});
