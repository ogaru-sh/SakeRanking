import ImageListItem from '@mui/material/ImageListItem';
import { SakeListItemBar } from '@/components/molecules/ranking/SakeListItemBar';
import { RankingViewItem } from '@/ts/modules/interfaces';
import { css } from '@emotion/react';

export const SakeListItem = (props: {
  item: RankingViewItem;
  index: number;
}) => {
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
