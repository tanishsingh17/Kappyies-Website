import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="font-uncial text-2xl md:text-3xl font-bold text-white"
        >
          🐹 KAPPYIES
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <a
            href="#about"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            About
          </a>

          <a
            href="#collection"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            Collection
          </a>

          <a
            href="#roadmap"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            Roadmap
          </a>

        </nav>

        {/* Button */}
        <Link
          to="/whitelist"
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-5 py-2 rounded-xl transition"
        >
          Join Whitelist
        </Link>

      </div>

    </header>
  );
};

export default Navbar;