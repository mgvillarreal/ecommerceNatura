import React from 'react';

const FAQPage = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="font-bold text-3xl text-rosa">Preguntas Frecuentes</h2>
        
        <div className="mt-8 space-y-6">
          
          <div className="bg-white p-4 rounded-md shadow-md hover:bg-gray-50">
            <span className="w-full text-left font-semibold text-lg text-bordo">
              ¿Cuáles son las formas de pago disponibles?
            </span>
            <p className="text-gray-600 mt-2">Puedes pagar mediante efectivo en el local, transferencia bancaria o MercadoPago.</p>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md hover:bg-gray-50">
            <span className="w-full text-left font-semibold text-lg text-bordo">
              ¿Realizan envíos a todo el país?
            </span>
            <p className="text-gray-600 mt-2">Sí, realizamos envíos a todo el país. El costo de envío depende de la ubicación y va a cargo del cliente.</p>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md hover:bg-gray-50">
            <span className="w-full text-left font-semibold text-lg text-bordo">
              ¿Cómo puedo rastrear mi pedido?
            </span>
            <p className="text-gray-600 mt-2">Una vez que tu pedido sea enviado, recibirás un código de seguimiento a tu correo electrónico.</p>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md hover:bg-gray-50">
            <span className="w-full text-left font-semibold text-lg text-bordo">
              ¿Puedo cambiar o devolver un producto?
            </span>
            <p className="text-gray-600 mt-2">Sí, ofrecemos cambios o devoluciones dentro de los 30 días posteriores a la compra, siempre y cuando el producto esté en buen estado.</p>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md hover:bg-gray-50">
            <span className="w-full text-left font-semibold text-lg text-bordo">
              ¿Cuál es el horario de atención?
            </span>
            <p className="text-gray-600 mt-2">Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00 hs. Sábados de 9:00 a 13:00 hs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQPage;