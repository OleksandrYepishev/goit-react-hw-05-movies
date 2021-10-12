import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { withQuicklink } from 'quicklink/dist/react/hoc.js';
import { Container } from '../Container/Container';
import { Navigation } from '../Navigation/Navigation.jsx';
import { Spinner } from '../Loader/Loader';

const AsyncHomeView = lazy(() =>
  import(
    '../../views/HomeView.jsx' /* webpackChunkName: "MovieDetailsView"  */
  ),
);

const AsyncMoviesPageView = lazy(() =>
  import(
    '../../views/MoviesPageView.jsx' /* webpackChunkName: "MovieDetailsView"  */
  ),
);

const AsyncMovieDetailsView = lazy(() =>
  import(
    '../../views/MovieDetailsView.jsx' /* webpackChunkName: "MovieDetailsView"  */
  ),
);

const NotFoundView = lazy(() =>
  import(
    '../../views/NotFoundView.jsx' /* webpackChunkName: "MovieDetailsView"  */
  ),
);

const options = {
  origins: [],
};

export const App = () => {
  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Navigation />

        <Switch>
          <Route
            path="/"
            exact
            component={withQuicklink(AsyncHomeView, options)}
          />
          <Route
            path="/movies/"
            exact
            component={withQuicklink(AsyncMoviesPageView, options)}
          />
          <Route
            path="/movies/:slug"
            component={withQuicklink(AsyncMovieDetailsView, options)}
          />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </Container>
  );
};
