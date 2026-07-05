function Experience() {
  return (
    <section id="experience" className="min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-green-500 font-medium mb-4">Experience</p>

        <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mb-16">
          Leadership, Community Building & Event Management
        </h2>

        <div className="space-y-8">
          {/* GFG */}
          <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900/30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">Chairperson</h3>

                <p className="text-green-500 mt-2">
                  GeeksforGeeks Campus Body · SRMIST Delhi NCR
                </p>
              </div>

              <span className="text-zinc-500">2025 – Present</span>
            </div>

            <ul className="mt-6 space-y-3 text-zinc-400">
              <li>
                Led cross-functional teams across Technical, PR, Sponsorship,
                Design, and Event Management domains.
              </li>

              <li>
                Organized technical workshops, coding events, and
                community-driven initiatives for students.
              </li>

              <li>
                Coordinated planning and execution of large-scale hackathons and
                flagship events.
              </li>

              <li>
                Managed outreach, sponsorship discussions, speaker coordination,
                and external collaborations.
              </li>
            </ul>
          </div>

          {/* Hackathon */}
          <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900/30">
            <h3 className="text-2xl font-bold">Hack-Innovate & VulnVanguard</h3>

            <p className="text-green-500 mt-2">Event Leadership</p>

            <p className="mt-6 text-zinc-400 leading-relaxed">
              Contributed to the planning and execution of Hack-Innovate and
              VulnVanguard, focusing on participant engagement, sponsorship
              outreach, technical coordination, event logistics, and community
              growth initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
