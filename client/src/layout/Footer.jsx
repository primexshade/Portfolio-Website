import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-6 py-12">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          <div>
            <h3 className="text-2xl font-bold mb-2">
              Aryan Tiwari
            </h3>

            <p className="text-zinc-400">
              Backend Developer & MERN Stack Engineer
            </p>
          </div>

          <div className="flex items-center gap-6 text-xl">

            <a
              href="https://github.com/primexshade"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-green-500 transition-colors"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aryan-tiwari-shade"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-green-500 transition-colors"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/primexshade/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-green-500 transition-colors"
            >
              <SiLeetcode />
            </a>

          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800">
          <p className="text-sm text-zinc-500">
            © 2026 Aryan Tiwari. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;