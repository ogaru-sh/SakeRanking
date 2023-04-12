import { useState } from 'react';
import { RankingViewItem } from '@/ts/interfaces';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useRecoilState } from 'recoil';
import { sakeFavoriteSelector } from '@/ts/recoil/selector/sakeFavorite';

// お気に入りボタン
export const StarButton: React.FC<{ item: RankingViewItem }> = ({ item }) => {
  const [sakeFavoriteList, setSakeFavoriteList] =
    useRecoilState(sakeFavoriteSelector);

  const isFavoriteItem = sakeFavoriteList.some((val) => val.rank === item.rank);

  return (
    <IconButton
      sx={{ color: isFavoriteItem ? 'red' : 'white' }}
      aria-label={`star ${item.brandSummary.brand.name}`}
      onClick={() => {
        if (isFavoriteItem) {
          // クリックした日本酒がお気に入りリストに入っていれば
          // それ以外を返却し新しいリストを作成
          const filteredFavoriteList = sakeFavoriteList.filter((val) => {
            return val.rank !== item.rank;
          });
          setSakeFavoriteList(filteredFavoriteList);
        } else {
          setSakeFavoriteList([...sakeFavoriteList, item]);
        }
      }}
    >
      <StarBorderIcon />
    </IconButton>
  );
};
