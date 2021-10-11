import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Container } from '../Container/Container';
import { Navigation } from '../Navigation/Navigation';
import { Spinner } from '../Loader/Loader';

const HomeView = lazy(() =>
  import(
    '../../views/HomeView.jsx' /* webpackChunkName: "MovieDetailsView"  */
  ),
);

const MoviesPageView = lazy(() =>
  import(
    '../../views/MoviesPageView.jsx' /* webpackChunkName: "MovieDetailsView"  */
  ),
);

const MovieDetailsView = lazy(() =>
  import(
    '../../views/MovieDetailsView.jsx' /* webpackChunkName: "MovieDetailsView"  */
  ),
);

const NotFoundView = lazy(() =>
  import(
    '../../views/NotFoundView.jsx' /* webpackChunkName: "MovieDetailsView"  */
  ),
);

export const App = () => {
  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Navigation />

        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/movies/" exact component={MoviesPageView} />
          <Route path="/movies/:movieId" component={MovieDetailsView} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </Container>
  );
};
