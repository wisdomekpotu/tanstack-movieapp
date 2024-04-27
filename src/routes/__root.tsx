import { createRootRoute, Outlet, Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Movie-App</title>
      </head>
      <body className="bg-black max-w-4xl mx-auto text-white px-5 md:px-0">
        <header className="flex justify-between items-center p-4 bg-[#780909] text-white rounded-b-2xl shadow-xl shadow-[#df0707] mb-6">
          <h1 className="text-2xl flex">
            <Link
              to="/"
              search={{ page: 1 }}
              activeProps={{
                className: "font-bold hello",
              }}
              activeOptions={{
                includeSearch: false,
              }}
            >
              Movies🍿
            </Link>
            <div className="mx-5">|</div>
            <Link
              to="/search"
              search={{ q: "" }}
              activeProps={{
                className: "font-bold",
              }}
            >
              Search
            </Link>
          </h1>
          <div id="favorites-count">{/* <FavoritesCount /> */}</div>
        </header>
        <Outlet /> {/* Start rendering router matches */}
      </body>
    </html>
  );
}
