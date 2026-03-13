import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "./styles/reset.scss";
import "./styles/fonts.scss";
import "./styles/grid.scss";

import type { Route } from "./+types/root";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/assets/images/favicon.svg" },
  { rel: "alternate icon", href: "/assets/images/favicon.ico" },
  { rel: "apple-touch-icon", href: "/assets/images/apple-touch-icon.png" },
  { rel: "apple-touch-icon", sizes: "72x72", href: "/assets/images/apple-touch-icon-72x72.png" },
  { rel: "apple-touch-icon", sizes: "114x114", href: "/assets/images/apple-touch-icon-114x114.png" },
  { rel: "apple-touch-icon", sizes: "144x144", href: "/assets/images/apple-touch-icon-144x144.png" },
  {
    rel: "preload",
    href: "/assets/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main style={{ padding: "4rem", maxWidth: "960px", margin: "0 auto" }}>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre style={{ overflowX: "auto", padding: "1rem" }}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
