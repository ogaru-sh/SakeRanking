import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { SakeRanking } from '../modules/interfaces';
import {
  sakeRankingState,
  sakeRankingParamState
} from '../recoil/atom/sakeRanking';

import { sakeRankingSelector } from '../recoil/selector/sakeRanking';

export const useSakeRankigAPI = (param: any) => {
  const sakeRanking = useRecoilValue(sakeRankingSelector(param));
  useEffect(() => {
    // paramを変更するとselectorでAPIが実行され、sakeRankingを取得
  }, []);
  return sakeRanking;
};
