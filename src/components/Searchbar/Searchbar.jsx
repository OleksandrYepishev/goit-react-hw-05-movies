import { Serchbar } from './Searchbar.styled';
import PropTypes from 'prop-types';

export default function SearchMovie({ onSearch }) {
  const handleSearch = e => {
    e.preventDefault();
    onSearch(e.target.elements.movieName.value.trim().toLowerCase());
  };

  return (
    <Serchbar>
      <form onSubmit={handleSearch}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="movieName"
        />
      </form>
    </Serchbar>
  );
}

SearchMovie.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
