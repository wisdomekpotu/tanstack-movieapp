import { createFileRoute, useNavigate, Outlet } from "@tanstack/react-router";
import { useState } from "react";

interface SearchParams {
  query: string;
}

export const Route = createFileRoute("/search")({
  component: SearchRoute,
  validateSearch: (search: { query: string }): SearchParams => {
    return {
      query: (search.query as string) || "",
    };
  },
});

function SearchRoute() {
  const { query } = Route.useSearch();
  const navigate = useNavigate({ from: Route.id });
  console.log(Route.id);
  console.log(navigate);
  const [newQuery, setNewQuery] = useState(query);

  return (
    <div className="p-2">
      <div className="flex gap-2">
        <input
          value={newQuery}
          onChange={(e) => {
            setNewQuery(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              navigate({
                search: (old: { query: string }) => ({
                  ...old,
                  query: newQuery,
                }),
              });
            }
          }}
          className="border-2 border-gray-300 rounded-md p-1 text-black w-full"
        />
        <button
          onClick={() => {
            navigate({
              search: (old: { query: string }) => ({
                ...old,
                q: newQuery,
              }),
            });
          }}
        >
          Search
        </button>
      </div>
      <Outlet />
    </div>
  );
}
