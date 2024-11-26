const db = [
    {
        nombre: "Top Utah",
        categoria: "Remeras/Tops",
        precio: 3700
    },
    {
        nombre: "Top Aimé",
        categoria: "Remeras/Tops",
        precio: 4900
    },
    {
        nombre: "Remera Fresh",
        categoria: "Remeras/Tops",
        precio: 9400
    },
    {
        nombre: "Top Aroha",
        categoria: "Remeras/Tops",
        precio: 6900
    },
    {
        nombre: "Primavera",
        categoria: "Polleras",
        precio: 6900
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(db);
            reject("Error en la base de datos.");
        }, 3000);
    });
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(db.filter(e => e.categoria == category));
            reject("Error en la base de datos.");
        }, 3000);
    });
}