import ImageList from '@mui/material/ImageList';
import { SakeListItem } from '@/components/organisms/ranking/SakeLisItem';
import { useRecoilValue } from 'recoil';
import { sakeRankingSelector } from '@/ts/recoil/selector/sakeRanking';
import { RankingItem, SakeRanking } from '@/ts/modules/interfaces';
import { css } from '@emotion/react';
import { useResponsiveItem } from '@/ts/customHook/useResponsiveItem';
import { useLocation } from 'react-router-dom';
import { sakeFavoriteListState } from '@/ts/recoil/atom/sakeRanking';

export const SakeImageList = () => {
  const sakeRankingResult: SakeRanking | null = useRecoilValue(
    sakeRankingSelector('')
  );
  const style = {
    imageList: css`
      margin: 0 auto;
    `
  };
  const location = useLocation();
  console.log(useLocation());
  const { columns, listItemWidth } = useResponsiveItem();
  const favoriteList = useRecoilValue(sakeFavoriteListState);
  return (
    <ImageList
      css={style.imageList}
      sx={{ width: listItemWidth }}
      gap={20}
      cols={columns}
    >
      {sakeRankingResult !== null && location.pathname === '/'
        ? sakeRankingResult.ranking.map((item: RankingItem, index: number) => (
            <SakeListItem
              item={{ ...item, id: index }}
              index={index}
              key={index}
            />
          ))
        : location.pathname === '/favorite'
        ? favoriteList.map((item: RankingItem, index: number) => (
            <SakeListItem
              item={{ ...item, id: index }}
              index={index}
              key={index}
            />
          ))
        : ''}
    </ImageList>
  );
};
