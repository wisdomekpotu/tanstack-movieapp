import React from "react";
import { Link } from "@tanstack/react-router";

export default function Paging({
  pages,
  Route,
  page,
}: {
  pages: number;
  Route: any;
  page: number;
}) {
  return (
    <div className="flex gap-1 text-xl font-bold justify-end">
      {new Array(pages).fill(0).map((_, i) =>
        page === i + 1 ? (
          <div className="px-4 py-2 border border-red-300 rounded bg-[#0b0000] text-white">
            {i + 1}
          </div>
        ) : (
          <Link
            key={i}
            from={Route.id}
            search={{
              page: i + 1,
            }}
            className="px-4 py-2 border border-red-300 rounded hover:bg-[#a33d3da1]"
          >
            {i + 1}
          </Link>
        )
      )}
    </div>
  );
}
