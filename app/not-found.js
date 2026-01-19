import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-gray-400 mb-8">Page not found</p>
        <Link href="/" className="bg-primary text-white px-6 py-3 rounded-lg">
          Go Home
        </Link>
      </div>
    </div>
  );
}
