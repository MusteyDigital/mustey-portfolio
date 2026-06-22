const projects = [
  {
    title: "Mustey Digital Academy (LMS)",
    description: "A production-grade Learning Management System built with Laravel and React, containerized with Docker and deployed on Akamai Cloud. Includes course dashboards, student enrollment, progress tracking, and content management for active learners.",
    tech: ["Laravel", "Tailwind CSS", "Docker", "MySQL", "Akamai Cloud"],
    image: "/projects/project1.png",
    link: "https://musteydigitalacademy.online",
  },
  {
    title: "Sales Dashboard",
    description: "A full-stack analytics dashboard with CSV upload, real-time data visualization, and AI-powered sales forecasting. Built with React on the frontend and a Python FastAPI backend that processes data using Pandas, NumPy, and Scikit-learn.",
    tech: ["React", "FastAPI", "Python", "Pandas", "Scikit-learn"],
    image: "/projects/project2.png",
    link: "https://github.com/MusteyDigital/sales-dashboard",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills and projects, built with Next.js, TypeScript, and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/project3.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0a0a0a] text-white py-20 px-8 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-400 mb-12">A few things I have built recently</p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => {
            return (
              <div key={project.title} className="bg-[#13131f] border border-purple-900/40 rounded-2xl overflow-hidden hover:border-purple-500 transition text-left">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => {
                      return (
                        <span key={t} className="text-xs bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full">
                          {t}
                        </span>
                      );
                    })}
                  </div>
                  <a href={project.link} className="text-purple-400 font-medium hover:underline">View Project</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}