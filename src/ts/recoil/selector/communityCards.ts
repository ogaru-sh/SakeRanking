import { selector, DefaultValue } from 'recoil';
import { sakeRankingState } from '@/ts/recoil/atom/communityCards';
import { SakeRanking } from '@/ts/interfaces';

export const sakeRankingSelector = selector({
  key: 'sakeRankingFetchAPI',
  get: async ({ get }) => {
    const sakeRanking = get(sakeRankingState);
    if (sakeRanking) {
      return sakeRanking;
    } else {
      const endPoint = 'https://sakenowa.com/api/v2/brands/ranking?';
      const apiRequest = () => fetch(endPoint).then((x) => x.json());
      const response = await apiRequest();
      const result = {
        code: '200',
        result: response
      };
      return response as SakeRanking;
    }
  },
  set: ({ set }, newValue: SakeRanking | null) => {
    if (newValue instanceof DefaultValue) {
      return newValue;
    } else {
      set(sakeRankingState, newValue);
    }
  }
});
