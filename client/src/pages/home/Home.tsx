import { useState } from 'react';
import { useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import { MovieCard } from '../../components/movie-card/MovieCard';
import { MovieCardSelected } from '../../components/movie-card-selected/MovieCardSelected';
import { MOVIES_QUERY } from './queries';
import { useMovies } from '../../hooks/useMovies';
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

  const [page, setPage] = useState<number>(1);
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { page },
  });

  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const paginationHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

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
                      <Grid
                        key={movie.id}
                        size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                      >
                        <MovieCard movie={movie} onCardSelect={selectMovie} />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Box>
              <Box
                mt={2}
                pb={2}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Pagination
                  count={data?.movies?.totalPages}
                  page={page}
                  onChange={paginationHandler}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <SelectedMovies>
              {selectedMovies.map((movie: IMovie) => (
                <MovieCardSelected
                  key={movie.id}
                  movie={movie}
                  onCardDelete={deleteMovie}
                />
              ))}
            </SelectedMovies>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
