import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Header } from '@/components/molecules/AppContainer/Header';
import { constant } from '@/ts/config';
import { Props } from '@/ts/interfaces';
import { SideBar } from '../../molecules/AppContainer/SideBar';

export const AppContainer = (props: Props) => {
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
