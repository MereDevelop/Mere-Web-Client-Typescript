import { Outlet } from 'react-router-dom';

import useThemeColor from '@hooks/useThemeColor';

const RootLayout = () => {
  useThemeColor();

  return <Outlet />;
};

export default RootLayout;
