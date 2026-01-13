import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const MainLayout = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="p-4 flex justify-between items-center border-b dark:border-gray-700">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-blue-500">
            Catalog
          </Link>
          <Link to="/projects" className="hover:text-blue-500">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-blue-500">
            Contact
          </Link>
          <Link to="/apply" className="hover:text-blue-500">
            Apply Now
          </Link>
          <button onClick={toggleDarkMode} className="hover:text-blue-500">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
