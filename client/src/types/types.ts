export interface ICardMenuProps {
  onCardSelect: (movie: IMovie) => void;
}

export interface IMovieCardProps {
  movie: IMovie;
  onCardSelect: (movie: IMovie) => void;
}

export interface IMovie {
    _id: string;
    image: string;
    title: string;
    releaseDate: string;
}