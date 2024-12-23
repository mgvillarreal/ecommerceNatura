import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        
      <div className="text-rosa">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32 mx-auto"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="8" cy="10" r="1" />
          <circle cx="16" cy="10" r="1" />
          <path d="M9 16s1.5-2 3-2 3 2 3 2" />
        </svg>
      </div>

        <h1 className="mt-6 text-6xl font-bold text-bordo">404</h1>
        <p className="mt-2 text-xl text-gray-600">Página no encontrada</p>

        <p className="mt-4 text-gray-500">
          Lo sentimos, pero la página que estás buscando no existe.
        </p>

        <div className="mt-6">
          <Link to="/">
            <button className="px-4 py-2 bg-rosa text-white rounded-md hover:bg-bordo"> Volver al inicio </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage;