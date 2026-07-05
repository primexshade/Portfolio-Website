function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6" >
            <div className="max-w-5x1 mx-aito">
                <p className="text-green-500 text-lg mb-4">
                    Hello I'm
                </p>

                <h1 className="text-6x1 md:text-8x1 font-bold text-white">
                    Aryan Tiwari
                </h1>

                <h2 className="text-2x1 md:text-4x1 text-zinc-400 mt-4">
                    Backend Developer & MERN Stack Engineer 
                </h2>

                <p className="text-zinc-500 max-w-2x1 mt-8 text-lg loading-relaxed">
                    Chairperson of GeeksforGeeks Campus Body at
                    SRM Institue of Science and Technology, Delhi NCR Campus.
                    Passionate about building scalable web applications,
                    backend systems, and developer-focused solutions.
                </p>

                <div className="felx gap-4 mt-10">
                    <button className="px-6 py-3 bg-green-600 rounded-lg font-medium hover:bg-green-700 transition">
                        View Projects
                    </button>

                    <button className="px-6 py-3 border border-zinc-700 rounded-lg font-medium hover:bg-zinc-900 transition">
                        Download Resume
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero