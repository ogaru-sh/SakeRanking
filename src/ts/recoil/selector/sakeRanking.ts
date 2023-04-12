import { selectorFamily } from 'recoil';
import {
  sakeRankingParamState,
  sakeRankingState
} from '@/ts/recoil/atom/sakeRanking';
import { SakeRankingProps } from '@/ts/interfaces';
import { fetchAPI } from '@/ts/modules/fetchAPI';
import { config } from '@/ts/config';

export const fetchSakeRankingSelector = selectorFamily({
  key: 'fetchSakeRankingSelector',
  get:
    (param: string) =>
    async ({ get }) => {
      const sakeRanking = get<SakeRankingProps | null>(sakeRankingState);
      const sakeRankingParam = get<string[]>(sakeRankingParamState);
      const sakeParam: string =
        sakeRankingParam.length === 0 ? '' : sakeRankingParam.join('&');
      if (sakeRanking && param === sakeParam) {
        return sakeRanking;
      } else {
        try {
          const response: SakeRankingProps | null = await fetchAPI(
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
