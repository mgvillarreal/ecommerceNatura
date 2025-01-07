import React from 'react';
import logo from '../../assets/images/logoNatura.png';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-rosaMedio text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            
            <div className="mb-6 md:mb-0">
                <Link to="/home">
                    <img src={logo} alt="Natura Logo" width="80px"/>
                </Link>
            </div>

            <div className="flex space-x-6 mb-6 md:mb-0">
                <div className="font-bold hover:text-gray-400">
                    <Link to="/shop">Shop</Link>
                </div>
                <div className="font-bold hover:text-gray-400">
                    <Link to="/faq">FAQ</Link>
                </div>
                <div className="font-bold hover:text-gray-400">
                    <Link to="/contact">Contacto</Link>
                </div>
            </div>

            <div className="flex space-x-4">
                <a href="https://www.instagram.com" target="_blank" className="hover:text-gray-400">
                    <FaInstagram className="text-xl" />
                </a>
                <a href="https://twitter.com" target="_blank" className="hover:text-gray-400">
                    <FaTwitter className="text-xl" />
                </a>
                <a href="https://facebook.com" target="_blank" className="hover:text-gray-400">
                    <FaFacebook className="text-xl" />
                </a>
            </div>
        </div>

        <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
            © {new Date().getFullYear()} Natura Boutique. Todos los derechos reservados.
        </div>
    </footer>
  )
}

export default Footer