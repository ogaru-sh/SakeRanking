import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { constant } from '@/ts/modules/config';

export const Header = () => {
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
          【2022 2月】日本酒ランキング
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
