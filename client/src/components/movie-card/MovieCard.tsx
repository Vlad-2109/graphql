import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import { CardMenu } from '../card-menu/CardMenu';

const CardInfo = styled(CardContent)(({ theme }) => ({
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}));

export const MovieCard: React.FC = () => {
  const onAddClick = () => alert('movie is added');

  return (
    <Card sx={{ maxWidth: 250, position: 'relative' }}>
      <CardMenu onAddClick={onAddClick} />
      <CardMedia
        component="img"
        height="250"
        image="https://media.themoviedb.org/t/p/w220_and_h330_face/iSHovbdANmUUwp4tTCYc9gTSFlj.jpg"
        alt="Paella dish"
      />
      <CardInfo>
        <Typography variant="h6" gutterBottom component="div">
          Sonic the Hedgehog 2
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          Apr 08, 2022
        </Typography>
      </CardInfo>
    </Card>
  );
};
