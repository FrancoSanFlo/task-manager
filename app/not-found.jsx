import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-center bg-gray-100">
      <h1 className="text-6xl md:text-9xl text-gray-700">404</h1>
      <p className="text-2xl md:text-4xl text-gray-500 mb-8">Page Not Found</p>
      <Link href="/" className="text-blue-500 hover:text-blue-700 transition-colors duration-300 text-lg md:text-xl">
        Return to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;