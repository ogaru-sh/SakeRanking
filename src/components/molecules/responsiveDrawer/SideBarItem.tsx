import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';

export const SideBarItem = (props: { title: string; path: string }) => {
  const { title, path } = props;
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
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </List>
  );
};
