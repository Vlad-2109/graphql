import { useState, useCallback } from 'react';
import { IMovie } from '../../types/types'; 
import { MAX_SELECTED_MOVIES } from '../../const';

export const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState<IMovie[]>([]);

  const selectMovie = useCallback((movie: IMovie) => {
    const length = selectedMovies.length;
    const isNewMovie = !selectedMovies.find(({ id }) => id === movie.id)
      if (isNewMovie && length < MAX_SELECTED_MOVIES) {
        setSelectedMovies([...selectedMovies, movie]);
      }
    },
    [selectedMovies],
  );

  const deleteMovie = useCallback((movie: IMovie) => {
    setSelectedMovies(selectedMovies.filter(({ id }) => id !== movie.id));
  }, [selectedMovies]);

  return {
    selectedMovies,
    selectMovie,
    deleteMovie,
  };
};
