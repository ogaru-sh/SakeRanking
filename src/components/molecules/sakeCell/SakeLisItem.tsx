import ImageListItem from '@mui/material/ImageListItem';
import { SakeListItemBar } from '@/components/atoms/sakeCell/SakeListItemBar';
import { RankingItem } from '@/ts/modules/interfaces';
import { css } from '@emotion/react';

const style = {
  image: css`
    width: 200px;
    height: 200px;
  `
};

export const SakeListItem = (props: { item: RankingItem }) => {
  const { brand, pictures, flavorChartUrl } = props.item.brandSummary;
  const pictureUrl: string = pictures.length === 0 ? '' : pictures[0].url;
  return (
    <ImageListItem key={flavorChartUrl}>
      <table>
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
      </table>

      <SakeListItemBar item={props.item} />
    </ImageListItem>
  );
};
