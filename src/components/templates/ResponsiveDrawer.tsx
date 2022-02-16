import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Header } from '@/components/organisms/responsiveDrawer/AppBar';
import { constant } from '@/ts/modules/config';
import { Props } from '@/ts/modules/interfaces';
import { SideBar } from '../organisms/responsiveDrawer/SideBar';

export const ResponsiveDrawer = (props: Props) => {
  const drawerWidth = constant.drawerWidth;
  const { window, children } = props;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <SideBar window={window} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
