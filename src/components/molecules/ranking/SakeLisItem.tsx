import ImageListItem from '@mui/material/ImageListItem';
import { RankingViewItem } from '@/ts/interfaces';
import { css } from '@emotion/react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { StarButton } from '@/components/molecules/ranking/StarButton';

// 日本酒ランキングリストのアイテムに被せて表示するバナー
const SakeListItemBar = (props: { item: RankingViewItem }) => {
  const { item } = props;
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

export const SakeListItem = (props: { item: RankingViewItem }) => {
  const { item } = props;
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
      <table>
        <tbody>
          <tr>
            <td>
              <img
                css={style.image}
                src={pictureUrl}
                alt={brand.name}
                loading="lazy"
              />
            </td>
            <td>
              <img
                css={style.image}
                src={flavorChartUrl}
                alt={brand.name}
                loading="lazy"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <SakeListItemBar item={item} />
    </ImageListItem>
  );
};