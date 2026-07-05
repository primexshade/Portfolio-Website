function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-xl">
          Aryan Tiwari
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-zinc-400">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;