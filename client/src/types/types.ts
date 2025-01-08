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
};
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
