import ImageListItemBar from '@mui/material/ImageListItemBar';
import { ListItem } from '@/ts/interfaces';

export const SakeListItemBar = (props: { item: ListItem }) => {
  const { img, title, author } = props.item;
  return (
    <ImageListItemBar
      title={title}
      subtitle={<span>by: {author}</span>}
      position="below"
    />
  );
};
