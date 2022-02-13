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
      try {
        const endPoint = `http://localhost:3000/api/ranking?${sakeRankingParam}`;
        console.log(endPoint);
        const apiRequest = () =>
          fetch(endPoint).then((resp) => {
            console.log(resp.json());
            return resp.json();
          });
        const response = await apiRequest();
        console.log('apiRequest', apiRequest());
        const result = {
          code: '200',
          result: response
        };
        console.log('response', response);
        return response as SakeRanking;
      } catch (error) {
        console.log(error);
      }
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
