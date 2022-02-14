import ImageList from '@mui/material/ImageList';
import { SakeListItem } from '@/components/molecules/ranking/SakeLisItem';
import { useRecoilValue } from 'recoil';
import { sakeRankingSelector } from '@/ts/recoil/selector/sakeRanking';
import { SakeRanking } from '@/ts/modules/interfaces';
import { css } from '@emotion/react';
import { useResponsiveItem } from '@/ts/customHook/useResponsiveItem';

export const SakeImageList = () => {
  const sakeRankingResult: SakeRanking | null = useRecoilValue(
    sakeRankingSelector('')
  );
  const style = {
    imageList: css`
      margin: 0 auto;
    `
  };
  const { columns, listItemWidth } = useResponsiveItem();
  return (
    <ImageList
      css={style.imageList}
      sx={{ width: listItemWidth }}
      gap={20}
      cols={columns}
    >
      {sakeRankingResult !== null
        ? sakeRankingResult.ranking.map(
            (item: RankingViewItem, index: number) => (
              <SakeListItem
                item={{ ...item, id: index }}
                index={index}
                key={index}
              />
            )
          )
        : ''}
    </ImageList>
  );
};
