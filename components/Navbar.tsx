export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">
            <span className="text-blue-500">M</span>
            <span className="text-purple-500">A</span>
          </h1>

          <span className="font-semibold text-lg">
            Mustapha Adamu
          </span>
        </div>

        <nav className="hidden md:flex gap-10">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="/Mustapha_Adamu_Resume.pdf" download className="border border-purple-500 px-5 py-2 rounded-xl hover:bg-purple-500 transition">
          Download CV
        </a>
      </div>
    </header>
  );
}