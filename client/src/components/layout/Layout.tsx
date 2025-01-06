import { Outlet } from 'react-router-dom';
import { CssBaseline, Container, Box } from '@mui/material';
import { Navigation } from '../navigation/Navigation';

export const Layout: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <Box sx={{ backgroundColor: (theme) => theme.palette.grey[100], paddingTop: 2, paddingBottom: 2 }}>
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Box>
    </>
  );
};
