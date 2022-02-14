import { useState } from 'react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { RankingItem } from '@/ts/modules/interfaces';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useRecoilState } from 'recoil';
import { sakeFavoriteListState } from '@/ts/recoil/atom/sakeRanking';

export const SakeListItemBar = (props: { item: RankingItem }) => {
  const { item } = props;
  const { brand } = item.brandSummary;
  const [sakeFavoriteList, setSakeFavoriteList] = useRecoilState(
    sakeFavoriteListState
  );
  console.log(sakeFavoriteList);
  const [isFavorite, setFavorite] = useState<boolean>(false);
  const starColor = isFavorite ? 'red' : 'white';
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
      actionIcon={
        <IconButton
          sx={{ color: `${starColor}` }}
          aria-label={`star ${brand.name}`}
        >
          <StarBorderIcon
            onClick={() => {
              isFavorite ? setFavorite(false) : setFavorite(true);
              setSakeFavoriteList([...sakeFavoriteList, item]);
            }}
          />
        </IconButton>
      }
      actionPosition="left"
    />
  );
};
