import React from 'react';
import { FaCoins, FaTruck, FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      {/* Background image */}
      <div className="relative h-screen homeBackground bg-cover bg-center" style={{ backgroundImage: "url('/homebg.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl sm:text-3xl font-bold mb-4">Spring Summer 25</h1>
          <h2 className="text-4xl sm:text-3xl font-bold mb-4">Nueva Colección</h2>

          <Link to="/shop">
            <button className="px-4 py-2 bg-rosaMedio text-white font-bold rounded-md hover:bg-bordo"> Comprar </button>
          </Link>
        
        </div>
      </div>

      {/* Info section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          
          <div className="flex flex-col items-center py-4">
            <FaCoins size={50} className="text-bordo mb-2" />
            <p className="font-bold text-lg text-rosa py-2">Formas de Pago</p>
            <p className="text-m text-rosa py-2">Efectivo en el local - Transferencia - MercadoPago</p>
          </div>
          
          <div className="flex flex-col items-center py-4">
            <FaTruck size={50} className="text-bordo mb-2" />
            <p className="font-bold text-lg text-rosa py-2">Envío Rápido</p>
            <p className="text-m text-rosa py-2">Envíos a todo el país</p>
          </div>
          
          <div className="flex flex-col items-center py-4">
            <FaShoppingBag size={50} className="text-bordo mb-2" />
            <p className="font-bold text-lg text-rosa py-2">Retiro Gratis</p>
            <p className="text-m text-rosa py-2">Retira gratis en nuestra tienda en 24 horas</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage