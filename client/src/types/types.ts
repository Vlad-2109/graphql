export interface ICardMenuProps {
  children: any;
}

export interface IMovieCardProps {
  movie: IMovie;
  onCardSelect: (movie: IMovie) => void;
}

export interface IMovieCardSelectedProps {
  movie: IMovie;
  onCardDelete: (movie: IMovie) => void;
}

export interface ISelectedMoviesSectionProps {
  selectedMovies: IMovie[];
  deleteMovie: (movie: IMovie) => void;
}

export interface ISelectedMoviesFormProps {
  onSubmit: (e: FormValues) => void;
}

export interface IConfirmModalProps {
  open: boolean;
  url: string;
  title: string;
  onClose: () => void;
}

export interface FormValues {
  listName: string;
}
export interface IMovie {
  id: string;
  image: string;
  title: string;
  releaseDate: string;
  genres: IGenre[];
  runtime: number;
}

export interface IGenre {
  id: number;
  name: string;
}
