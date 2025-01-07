import { gql } from '@apollo/client';

export const MOVIES_QUERY = gql`
  query MoviesQuery {
    movies {
      page
      totalPages
      totalResults
      results {
        id
        title
        image: posterPath
        releaseDate(format: "dd.MM.yyyy")
      }
    }
  }
`;
