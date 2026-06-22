const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Laravel", icon: "🔺" },
  { name: "Python", icon: "🐍" },
  { name: "FastAPI", icon: "⚡" },
  { name: "Node.js", icon: "🟢" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Docker", icon: "🐳" },
  { name: "Cloud (Akamai)", icon: "☁️" },
  { name: "Git & GitHub", icon: "🐙" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0a0a0a] text-white py-20 px-8 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-purple-500">Skills</span>
        </h2>
        <p className="text-gray-400 mb-12">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#13131f] border border-purple-900/40 rounded-xl py-6 px-4 hover:border-purple-500 transition"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <p className="text-gray-200 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}