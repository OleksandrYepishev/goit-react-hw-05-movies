import axios from 'axios';

const getMoviesByAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  method: 'GET',
  params: {
    api_key: '7421d141f362d2e7dc44f87d71cbbc5d',
  },
});

export const moviesPopular = async () => {
  const { data } = await getMoviesByAxios(`trending/movie/day?`);

  return data.results;
};

export const moviesSearch = async (searchMovie, page) => {
  const { data } = await getMoviesByAxios(
    `search/movie?&query=${searchMovie}&page=${page}`,
  );

  return data.results;
};

export const movieDetails = async movieId => {
  const { data } = await getMoviesByAxios(`movie/${movieId}`);

  return data;
};

export const movieCredits = async movieId => {
  const { data } = await getMoviesByAxios(`movie/${movieId}/credits`);

  return data;
};

export const movieReviews = async movieId => {
  const { data } = await getMoviesByAxios(`movie/${movieId}/reviews`);

  return data.results;
};
