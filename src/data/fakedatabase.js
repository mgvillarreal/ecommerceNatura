const db = [
    {
        id: 1,
        nombre: "Top Utah",
        categoria: "Remeras/Tops",
        precio: 3700,
        imagen: "src/assets/images/products/product1.png"
    },
    {
        id: 2,
        nombre: "Top Aimé",
        categoria: "Remeras/Tops",
        precio: 4900,
        imagen: "src/assets/images/products/product2.png"
    },
    {
        id: 3,
        nombre: "Remera Fresh",
        categoria: "Remeras/Tops",
        precio: 9400,
        imagen: "src/assets/images/products/product3.png"
    },
    {
        id: 4,
        nombre: "Top Aroha",
        categoria: "Remeras/Tops",
        precio: 6900,
        imagen: "src/assets/images/products/product4.png"
    },
    {
        id: 5,
        nombre: "Remera Spicy",
        categoria: "Remeras/Tops",
        precio: 6900,
        imagen: "src/assets/images/products/product5.png"
    },
    {
        id: 6,
        nombre: "Jean Wide Leg Ricci",
        categoria: "Pantalones",
        precio: 24200,
        imagen: "src/assets/images/products/product6.png"
    },
    {
        id: 7,
        nombre: "Jean Mom Aris",
        categoria: "Pantalones",
        precio: 23100,
        imagen: "src/assets/images/products/product7.png"
    },
    {
        id: 8,
        nombre: "Short Cassidy",
        categoria: "Pantalones",
        precio: 14850,
        imagen: "src/assets/images/products/product8.png"
    },
    {
        id: 9,
        nombre: "Short Montreal",
        categoria: "Pantalones",
        precio: 7370,
        imagen: "src/assets/images/products/product9.png"
    },
    {
        id: 10,
        nombre: "Jean Mom Kristine",
        categoria: "Pantalones",
        precio: 22000,
        imagen: "src/assets/images/products/product10.png"
    },
    {
        id: 11,
        nombre: "Vestido Amnesia",
        categoria: "Vestidos",
        precio: 9900,
        imagen: "src/assets/images/products/product11.png"
    },
    {
        id: 12,
        nombre: "Vestido Málaga",
        categoria: "Vestidos",
        precio: 6600,
        imagen: "src/assets/images/products/product12.png"
    },
    {
        id: 13,
        nombre: "Vestido Asia",
        categoria: "Vestidos",
        precio: 6270,
        imagen: "src/assets/images/products/product13.png"
    },
    {
        id: 14,
        nombre: "Vestido Satori",
        categoria: "Vestidos",
        precio: 9900,
        imagen: "src/assets/images/products/product14.png"
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