import { useState } from 'react';
import { RankingViewItem } from '@/ts/interfaces';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useRecoilState } from 'recoil';
import { sakeFavoriteListState } from '@/ts/recoil/atom/sakeRanking';
import { useLocation } from 'react-router-dom';
import { config } from '@/ts/config';

// お気に入りボタン
export const StarButton: React.FC<{ item: RankingViewItem }> = ({ item }) => {
  const { brand } = item.brandSummary;
  const [sakeFavoriteList, setSakeFavoriteList] = useRecoilState(
    sakeFavoriteListState
  );
  const location = useLocation();
  // ランキングページでお気に入り表示するためのチェック
  const wasFavoriteItem = sakeFavoriteList.find((val) =>
    val.id === item.id ? true : false
  );
  // お気に入りページであれば、最初からお気に入りボタンが選択済みとなるように初期化
  const [isFavorite, setFavorite] = useState<boolean>(
    location.pathname === config.pagePath.favorite || wasFavoriteItem
      ? true
      : false
  );
  const starColor = isFavorite ? 'red' : 'white';
  return (
    <IconButton
      sx={{ color: `${starColor}` }}
      aria-label={`star ${brand.name}`}
      onClick={() => {
        if (isFavorite) {
          // クリックした日本酒がお気に入りリストに入っていれば
          // それ以外を返却し新しいリストを作成
          const filteredFavoriteList = sakeFavoriteList.filter((val) => {
            return val.id !== item.id;
          });
          setFavorite(false);
          setSakeFavoriteList(filteredFavoriteList);
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
