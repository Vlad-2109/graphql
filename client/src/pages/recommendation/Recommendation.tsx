import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { MOVIES_BY_IDS_QUERY } from './queries';
import { IMovie } from '../../types/types';
import { MovieCard } from '../../components/movie-card/MovieCard';

export const Recommendation: React.FC = () => {
  let [searchParams] = useSearchParams();
  const title = searchParams.get('title');
  const ids = searchParams.get('ids');

  const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
    variables: {
      ids: ids?.split(',').map((id) => +id),
    },
    onCompleted: (data) => {
      console.log('Fetched data:', data);
    },
    onError: (error) => {
      console.error('Error fetching data:', error.message);
    },
  });

  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    <div>Error. Try again!</div>;
  }

  return (
    <>
      <Typography variant="h1" component="h1" gutterBottom>
        {title}
      </Typography>
      {data && (
        <Grid container spacing={2}>
          {data.moviesByIds.map((movie: IMovie) => (
            <Grid key={movie.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <MovieCard movie={movie} isPreviewMode onCardSelect={() => {}}/>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
