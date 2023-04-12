import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { constant } from '@/ts/config';
import { Props } from '@/ts/interfaces';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import { SideBarItem } from '@/components/atoms/AppContainer/SideBarItem';
import { config } from '@/ts/config';
import HomeIcon from '@mui/icons-material/Home';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const DefaultDrawer = () => {
  const { root, favorite } = config.pagePath;
  return (
    <Box>
      <Toolbar />
      <Divider />
      <SideBarItem title={'ランキング'} path={root} Icon={HomeIcon} />
      <Divider />
      <SideBarItem title={'お気に入り'} path={favorite} Icon={StarBorderIcon} />
    </Box>
  );
};

export const SideBar: React.FC<{ window?: Props['window'] }> = ({ window }) => {
  const drawerWidth = constant.drawerWidth;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth
          }
        }}
      >
        <DefaultDrawer />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth
          }
        }}
        open
      >
        <DefaultDrawer />
      </Drawer>
    </Box>
  );
};
