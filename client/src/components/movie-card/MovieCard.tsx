import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { MenuItem, Box, styled } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CardMenu } from '../card-menu/CardMenu';
import { IMovieCardProps } from '../../types/types';

const CardInfo = styled(CardContent)(({ theme }) => ({
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}));

const PlusIcon = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255, 255, 255, .6)',
  cursor: 'pointer',
  '&:hover': {
    opacity: 1,
  },
}));

export const MovieCard: React.FC<IMovieCardProps> = ({
  movie,
  onCardSelect,
  isPreviewMode,
}) => {
  return (
    <Card sx={{ maxWidth: 250, position: 'relative' }}>
      {!isPreviewMode && (
        <CardMenu>
          <MenuItem onClick={() => onCardSelect(movie)}>Select</MenuItem>
        </CardMenu>
      )}

      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="250"
          image={movie.image}
          alt={movie.title}
        />
        {!isPreviewMode && (
          <PlusIcon onClick={() => onCardSelect(movie)}>
            <AddCircleOutlineIcon sx={{ fontSize: 80 }} />
          </PlusIcon>
        )}
      </Box>

      <CardInfo>
        <Typography variant="h6" gutterBottom component="div">
          {movie.title}
        </Typography>
        <Typography mb={0} variant="subtitle1" gutterBottom component="div">
          {movie.releaseDate}
        </Typography>
      </CardInfo>
    </Card>
  );
};
