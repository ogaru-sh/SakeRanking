import ImageListItem from '@mui/material/ImageListItem';
import { SakeListItemBar } from '@/components/atoms/sakeCell/SakeListItemBar';
import { ListItem } from '@/ts/interfaces';

export const SakeListItem = (props: { item: ListItem }) => {
  const { img, title, author } = props.item;
  return (
    <ImageListItem key={img}>
      <img
        src={`${img}?w=248&fit=crop&auto=format`}
        srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
      />
      <SakeListItemBar item={props.item} />
    </ImageListItem>
  );
};
