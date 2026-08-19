import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="py-50 px-16 flex flex-col items-start justify-center gap-4">
      <h1 className="text-9xl">404</h1>
      <p>The page you were looking for does not exist.</p>

      <Link to="/">Return Home</Link>
    </section>
  );
}
