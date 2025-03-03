
import { useState } from "react";
import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/images/logo-ecole.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const getLinkClass = (path) =>
    location.pathname === path ? "text-indigo-700 font-bold" : "text-gray-700 hover:text-pink-500";

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Text */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <div className="hidden sm:flex flex-col text-gray-800">
            <span className="font-bold text-lg">Mon Ecole</span>
            <span className="text-sm">Slogan ici</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between items-center space-x-4 font-bold">
          <Link to="/" className={`${getLinkClass("/")}`}>Accueil</Link>
          <Link to="/apropos" className={`${getLinkClass("/apropos")}`}>À propos</Link>
          <Link to="/activites" className={`${getLinkClass("/activites")}`}>Activités</Link>
          <Link to="/cycles-organises" className={`${getLinkClass("/cycles-organises")}`}>Cycles organisés</Link>
          <Link to="/devoir-et-communication" className={`${getLinkClass("/devoir-et-communication")}`}>Devoir et communication</Link>
          <Link to="/contact" className={`${getLinkClass("/contact")}`}>Contact</Link>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4 text-gray-700">
          <FaFacebook className="cursor-pointer hover:text-blue-600" />
          <FaWhatsapp className="cursor-pointer hover:text-green-500" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 text-2xl" onClick={toggleMenu}>
          {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-0 left-0 w-full max-h-64 bg-white shadow-md flex flex-col items-center py-4 space-y-4 overflow-y-auto transition-all duration-300 ${isOpen ? "block" : "hidden"}`} style={{ zIndex: 1000 }}>
        <Link to="/" className={`${getLinkClass("/")}`} onClick={closeMenu}>Accueil</Link>
        <Link to="/apropos" className={`${getLinkClass("/apropos")}`} onClick={closeMenu}>À propos</Link>
        <Link to="/activites" className={`${getLinkClass("/activites")}`} onClick={closeMenu}>Activités</Link>
        <Link to="/cycles-organises" className={`${getLinkClass("/cycles-organises")}`} onClick={closeMenu}>Cycles organisés</Link>
        <Link to="/devoir-et-communication" className={`${getLinkClass("/devoir-et-communication")}`} onClick={closeMenu}>Devoir et communication</Link>
        <Link to="/contact" className={`${getLinkClass("/contact")}`} onClick={closeMenu}>Contact</Link>
        <div className="flex space-x-4 text-gray-700 mt-4">
          <FaFacebook className="cursor-pointer hover:text-blue-600" />
          <FaWhatsapp className="cursor-pointer hover:text-green-500" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
        </div>
      </div>
    </nav>
  );
}