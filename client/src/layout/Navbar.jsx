function Navbar() {
    return(
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="max-w-7x1 mx-auto px-6 py-5 flex items-center justify-between">
                <h1 className="text-x1 font-bold">
                    Aryan Tiwari
                </h1>

                <div className="flex gap-8">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar