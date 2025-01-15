import { useState } from 'react';
import { useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import { MovieCard } from '../../components/movie-card/MovieCard';
import { SelectedMoviesSection } from '../../components/selected-movies-section/SelectedMoviesSection';
import { MOVIES_QUERY } from './queries';
import { useMovies } from '../../hooks/useMovies/useMovies';
import { IMovie } from '../../types/types';

export const Home: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { page },
    onCompleted: (data) => {
      console.log('Fetched data:', data);
    },
    onError: (error) => {
      console.error('Error fetching data:', error.message);
    },
  });

  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const paginationHandler = (_: any, page: number) => {
    setPage(page);
  };

  if (error) {
    return 'Error';
  }

  const pagesCount =
    data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
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
                  count={pagesCount}
                  page={page}
                  onChange={paginationHandler}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <SelectedMoviesSection
              selectedMovies={selectedMovies}
              deleteMovie={deleteMovie}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
