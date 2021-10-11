import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { withQuicklink } from 'quicklink/dist/react/hoc.js';
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

const options = {
  origins: [],
};

export const App = () => {
  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Navigation />

        <Switch>
          <Route path="/" exact component={withQuicklink(HomeView, options)} />
          <Route
            path="/movies/"
            exact
            component={withQuicklink(MoviesPageView, options)}
          />
          <Route
            path="/movies/:movieId"
            component={withQuicklink(MovieDetailsView, options)}
          />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </Container>
  );
};
