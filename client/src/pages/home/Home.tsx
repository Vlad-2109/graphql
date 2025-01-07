import { useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { MovieCard } from '../../components/movie-card/MovieCard';
import { movies } from '../../stories/stub';
import { MovieCardSelected } from '../../components/movie-card-selected/MovieCardSelected';
import { MOVIES_QUERY } from './queries';
import { IMovie } from '../../types/types';

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

  const { loading, error, data } = useQuery(MOVIES_QUERY);

  if (error) {
    return 'Error';
  }

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
                {loading && 'Loading...'}
                {data && (
                  <Grid container spacing={2}>
                    {data.movies.results.map((movie: IMovie) => (
                      <Grid key={movie.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <MovieCard movie={movie} onCardSelect={() => {}} />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <SelectedMovies>
              <MovieCardSelected movie={movies[0]} onCardDelete={() => {}} />
            </SelectedMovies>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
