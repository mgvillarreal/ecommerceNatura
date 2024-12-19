const db = [
    {
        id: 1,
        nombre: "Top Utah",
        categoria: "Remeras/Tops",
        precio: 3700
    },
    {
        id: 2,
        nombre: "Top Aimé",
        categoria: "Remeras/Tops",
        precio: 4900
    },
    {
        id: 3,
        nombre: "Remera Fresh",
        categoria: "Remeras/Tops",
        precio: 9400
    },
    {
        id: 4,
        nombre: "Top Aroha",
        categoria: "Remeras/Tops",
        precio: 6900
    },
    {
        id: 5,
        nombre: "Remera Spicy",
        categoria: "Remeras/Tops",
        precio: 6900
    },
    {
        id: 6,
        nombre: "Jean Wide Leg Ricci",
        categoria: "Pantalones",
        precio: 24200
    },
    {
        id: 7,
        nombre: "Jean Mom Aris",
        categoria: "Pantalones",
        precio: 23100
    },
    {
        id: 8,
        nombre: "Short Cassidy",
        categoria: "Pantalones",
        precio: 14850
    },
    {
        id: 9,
        nombre: "Short Montreal",
        categoria: "Pantalones",
        precio: 7370
    },
    {
        id: 10,
        nombre: "Jean Mom Kristine",
        categoria: "Pantalones",
        precio: 22000
    },
    {
        id: 11,
        nombre: "Vestido Amnesia",
        categoria: "Vestidos",
        precio: 9900
    },
    {
        id: 12,
        nombre: "Vestido Málaga",
        categoria: "Vestidos",
        precio: 6600
    },
    {
        id: 13,
        nombre: "Vestido Asia",
        categoria: "Vestidos",
        precio: 6270
    },
    {
        id: 14,
        nombre: "Vestido Satori",
        categoria: "Vestidos",
        precio: 9900
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(db);
            reject("Error en la base de datos.");
        }, 2000);
    });
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(db.filter(e => e.categoria == category));
            reject("Error en la base de datos.");
        }, 2000);
    });
}

export const getProductById = (id) => {
    return db.find(e => e.id == id);
}