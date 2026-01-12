const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      <div className="p-10 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 shadow-xl border border-blue-100 dark:border-gray-700">
        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text animate-pulse">
          Garfield
        </h1>
        <blockquote className="text-2xl font-light text-gray-600 dark:text-gray-300 italic max-w-2xl leading-relaxed">
          "Gang Gang Gang Gang Gang ไตปลา"
        </blockquote>
      </div>
    </div>
  );
};

export default Home;
