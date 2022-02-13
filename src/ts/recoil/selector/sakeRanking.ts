import { selector, DefaultValue, selectorFamily } from 'recoil';
import {
  sakeRankingParamState,
  sakeRankingState
} from '@/ts/recoil/atom/sakeRanking';
import { FetchAPI, SakeRanking } from '@/ts/modules/interfaces';
import { fetchAPI } from '@/ts/modules/fetchAPI';
import { config } from '@/ts/modules/config';

export const sakeRankingSelector = selectorFamily({
  key: 'sakeRankingFetchAPI',
  get:
    (param: string) =>
    async ({ get }) => {
      const sakeRanking = get(sakeRankingState);
      const sakeRankingParam = get(sakeRankingParamState);
      const sakeParam =
        sakeRankingParam.length === 0 ? '' : sakeRankingParam.join('&');
      if (sakeRanking && param === sakeParam) {
        return sakeRanking;
      } else {
        try {
          const response = fetchAPI(config.sakeAPI.basePath.ranking, param);
          return response;
        } catch (error: any) {
          throw new Error(error);
        }
      }
    }
});
