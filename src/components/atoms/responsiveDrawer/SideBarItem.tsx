import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export const SideBarItem = (props: {
  title: string;
  path: string;
  Icon: any;
}) => {
  const { title, path, Icon } = props;
  const navigate = useNavigate();
  return (
    <List>
      <ListItem
        button
        key={title}
        onClick={() => {
          navigate(path);
        }}
      >
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </List>
  );
};
