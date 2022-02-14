import ImageList from '@mui/material/ImageList';
import { SakeListItem } from '@/components/organisms/ranking/SakeLisItem';
import { useRecoilValue } from 'recoil';
import { sakeRankingSelector } from '@/ts/recoil/selector/sakeRanking';
import { RankingItem, SakeRanking } from '@/ts/modules/interfaces';
import { css } from '@emotion/react';
import { useResponsiveItem } from '@/ts/customHook/useResponsiveItem';
import { useLocation } from 'react-router-dom';
import { sakeFavoriteListState } from '@/ts/recoil/atom/sakeRanking';
import { config } from '@/ts/modules/config';

export const SakeImageList = () => {
  const { columns, listItemWidth } = useResponsiveItem();
  const { root, favorite } = config.pagePath;
  const location = useLocation();
  const style = {
    imageList: css`
      margin: 0 auto;
    `
  };
  const sakeRankingResult: SakeRanking | null = useRecoilValue(
    sakeRankingSelector('')
  );
  const favoriteList = useRecoilValue(sakeFavoriteListState);
  return (
    <ImageList
      css={style.imageList}
      sx={{ width: listItemWidth }}
      gap={20}
      cols={columns}
    >
      {/* 日本酒ランキングAPIからデータを取得し、ランキングを表示
          お気に入り画面の場合はお気に入りリストを表示 */}
      {sakeRankingResult !== null && location.pathname === root
        ? sakeRankingResult.ranking.map((item: RankingItem, index: number) => (
            <SakeListItem
              item={{ ...item, id: index }}
              index={index}
              key={index}
            />
          ))
        : location.pathname === favorite
        ? favoriteList.map((item: RankingItem, index: number) => (
            <SakeListItem item={item} index={index} key={index} />
          ))
        : ''}
    </ImageList>
  );
};
