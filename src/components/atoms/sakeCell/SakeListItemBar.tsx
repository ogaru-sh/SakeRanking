import ImageListItemBar from '@mui/material/ImageListItemBar';
import { RankingItem } from '@/ts/modules/interfaces';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const SakeListItemBar = (props: { item: RankingItem }) => {
  const { brand, pictures, flavorChartUrl } = props.item.brandSummary;
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
        <IconButton sx={{ color: 'white' }} aria-label={`star ${brand.name}`}>
          <StarBorderIcon />
        </IconButton>
      }
      actionPosition="left"
    />
  );
};
