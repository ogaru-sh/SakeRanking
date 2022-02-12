import { selector, DefaultValue } from 'recoil';
import {
  sakeRankingParamState,
  sakeRankingState
} from '@/ts/recoil/atom/communityCards';
import { SakeRanking } from '@/ts/interfaces';

export const sakeRankingSelector = selector({
  key: 'sakeRankingFetchAPI',
  get: async ({ get }) => {
    const sakeRanking = get(sakeRankingState);
    const sakeRankingParam = get(sakeRankingParamState);
    console.log(sakeRankingParam);
    console.log('sakeRanking', sakeRanking);
    if (sakeRanking) {
      return sakeRanking;
    } else {
      const endPoint = `https://sakenowa.com/api/v2/brands/ranking?${sakeRankingParam}`;
      const apiRequest = () => fetch(endPoint).then((resp) => resp.json());
      const response = await apiRequest();
      console.log('apiRequest', apiRequest());
      const result = {
        code: '200',
        result: response
      };
      console.log('response', response);
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
