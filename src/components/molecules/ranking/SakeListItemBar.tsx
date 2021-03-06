import ImageListItemBar from '@mui/material/ImageListItemBar';
import { RankingViewItem } from '@/ts/interfaces';
import { StarButton } from '../../atoms/ranking/StarButton';

// 日本酒ランキングリストのアイテムに被せて表示するバナー
export const SakeListItemBar = (props: { item: RankingViewItem }) => {
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
