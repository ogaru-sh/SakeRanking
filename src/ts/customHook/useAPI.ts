import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { SakeRanking } from '../modules/interfaces';
import {
  sakeRankingState,
  sakeRankingParamState
} from '../recoil/atom/communityCards';

import { sakeRankingSelector } from '../recoil/selector/communityCards';

export const useSakeRankigAPI = (param: any) => {
  const sakeRanking = useRecoilValue(sakeRankingSelector(param));
  return sakeRanking;
};
