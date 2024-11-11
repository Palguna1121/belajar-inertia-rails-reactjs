import { Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";

export default function Layout({ children }) {
  return (
    <>
      <header className="flex justify-between">
          <Link className="m-4" href="/">Home</Link>
          <Link className="m-4" href="/users">Users</Link>
      </header>
      <main>
        {children}
      </main>
    </>
  );
}
