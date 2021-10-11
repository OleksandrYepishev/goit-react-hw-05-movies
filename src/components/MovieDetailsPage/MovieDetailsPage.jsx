import { lazy, Suspense } from 'react';
import {
  useRouteMatch,
  Route,
  useParams,
  useLocation,
  useHistory,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Btn,
  Container,
  IMG,
  Title,
  Text,
  LinkStyled,
  LinkContainer,
} from './MovieDetails.styled';
import { Spinner } from '../Loader/Loader';

const Cast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "cast"  */),
);
const Reviews = lazy(() =>
  import('../../components/Reviews/Reviews' /* webpackChunkName: "reviews"  */),
);

export default function MovieDetails({ movie }) {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  const GoBackClick = () => {
    history.push(location?.state?.from?.location ?? '/');
  };

  const genresList = genres => {
    return genres
      .map(genre => {
        return genre.name;
      })
      .join(', ');
  };

  return (
    <div>
      <Btn type="button" onClick={GoBackClick}>
        ⬅ {location?.state?.from?.label ?? '⬅ Back to home page'}
      </Btn>

      <div>
        <Container>
          <IMG
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />

          <div>
            <Title>
              {movie.original_title}{' '}
              {movie.release_date && (
                <Text>Release Year: {movie.release_date.slice(0, -6)}</Text>
              )}
            </Title>
            <Text>
              Popularity: {Math.ceil(movie.popularity)} Raiting:
              {movie.vote_average} Budget: {String(movie.budget).slice(0, -6)}M$
            </Text>
            {movie.genres && (
              <Text>Genres: {movie.genres && genresList(movie.genres)}</Text>
            )}
            <Text>{movie.overview}</Text>
            <LinkContainer>
              <LinkStyled
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location?.state?.from },
                }}
              >
                Cast
              </LinkStyled>
              <LinkStyled
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location?.state?.from },
                }}
              >
                Reviews
              </LinkStyled>
            </LinkContainer>
          </div>
        </Container>
      </div>
      <Suspense fallback={<Spinner />}>
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.array.isRequired,
};
