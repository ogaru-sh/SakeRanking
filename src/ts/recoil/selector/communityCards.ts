import { selector, DefaultValue } from 'recoil';
import {
  sakeRankingParamState,
  sakeRankingState
} from '@/ts/recoil/atom/communityCards';
import { SakeRanking } from '@/ts/modules/interfaces';
import { fetchAPI } from '@/ts/modules/fetchAPI';
import { config } from '@/ts/modules/config';

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
        const response = fetchAPI(config.sakeAPI.basePath.ranking, []);
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
