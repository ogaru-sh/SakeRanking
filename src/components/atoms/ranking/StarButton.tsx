import { useState } from 'react';
import { RankingViewItem } from '@/ts/modules/interfaces';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useRecoilState } from 'recoil';
import { sakeFavoriteListState } from '@/ts/recoil/atom/sakeRanking';

export const StarButton = (props: { item: RankingViewItem }) => {
  const { item } = props;
  const { brand } = item.brandSummary;
  const [sakeFavoriteList, setSakeFavoriteList] = useRecoilState(
    sakeFavoriteListState
  );

  const [isFavorite, setFavorite] = useState<boolean>(false);
  const starColor = isFavorite ? 'red' : 'white';
  return (
    <IconButton
      sx={{ color: `${starColor}` }}
      aria-label={`star ${brand.name}`}
      onClick={() => {
        if (isFavorite) {
          const copyList = sakeFavoriteList.filter((val) => {
            return val.id !== item.id;
          });
          setFavorite(false);
          setSakeFavoriteList(copyList);
        } else {
          setFavorite(true);
          setSakeFavoriteList([...sakeFavoriteList, item]);
        }
      }}
    >
      <StarBorderIcon />
    </IconButton>
  );
};
