import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/projects" },
    { name: "Clients", path: "/clients" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-jakarta ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 z-50">
          <img
            src="/images/logo-brm.png"
            alt="Bumi Rekayasa Mandiri"
            className="h-14 md:h-20 w-auto object-contain transition-all duration-300"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[15px] font-semibold tracking-wide transition-all duration-300 relative pb-1 ${
                isActive(link.path)
                  ? "text-brm-maroon"
                  : "text-brm-maroon/80 hover:text-brm-maroon"
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-brm-maroon transition-all duration-300 ${
                  isActive(link.path) ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-brm-maroon focus:outline-none z-50 p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-bold transition-colors ${
                  isActive(link.path)
                    ? "text-brm-maroon border-b-2 border-brm-maroon inline-block"
                    : "text-gray-600 hover:text-brm-maroon"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="absolute bottom-10 text-center space-y-1">
            <p className="text-sm font-semibold text-brm-green">
              PT. BUMI REKAYASA MANDIRI
            </p>
            <p className="text-xs text-gray-400">
              Precision Building. Sustainable Value.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
