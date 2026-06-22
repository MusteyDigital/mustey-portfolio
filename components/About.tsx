export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] text-white py-20 px-8 md:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-purple-500">Me</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm Mustapha Adamu, a Full Stack Developer who builds modern, fast,
            and responsive web applications. I specialize in React, Next.js,
            Laravel, and MySQL — turning ideas into clean, functional products.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            I enjoy solving real-world problems with code and constantly
            learning new tools to improve how I build and ship software.
          </p>

          <div className="flex gap-10 mt-6">
            <div>
              <h3 className="text-2xl font-bold text-purple-400">2+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-purple-400">10+</h3>
              <p className="text-gray-400 text-sm">Projects Done</p>
            </div>
          </div>
        </div>

        {/* Right: Skills / Highlights card */}
        <div className="bg-[#13131f] rounded-2xl p-8 border border-purple-900/40">
          <h3 className="text-xl font-semibold mb-4">What I Do</h3>
          <ul className="space-y-3 text-gray-300">
            <li>⚡ Frontend Development (React, Next.js, Tailwind)</li>
            <li>🛠 Backend Development (Laravel, Node.js)</li>
            <li>🗄 Database Design (MySQL)</li>
            <li>🚀 Deployment & Performance Optimization</li>
          </ul>
        </div>

      </div>
    </section>
  );
}