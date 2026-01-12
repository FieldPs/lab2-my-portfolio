const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Modern E-Commerce",
      description:
        "A full-featured online store with cart functionality, payment gateway integration, and a responsive dashboard for inventory management.",
      tags: ["React", "Tailwind UK", "Stripe"],
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 2,
      name: "Portfolio V2",
      description:
        "A minimal, dark-mode first portfolio website designed to showcase creative work with smooth animations and fast page loads.",
      tags: ["Vue.js", "GSAP", "Vite"],
      color: "from-emerald-400 to-cyan-500",
    },
    {
      id: 3,
      name: "Task Management App",
      description:
        "Productivity tool allowing users to create boards, manage tasks with drag-and-drop, and collaborate in real-time.",
      tags: ["React", "Redux", "Firebase"],
      color: "from-orange-400 to-pink-500",
    },
    {
      id: 4,
      name: "Health Tracker",
      description:
        "Mobile-first web app for tracking daily workouts, nutrition, and sleep patterns with data visualization charts.",
      tags: ["Next.js", "Chart.js", "PWA"],
      color: "from-blue-400 to-teal-500",
    },
    {
      id: 5,
      name: "Social Dashboard",
      description:
        "Analytics dashboard for social media managers to track engagement, follower growth, and post performance across platforms.",
      tags: ["TypeScript", "D3.js", "API"],
      color: "from-red-500 to-rose-600",
    },
    {
      id: 6,
      name: "AI Content Generator",
      description:
        "An interface for generating blog posts and marketing copy using OpenAI's GPT-3 API with customizable tone and length.",
      tags: ["Svelte", "Node.js", "OpenAI"],
      color: "from-violet-600 to-fuchsia-600",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one was a unique
          challenge that helped me grow as a developer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col"
          >
            {/* Project Image placeholder / Gradient */}
            <div
              className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overlow-hidden`}
            >
              <div className="text-white text-opacity-20 text-9xl font-bold select-none transform group-hover:scale-110 transition-transform duration-500">
                {project.name.charAt(0)}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-semibold rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors group-hover:translate-x-1 duration-200"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
