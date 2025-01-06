import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import { CardMenu } from '../card-menu/CardMenu';
import { IMovieCardProps } from '../../types/types';

const CardInfo = styled(CardContent)(({ theme }) => ({
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}));

export const MovieCard: React.FC<IMovieCardProps> = ({ movie, onCardSelect}) => {

  return (
    <Card sx={{ maxWidth: 250, position: 'relative' }}>
      <CardMenu onCardSelect={onCardSelect} />
      <CardMedia
        component="img"
        height="250"
        image={movie.image}
        alt={movie.title}
      />
      <CardInfo>
        <Typography variant="h6" gutterBottom component="div">
          {movie.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {movie.releaseDate}
        </Typography>
      </CardInfo>
    </Card>
  );
};
