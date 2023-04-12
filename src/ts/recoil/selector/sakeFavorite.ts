import { selector } from 'recoil';
import { sakeFavoriteListState } from '@/ts/recoil/atom/sakeRanking';

export const sakeFavoriteSelector = selector({
  key: 'sakeFavoriteSelector',
  get: ({ get }) => get(sakeFavoriteListState),
  set: ({ set }, newValue) => set(sakeFavoriteListState, newValue)
});
