export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-gray-400 py-10 px-8 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-white font-semibold text-lg">Mustapha Adamu</h3>
          <p className="text-sm mt-1">Full-Stack Developer | Cloud & DevOps | Web Educator</p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/MusteyDigital" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">GitHub</a>
          <a href="https://musteydigitalacademy.online" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Website</a>
          <a href="mailto:mustaphaadamu6773@gmail.com" className="hover:text-purple-400 transition">Email</a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        © 2026 Mustapha Adamu. All rights reserved.
      </div>
    </footer>
  );
}