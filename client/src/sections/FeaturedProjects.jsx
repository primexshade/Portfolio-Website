function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-green-500 font-medium mb-4">
          Featured Work
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Projects That Matter
        </h2>

        <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900/30">

          <div className="flex flex-col gap-6">

            {/* Header */}
            <div>
              <span className="text-green-500 text-sm">
                FEATURED PROJECT
              </span>

              <h3 className="text-3xl font-bold mt-2">
                LedgerBank
              </h3>
            </div>

            {/* Description */}
            <p className="text-zinc-400 max-w-3xl">
              A modern banking platform built with MERN stack
              architecture featuring secure authentication,
              role-based access control, transaction management,
              dashboards, and scalable backend APIs.
            </p>

            {/* Key Features */}
            <div className="flex gap-8 flex-wrap text-sm text-zinc-400">
              <span>JWT Auth</span>
              <span>Role-Based Access</span>
              <span>REST APIs</span>
              <span>MongoDB Atlas</span>
            </div>

            {/* Tech Stack */}
            <div className="flex gap-3 flex-wrap">

              <span className="px-3 py-1 rounded-full border border-zinc-700">
                React
              </span>

              <span className="px-3 py-1 rounded-full border border-zinc-700">
                Node.js
              </span>

              <span className="px-3 py-1 rounded-full border border-zinc-700">
                Express.js
              </span>

              <span className="px-3 py-1 rounded-full border border-zinc-700">
                MongoDB
              </span>

              <span className="px-3 py-1 rounded-full border border-zinc-700">
                JWT
              </span>

            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">

              <button className="px-5 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition">
                Live Demo
              </button>

              <button className="px-5 py-2 rounded-xl border border-zinc-700 hover:bg-zinc-900 transition">
                GitHub
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;