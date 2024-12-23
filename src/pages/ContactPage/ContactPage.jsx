import React from 'react';

const ContactPage = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="font-bold text-3xl text-rosa">Contacto</h2>
        <p className="text-gray-600 text-lg mt-4">¡Nos encantaría saber de ti! Completa el formulario para enviarnos tus comentarios o preguntas.</p>

        <div className="mt-8 bg-white p-6 rounded-md shadow-md max-w-3xl mx-auto">
          <form>
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-left text-lg font-semibold text-bordo">Nombre</label>
              <input type="text" id="name" name="name" placeholder="Tu nombre" className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rosa"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-left text-lg font-semibold text-bordo">Correo Electrónico</label>
              <input type="email" id="email" name="email" placeholder="Tu correo electrónico" className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rosa"/>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-left text-lg font-semibold text-bordo">Mensaje</label>
              <textarea id="message" name="message" rows="4" placeholder="Escribe tu mensaje..." className="w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rosa">
              </textarea>
            </div>

            <div className="mt-6">
              <button type="submit" className="w-full p-3 bg-rosa text-white font-semibold rounded-md hover:bg-rosaDark focus:outline-none focus:ring-2 focus:ring-rosa">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;