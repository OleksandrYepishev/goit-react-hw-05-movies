import { useState, useEffect } from 'react';
import { movieReviews } from '../../services/MoviesApi';

export default function MovieReviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    movieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews && reviews.length > 0
          ? reviews.map(review => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))
          : 'There are no reviews yet'}
      </ul>
    </>
  );
}
