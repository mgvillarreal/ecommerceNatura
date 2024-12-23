import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/images/logoNatura.png';

const NavBar = () => {
  return (
    <nav className="bg-rosaMedio text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Natura Logo" width="95px"/>
          </Link>
        </div>

        {/* Links and icons */}
        <div className="flex items-center space-x-6">
          <div className="text-lg font-bold hover:text-gray-400">
            <Link to="/shop">Shop</Link>
          </div>
          <div className="text-lg font-bold hover:text-gray-400">
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="text-lg font-bold hover:text-gray-400">
            <Link to="/contact">Contacto</Link>
          </div>

          <Link to="/cart">
            <CartWidget/>
          </Link>
        </div>
      </div>
    </nav>

  );
}

export default NavBar