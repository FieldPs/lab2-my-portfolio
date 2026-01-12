const Contact = () => {
  return (
    <div className="max-w-lg mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Get in Touch
      </h2>
      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="john@example.com"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
            Message
          </label>
          <textarea
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[120px]"
            placeholder="What's on your mind?"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
