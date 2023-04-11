import { selectorFamily } from 'recoil';
import {
  sakeRankingParamState,
  sakeRankingState
} from '@/ts/recoil/atom/sakeRanking';
import { SakeRankingProps } from '@/ts/interfaces';
import { fetchAPI } from '@/ts/modules/fetchAPI';
import { config } from '@/ts/config';

export const sakeRankingSelector = selectorFamily({
  key: 'sakeRankingFetchAPI',
  get:
    (param: string) =>
    async ({ get }) => {
      const sakeRanking = get(sakeRankingState);
      const sakeRankingParam = get(sakeRankingParamState);
      const sakeParam: string =
        sakeRankingParam.length === 0 ? '' : sakeRankingParam.join('&');
      if (sakeRanking && param === sakeParam) {
        return sakeRanking;
      } else {
        try {
          const response: Promise<SakeRankingProps | null> = fetchAPI(
            config.sakeAPI.basePath.ranking,
            param
          );
          return response;
        } catch (error: unknown) {
          throw new Error(error as string);
        }
      }
    }
});
