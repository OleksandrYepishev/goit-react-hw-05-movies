// import { useState, useLayoutEffect } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import { SearchBar } from '../Searchbar/Searchbar';
import { Container } from '../Container/Container';
import { Navigation } from '../Navigation/Navigation';

// import { fetchImages } from '../../services/ImagesApi';
// import { ImageGallery } from '../ImageGallery/ImageGallery';
// import { Button } from '../Button/Button.jsx';
import { Spinner } from '../Loader/Loader';
// import { SpinnerContainer } from '../Loader/Loader.styled';
// import { Modal } from '../Modal/Modal';

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
