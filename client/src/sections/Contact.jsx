import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  const contactCard =
    "border border-zinc-800 bg-zinc-900/30 rounded-3xl p-6 hover:border-green-500/30 hover:-translate-y-1 transition-all duration-300";

  return (
    <section
      id="contact"
      className="px-6 pt-24 pb-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-green-500 font-medium mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mb-6">
          Let's Connect
        </h2>

        <p className="text-zinc-400 text-lg max-w-3xl mb-10 leading-relaxed">
          I'm currently seeking internship opportunities,
          collaborating on impactful projects, and connecting
          with fellow developers. Feel free to reach out if
          you'd like to discuss technology, development,
          or potential opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* Email */}
          <a
            href="mailto:your-email@gmail.com"
            className={contactCard}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaEnvelope className="text-green-500 text-xl" />
              <h3 className="text-xl font-semibold">
                Email
              </h3>
            </div>

            <p className="text-zinc-400">
              your-email@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aryan-tiwari-shade"
            target="_blank"
            rel="noreferrer"
            className={contactCard}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaLinkedin className="text-green-500 text-xl" />
              <h3 className="text-xl font-semibold">
                LinkedIn
              </h3>
            </div>

            <p className="text-zinc-400">
              linkedin.com/in/aryan-tiwari-shade
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/primexshade"
            target="_blank"
            rel="noreferrer"
            className={contactCard}
          >
            <div className="flex items-center gap-4 mb-4">
              <FaGithub className="text-green-500 text-xl" />
              <h3 className="text-xl font-semibold">
                GitHub
              </h3>
            </div>

            <p className="text-zinc-400">
              github.com/primexshade
            </p>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/primexshade/"
            target="_blank"
            rel="noreferrer"
            className={contactCard}
          >
            <div className="flex items-center gap-4 mb-4">
              <SiLeetcode className="text-green-500 text-xl" />
              <h3 className="text-xl font-semibold">
                LeetCode
              </h3>
            </div>

            <p className="text-zinc-400">
              leetcode.com/u/primexshade
            </p>
          </a>

        </div>

        {/* CTA Button */}
        <div className="flex items-center mt-2">
  <a
    href="mailto:aaryan.tiwari54@gmail.com"
    className="inline-flex items-center px-8 py-4 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition-all duration-300"
  >
    Send Email
  </a>
</div>

      </div>
    </section>
  );
}

export default Contact;