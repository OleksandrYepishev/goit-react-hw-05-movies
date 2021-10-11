import { lazy, Suspense } from 'react';
import {
  NavLink,
  useRouteMatch,
  Route,
  useParams,
  useLocation,
  useHistory,
} from 'react-router-dom';

const Cast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "cast"  */),
);
const Reviews = lazy(() =>
  import('../../components/Reviews/Reviews' /* webpackChunkName: "reviews"  */),
);

export default function MovieDetailsPage({ movie }) {
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
      <button type="button" onClick={GoBackClick}>
        {location?.state?.from?.label ?? 'Back to home page'}
      </button>

      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />

          <div>
            <h2>
              {movie.original_title}{' '}
              {movie.release_date && (
                <p>Release Year: {movie.release_date.slice(0, -6)}</p>
              )}
            </h2>
            <p>
              Popularity: {Math.ceil(movie.popularity)} Raiting:
              {movie.vote_average} Budget: {String(movie.budget).slice(0, -6)}M$
            </p>
            {movie.genres && (
              <p>Genres: {movie.genres && genresList(movie.genres)}</p>
            )}
            <p>{movie.overview}</p>
            <div>
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location?.state?.from },
                }}
              >
                Cast
              </NavLink>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location?.state?.from },
                }}
              >
                Reviews
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
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
