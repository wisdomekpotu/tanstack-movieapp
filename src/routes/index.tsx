import { createFileRoute, Link } from "@tanstack/react-router";
import Paging from "../components/Paging";
import { getMovies } from "../api";
import { z } from "zod";

import MovieCards from "../components/MovieCards";

export const Route = createFileRoute("/")({
  component: IndexComponent,
  validateSearch: z.object({
    page: z.number().catch(1),
  }),
  loaderDeps: ({ search: { page } }) => ({ page }),
  loader: ({ deps: { page } }) => getMovies(page),
});

function IndexComponent() {
  const { page } = Route.useSearch();
  const { movies, pages } = Route.useLoaderData();

  return (
    <div>
      <div className="flex justify-end pr-5 py-5">
        <Paging page={page} pages={pages} Route={Route} />
      </div>
      <MovieCards movies={movies} />
    </div>
  );
}
