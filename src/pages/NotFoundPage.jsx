import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 py-20 pt-32 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;