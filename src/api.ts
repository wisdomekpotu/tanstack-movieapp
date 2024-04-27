// Move API key to ..env file

// get all Movies
export async function getMovies(page: number = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?include_adult=false&language=en-US&page=${encodeURIComponent(page)}&api_key=e90f3a5f8105816fe75b93fbd79b6779`
  )
    .then((r) => r.json())
    .then((r) => ({
      pages: 4,
      movies: r.results,
    }));
  return response;
}

// get Movie by Id

export async function getMovie(id: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=e90f3a5f8105816fe75b93fbd79b6779`
  ).then((r) => r.json());

  return response;
}

// Search Movie

export async function searchMovie(query: string = "") {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query
    )}&include_adult=false&language=en-US&page=1&api_key=e90f3a5f8105816fe75b93fbd79b6779`
  )
    .then((r) => r.json())
    .then((r) => r.results);
  return response;
}
