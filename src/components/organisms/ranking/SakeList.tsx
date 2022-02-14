import { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import { SakeListItem } from '@/components/molecules/ranking/SakeLisItem';
import { useRecoilValue } from 'recoil';
import { sakeRankingSelector } from '@/ts/recoil/selector/sakeRanking';
import { SakeRanking } from '@/ts/modules/interfaces';
import { css } from '@emotion/react';
import { constant } from '@/ts/modules/config';

export const SakeImageList = () => {
  const sakeRankingResult: SakeRanking | null = useRecoilValue(
    sakeRankingSelector('')
  );
  const style = {
    imageList: css`
      margin: 0 auto;
    `
  };
  const { breakpoints } = constant;
  const getColumns = (width: number) => {
    if (width < breakpoints.sm) {
      return 1;
    } else {
      return 2;
    }
  };

  const getListItemWidth = (width: number) => {
    if (width < breakpoints.sm) {
      return 300;
    } else {
      return 900;
    }
  };

  const [columns, setColumns] = useState(getColumns(window.innerWidth));
  const [listItemWidth, setListItemWidth] = useState(
    getListItemWidth(window.innerWidth)
  );

  const updateDimensions = () => {
    setColumns(getColumns(window.innerWidth));
    setListItemWidth(getListItemWidth(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <ImageList
      css={style.imageList}
      sx={{ width: listItemWidth }}
      gap={20}
      cols={columns}
    >
      {sakeRankingResult !== null
        ? sakeRankingResult.ranking.map((item, index) => (
            <SakeListItem item={item} key={index} />
          ))
        : ''}
    </ImageList>
  );
};
