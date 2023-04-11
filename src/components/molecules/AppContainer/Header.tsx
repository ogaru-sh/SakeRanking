import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { constant } from '@/ts/config';

export const Header: React.FC = () => {
  const drawerWidth = constant.drawerWidth;
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          日本酒ランキング
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
