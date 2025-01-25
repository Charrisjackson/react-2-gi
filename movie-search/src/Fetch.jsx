import React, { useState, useEffect } from 'react';
import './App.css'

//base URL for API search Endpoint
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

function Fetching() {
    // state declaration
  const [movieSearch, setMovieSearch] = useState(''); // storing user input 
  const [movies, setMovies] = useState([]); // stores the list of movies returned by API in an array
  const [error, setError] = useState(null); // Error handling for Api failures

  // Function to handle search input change (keeps track of the current movie search term)
  const handleInputChange = (e) => {
    setMovieSearch(e.target.value); //updating movieState search to whatever is inputted by user
  };

  // Function to handle the API call
  const fetchMovies = async () => {
    if (!movieSearch.trim()) {
      setError('Please enter a movie name'); //making sure the user inputs something, using error message update function to display error message if not
      return;
    }
    try {
      setError(null); // Clear any previous errors
      //sending a get request to constructued url (api) and waits for a response
      const response = await fetch(
        `${BASE_URL}?query=${encodeURIComponent(movieSearch)}&include_adult=false&language=en-US&page=1`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWU0ODNiNjBjOGYxNmRjOTM0OTM5ZDRhMThhN2NmNiIsIm5iZiI6MTczNDQ2MDI1NC43MjQsInN1YiI6IjY3NjFjMzVlN2EwZmQ4OGUyN2ZiMzNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._sHTBjna_Fp0spAqVTgUfojqF_3hIAR6kKYCyGhSc9c'
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch movies'); //manual erro handling for response
      }

      const data = await response.json(); //converting res to js obj
      setMovies(data.results || []); // Update state with movie results
    } catch (err) {
      setError(err.message);
    }
  };

  // Function to handle form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    fetchMovies(); // Trigger API call
  };

  return (
    <div>
      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          value={movieSearch}
          onChange={handleInputChange}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>

      {error && <div className="error">{error}</div>}

      <div className="movies">
        {movies.length > 0 ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <strong>{movie.title}</strong> ({movie.release_date})
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              </li>
             
            ))}
     
             
          </ul>
        ) : (
          !error && <div>Search for any movie title to see that movie & related content.</div>
        )}
      </div>
    </div>
  );
}

export default Fetching;
