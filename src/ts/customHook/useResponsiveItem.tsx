import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { constant } from '@/ts/modules/config';
import { responsiveItemState } from '@/ts/recoil/atom/sakeRanking';
import { ResponsiveItem } from '../modules/interfaces';

export const useResponsiveItem = () => {
  const { breakpoints } = constant;
  const getColumns = (width: number): number => {
    if (width < breakpoints.sm) {
      return 1;
    } else {
      return 2;
    }
  };

  const getListItemWidth = (width: number): number => {
    if (width < breakpoints.sm) {
      return 300;
    } else {
      return 900;
    }
  };

  const setResponsiveItem =
    useSetRecoilState<ResponsiveItem>(responsiveItemState);

  const responsiveItem = {
    columns: getColumns(window.innerWidth),
    listItemWidth: getListItemWidth(window.innerWidth)
  };

  const updateDimensions = () => {
    setResponsiveItem(responsiveItem);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return responsiveItem;
};
