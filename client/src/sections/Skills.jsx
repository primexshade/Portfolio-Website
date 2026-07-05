import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaCloud,
} from "react-icons/fa";

function Skills() {
  const skillBadge =
    "px-3 py-1 rounded-full border border-zinc-700 text-sm text-zinc-300 hover:border-green-500/40 hover:text-white transition-all duration-300";

  return (
    <section
      id="skills"
      className="px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-green-500 font-medium mb-4">
          Skills
        </p>

        <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mb-16">
          Technical Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Languages */}
          <div className="border border-zinc-800 rounded-3xl p-6 bg-zinc-900/30 hover:border-green-500/30 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <FaCode className="text-green-500 text-lg" />
              <h3 className="text-xl font-bold">Languages</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className={skillBadge}>Java</span>
              <span className={skillBadge}>C++</span>
              <span className={skillBadge}>JavaScript</span>
              <span className={skillBadge}>Python</span>
            </div>
          </div>

          {/* Frontend */}
          <div className="border border-zinc-800 rounded-3xl p-6 bg-zinc-900/30 hover:border-green-500/30 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <FaLaptopCode className="text-green-500 text-lg" />
              <h3 className="text-xl font-bold">Frontend</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className={skillBadge}>React</span>
              <span className={skillBadge}>Tailwind CSS</span>
              <span className={skillBadge}>HTML5</span>
              <span className={skillBadge}>CSS3</span>
            </div>
          </div>

          {/* Backend */}
          <div className="border border-zinc-800 rounded-3xl p-6 bg-zinc-900/30 hover:border-green-500/30 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <FaServer className="text-green-500 text-lg" />
              <h3 className="text-xl font-bold">Backend</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className={skillBadge}>Node.js</span>
              <span className={skillBadge}>Express.js</span>
              <span className={skillBadge}>REST APIs</span>
              <span className={skillBadge}>JWT</span>
            </div>
          </div>

          {/* Database */}
          <div className="border border-zinc-800 rounded-3xl p-6 bg-zinc-900/30 hover:border-green-500/30 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <FaDatabase className="text-green-500 text-lg" />
              <h3 className="text-xl font-bold">Database</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className={skillBadge}>MongoDB</span>
              <span className={skillBadge}>MySQL</span>
            </div>
          </div>

          {/* Tools */}
          <div className="border border-zinc-800 rounded-3xl p-6 bg-zinc-900/30 hover:border-green-500/30 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <FaTools className="text-green-500 text-lg" />
              <h3 className="text-xl font-bold">Tools</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className={skillBadge}>Git</span>
              <span className={skillBadge}>GitHub</span>
              <span className={skillBadge}>Postman</span>
              <span className={skillBadge}>MongoDB Atlas</span>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="border border-zinc-800 rounded-3xl p-6 bg-zinc-900/30 hover:border-green-500/30 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <FaCloud className="text-green-500 text-lg" />
              <h3 className="text-xl font-bold">Cloud & DevOps</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className={skillBadge}>AWS</span>
              <span className={skillBadge}>Docker</span>
              <span className={skillBadge}>Linux</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;