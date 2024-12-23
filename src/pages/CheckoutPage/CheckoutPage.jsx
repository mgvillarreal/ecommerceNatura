import React, { useState } from "react";

const CheckoutPage = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("orden: ", formData);
        onSubmit(formData);
    };

    return (
        <section className="bg-gray-50 py-8">
            <div className="container mx-auto max-w-md bg-white shadow-md rounded-md p-6">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Checkout</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Nombre
                        </label>
                        <input type="text" id="name" name="name" placeholder="Nombre" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-rosa focus:border-rosa text-gray-700" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Teléfono
                        </label>
                        <input type="tel" id="phone" name="phone" placeholder="Teléfono" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-rosa focus:border-rosa text-gray-700" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Correo Electrónico
                        </label>
                        <input type="email" id="email" name="email" placeholder="Correo electrónico" className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-rosa focus:border-rosa text-gray-700" value={formData.email} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="w-full bg-rosa text-white font-bold py-2 px-4 rounded-md hover:bg-rosa-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rosa" >
                        Comprar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CheckoutPage;