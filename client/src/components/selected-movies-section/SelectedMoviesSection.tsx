import { useState, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MovieCardSelected } from '../movie-card-selected/MovieCardSelected';
import { SelectedMoviesForm } from '../selected-movies-form/SelectedMoviesForm';
import { ConfirmModal } from '../confirm-modal/ConfirmModal';
import noMoviesImageSrc from '../../assets/no_movies.png';
import {
  FormValues,
  IMovie,
  ISelectedMoviesSectionProps,
} from '../../types/types';
import { AppContext } from '../../providers/appContext/appContext';
import { AppContextType } from '../../providers/appContext/contextType';

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: 'calc(100vh - 140px)',
  position: 'sticky',
  top: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
}));

const MoviesList = styled(Stack)(() => ({
  overflowY: 'auto',
  height: '100%',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#9e9e9e',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#757575',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#f0f0f0',
  },
}));

const NoMovies = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const SelectedMoviesSection: React.FC<ISelectedMoviesSectionProps> = ({
  selectedMovies,
  deleteMovie,
}) => {
  const [listName, setListName] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const { state } = useContext(AppContext) as AppContextType;

  const onSubmit = ({ listName }: FormValues) => {
    const ids = selectedMovies.map(({ id }) => id);
    const link = `${window.location.host}/recommendation?title=${listName}&locale=${state.locale}&ids=${ids.join()}`;

    setLink(link);
    setListName(listName);
  };

  const onCloseConfirmModal = () => {
    setLink('');
  };

  if (!selectedMovies.length) {
    return (
      <SelectedMovies>
        <NoMovies>
          <Box
            component="img"
            sx={{
              width: '50%',
              opacity: '.6',
            }}
            alt="No images."
            src={noMoviesImageSrc}
          />
          <Typography variant="h5" mt={2}>
            <FormattedMessage id="no_selected_movies" />
          </Typography>
        </NoMovies>
      </SelectedMovies>
    );
  }

  return (
    <SelectedMovies>
      <MoviesList spacing={2}>
        {selectedMovies.map((movie: IMovie) => (
          <MovieCardSelected
            key={movie.id}
            movie={movie}
            onCardDelete={deleteMovie}
          />
        ))}
      </MoviesList>
      <Box pt={2}>
        <SelectedMoviesForm onSubmit={onSubmit} />
      </Box>
      <ConfirmModal
        url={link}
        title={listName}
        open={!!link}
        onClose={onCloseConfirmModal}
      />
    </SelectedMovies>
  );
};
