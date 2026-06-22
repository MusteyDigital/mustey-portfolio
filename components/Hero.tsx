export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side */}
        <div>
          <span className="px-4 py-2 rounded-full border border-green-500 text-sm">
            Full Stack Developer
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Mustapha Adamu
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            I build modern, fast and responsive web applications using
            React, Next.js, Laravel and MySQL.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
              View My Work
            </button>

            <button className="px-6 py-3 rounded-xl border border-blue-500">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-3xl rounded-full opacity-50"></div>

            <img
              src="/profile.jpg"
              alt="Mustapha Adamu"
              className="relative w-[400px] h-[500px] object-cover rounded-3xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}