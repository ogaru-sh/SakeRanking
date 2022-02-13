import ImageList from '@mui/material/ImageList';
import { SakeListItem } from '@/components/molecules/sakeCell/SakeLisItem';
import { useRecoilValue } from 'recoil';
import { sakeRankingSelector } from '@/ts/recoil/selector/sakeRanking';
import { SakeRanking } from '@/ts/modules/interfaces';
import { css } from '@emotion/react';

export const SakeImageList = () => {
  const sakeRankingResult: SakeRanking | null = useRecoilValue(
    sakeRankingSelector('')
  );
  const style = {
    imageList: css`
      margin: 0 auto;
    `
  };
  return (
    <ImageList css={style.imageList} sx={{ width: 900 }} gap={20} cols={2}>
      {sakeRankingResult !== null
        ? sakeRankingResult.ranking.map((item, index) => (
            <SakeListItem item={item} key={index} />
          ))
        : ''}
    </ImageList>
  );
};
