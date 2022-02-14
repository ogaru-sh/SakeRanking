import { useState } from 'react';
import { RankingViewItem } from '@/ts/modules/interfaces';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useRecoilState } from 'recoil';
import { sakeFavoriteListState } from '@/ts/recoil/atom/sakeRanking';
import { useLocation } from 'react-router-dom';
import { config } from '@/ts/modules/config';

export const StarButton = (props: { item: RankingViewItem }) => {
  const { item } = props;
  const { brand } = item.brandSummary;
  const [sakeFavoriteList, setSakeFavoriteList] = useRecoilState(
    sakeFavoriteListState
  );
  const location = useLocation();
  const [isFavorite, setFavorite] = useState<boolean>(
    location.pathname === config.pagePath.favorite ? true : false
  );
  const starColor = isFavorite ? 'red' : 'white';
  return (
    <IconButton
      sx={{ color: `${starColor}` }}
      aria-label={`star ${brand.name}`}
      onClick={() => {
        console.log(sakeFavoriteList);
        console.log(item);
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
