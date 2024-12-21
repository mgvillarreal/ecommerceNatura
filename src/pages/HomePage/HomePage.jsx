import React from 'react';
import { FaCoins, FaTruck, FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const HomePage = () => {
  return (
    <div>
      {/* Background image */}
      <div className="relative h-[90vh] homeBackground bg-cover bg-center" style={{ backgroundImage: "url('/homebg.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Spring Summer 25</h1>
          <h2 className="text-4xl font-bold mb-4">Nueva Colección</h2>

          <Link to="/shop">
            <Button text="Comprar" color="rosaMedio" hovercolor="rosa"> </Button>
          </Link>
        
        </div>
      </div>

      {/* Products */}
      <section className="container mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array(4).fill().map((_, index) => (
          <div key={index} className="text-center">
            <img src={`/ruta-imagen-${index + 1}.jpg`} alt={`Producto ${index + 1}`} className="w-full h-40 object-cover rounded-md mb-2" />
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded">VER</button>
          </div>
        ))}
      </section>
      <div className="text-center py-4">
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded">Ver todos los productos</button>
      </div>

      {/* Info section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          
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
    </div>
  );
}

export default HomePage