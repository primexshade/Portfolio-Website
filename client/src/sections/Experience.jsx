function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-green-500 font-medium mb-4">
          Experience
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Leadership & Community Impact
        </h2>

        <div className="space-y-8">

          {/* GFG */}
          <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900/30">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>
                <h3 className="text-2xl font-bold">
                  Chairperson
                </h3>

                <p className="text-green-500 mt-2">
                  GeeksforGeeks Campus Body · SRMIST Delhi NCR
                </p>
              </div>

              <span className="text-zinc-500">
                2025 – Present
              </span>

            </div>

            <ul className="mt-6 space-y-3 text-zinc-400">

              <li>
                Led multiple technical and community initiatives across campus.
              </li>

              <li>
                Coordinated teams across design, technical, outreach, and event management.
              </li>

              <li>
                Organized workshops, coding events, and hackathon activities.
              </li>

              <li>
                Collaborated with sponsors, speakers, and external partners.
              </li>

            </ul>

          </div>

          {/* Hackathon */}
          <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900/30">

            <h3 className="text-2xl font-bold">
              Hack-Innovate & VulnVanguard
            </h3>

            <p className="text-green-500 mt-2">
              Event Leadership
            </p>

            <p className="mt-6 text-zinc-400 leading-relaxed">
              Contributed to planning large-scale hackathon initiatives,
              participant engagement, sponsorship outreach, technical
              coordination, and event execution.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;