import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardMenu } from '../card-menu/CardMenu';
import { MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import { IMovieCardSelectedProps } from '../../types/types';

export const MovieCardSelected: React.FC<IMovieCardSelectedProps> = ({
  movie,
  onCardDelete,
}) => {
  return (
    <Card sx={{ display: 'flex', minHeight: '164px' }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={movie.image}
        alt={movie.title}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          position: 'relative',
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            {movie.releaseDate}
          </Typography>
        </CardContent>
        <Box sx={{ padding: 2, pt: 0 }}>
          {movie.genres?.length ? (
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: 'text.secondary' }}
            >
              {movie.genres[0].name}
            </Typography>
          ) : null}
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
          >
            Length: {movie.runtime}
          </Typography>
        </Box>
        <CardMenu>
          <MenuItem onClick={() => onCardDelete(movie)}>Delete</MenuItem>
        </CardMenu>
      </Box>
    </Card>
  );
};
