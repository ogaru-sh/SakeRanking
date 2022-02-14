import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import { SideBarItem } from '@/components/molecules/responsiveDrawer/SideBarItem';

export const DefaultDrawer = () => (
  <div>
    <Toolbar />
    <Divider />
    <SideBarItem title={'ランキング'} path={'/'} />
    <Divider />
    <SideBarItem title={'お気に入り'} path={'favorite'} />
  </div>
);
