import { Outlet } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import { Navigation } from '../navigation/Navigation';

export const Layout: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <Container maxWidth='xl'>
        <Outlet />
      </Container>
    </>
  );
};
