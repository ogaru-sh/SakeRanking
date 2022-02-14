import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import { SideBarItem } from '@/components/molecules/responsiveDrawer/SideBarItem';
import { config } from '@/ts/modules/config';

export const DefaultDrawer = () => {
  const { root, favorite } = config.pagePath;
  return (
    <div>
      <Toolbar />
      <Divider />
      <SideBarItem title={'ランキング'} path={root} />
      <Divider />
      <SideBarItem title={'お気に入り'} path={favorite} />
    </div>
  );
};
