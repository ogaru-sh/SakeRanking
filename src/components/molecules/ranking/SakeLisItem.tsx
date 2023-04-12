import ImageListItem from '@mui/material/ImageListItem';
import { RankingViewItem } from '@/ts/interfaces';
import { css } from '@emotion/react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { StarButton } from '@/components/molecules/ranking/StarButton';
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@mui/material';

// 日本酒ランキングリストのアイテムに被せて表示するバナー
const SakeListItemBar: React.FC<{ item: RankingViewItem }> = ({ item }) => {
  const { brand } = item.brandSummary;
  return (
    <ImageListItemBar
      sx={{
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
      }}
      title={brand.name}
      subtitle={brand.brewery.name}
      position="top"
      actionIcon={<StarButton item={item} />}
      actionPosition="left"
    />
  );
};

export const SakeListItem: React.FC<{ item: RankingViewItem }> = ({ item }) => {
  const { brand, pictures, flavorChartUrl } = item.brandSummary;
  const pictureUrl: string = pictures.length === 0 ? '' : pictures[0].url;
  const style = {
    image: css`
      width: 200px;
      height: 200px;
    `
  };
  return (
    // 日本酒のイメージとフレーバーのレーダーチャートを並べて表示
    <ImageListItem key={flavorChartUrl}>
      <Grid container>
        <Grid item>
          <Box
            component="img"
            css={style.image}
            src={pictureUrl}
            alt={brand.name}
            loading="lazy"
          />
        </Grid>
        <Grid item>
          <Box
            component="img"
            css={style.image}
            src={flavorChartUrl}
            alt={brand.name}
            loading="lazy"
          />
        </Grid>
      </Grid>
      <SakeListItemBar item={item} />
    </ImageListItem>
  );
};
