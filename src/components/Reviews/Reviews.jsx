import { useState, useEffect } from 'react';
import { movieReviews } from '../../services/MoviesApi';
import { Item, Title, Text } from './Reviews.styled';

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
              <Item key={review.id}>
                <Title>{review.author}</Title>
                <Text>{review.content}</Text>
              </Item>
            ))
          : 'There are no reviews yet'}
      </ul>
    </>
  );
}
