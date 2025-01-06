import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { MovieCard } from '../../components/movie-card/MovieCard';

export const Home: React.FC = () => {
  
  const SelectedMovies = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 'calc(100vh - 140px)',
    position: 'sticky',
    top: theme.spacing(2),
  }));

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Paper>Filters section</Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper>
              <Box sx={{ flexGrow: 1, padding: 1 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <MovieCard />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <MovieCard />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <MovieCard />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <MovieCard />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <SelectedMovies>Selected movies</SelectedMovies>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
