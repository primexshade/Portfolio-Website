import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-green-500 font-medium mb-4">About Me</p>

        <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mb-16">
          Engineering Digital Products That Create Impact
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <div className="p-3 rounded-3xl border border-zinc-800 bg-zinc-900/40">
              <img
                src={aboutImage}
                alt="Aryan Tiwari"
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Who I Am</h3>

              <p className="text-zinc-400 leading-relaxed">
                I'm Aryan Tiwari, a B.Tech Computer Science student at SRM
                Institute of Science and Technology, Delhi NCR Campus. I enjoy
                building scalable applications, backend systems, and solving
                real-world problems through technology.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">What I Do</h3>

              <p className="text-zinc-400 leading-relaxed">
                My primary focus is Backend Development using the MERN stack,
                Java, REST APIs, authentication systems, and database design. I
                enjoy transforming ideas into production-ready applications.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">Current Focus</h3>

              <p className="text-zinc-400 leading-relaxed">
                Currently, I am building LedgerBank, expanding my expertise in
                system design, cloud technologies, DevOps practices, and
                preparing for software engineering internships.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-3xl font-bold">2027</h4>
                <p className="text-zinc-500">Graduation Year</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold">3+</h4>
                <p className="text-zinc-500">Major Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
