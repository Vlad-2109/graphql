import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Navigation } from '../navigation/Navigation';

export const Layout: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <Outlet />
    </>
  );
};
