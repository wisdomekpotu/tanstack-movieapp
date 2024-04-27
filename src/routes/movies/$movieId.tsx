import { createFileRoute } from "@tanstack/react-router";
import { getMovie } from "../../api";
import Movie from "../../components/Movie";

export const Route = createFileRoute("/movies/$movieId")({
  component: MovieDetail,
  loader: ({ params: { movieId } }) => getMovie(movieId),
});

function MovieDetail() {
  const movie = Route.useLoaderData();
  return <Movie movie={movie} />;
}
