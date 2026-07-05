import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-6 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-16 items-center">
          {/* Left Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>

              <span className="text-sm text-green-400">
                Available for Internships & Opportunities
              </span>
            </div>

            <p className="text-green-500 font-medium mb-4">Hello, I'm</p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Aryan <br />
              Tiwari
            </h1>

            <h2 className="text-2xl md:text-3xl text-zinc-400 mt-4">
              Backend Developer & MERN Stack Engineer
            </h2>

            <p className="text-zinc-500 mt-6 text-lg max-w-2xl leading-relaxed">
              Chairperson of the GeeksforGeeks Campus Body at SRMIST Delhi NCR.
              I build scalable web applications, secure backend systems, and
              developer-focused products using the MERN stack, Java, and modern
              cloud technologies.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <button className="px-6 py-3 bg-green-600 rounded-xl flex items-center gap-2 font-medium hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20">
                View Projects
                <FaArrowRight />
              </button>

              <button className="px-6 py-3 border border-zinc-700 rounded-xl font-medium hover:bg-zinc-900 hover:border-zinc-600 hover:scale-105 transition-all duration-300">
                Download Resume
              </button>
            </div>

            <div className="flex gap-10 mt-8">
              <div>
                <h3 className="text-2xl font-bold">3+</h3>
                <p className="text-zinc-500 text-sm">Major Projects</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">1</h3>
                <p className="text-zinc-500 text-sm">Leadership Role</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">2027</h3>
                <p className="text-zinc-500 text-sm">Graduation</p>
              </div>
            </div>

            <div className="flex gap-6 mt-10">
              <a
                href="https://github.com/primexshade"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800 hover:scale-110 transition-all duration-300 text-xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aryan-tiwari-shade"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800 hover:scale-110 transition-all duration-300 text-xl"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/u/primexshade/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800 hover:scale-110 transition-all duration-300 text-xl"
              >
                <SiLeetcode />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm lg:max-w-md">
              <div className="p-3 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm">
                <img
                  src={heroImage}
                  alt="Aryan Tiwari"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
