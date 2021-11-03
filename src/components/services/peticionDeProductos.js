const products = [
  {
    id: 1,
    producto: "patinete",
    img: "https://i.ibb.co/3dDdDFw/patinete-electricojpeg.jpg",
    nombre: "patinete-smart",
    precio: 199000,
  },
  {
    id: 2,
    producto: "bicicleta",
    img: "https://i.ibb.co/LR5LWqC/bicicleta-electrica.jpg",
    nombre: "bicicleta-smart",
    precio: 399000,
  },
  {
    id: 3,
    producto: "motocicleta",
    img: "https://i.ibb.co/8BVNVTh/motocicleta-electrica.png",
    nombre: "motocicleta-smart",
    precio: 1999000,
  },
  {
    id: 4,
    producto: "auto",
    img: "https://i.ibb.co/qYhXkPd/auto-electrico.jpg",
    nombre: "auto-smart",
    precio: 7999000,
  },
];

// Llamada a mi stock de productos

export const PeticionDeProductos = new Promise((resolve, reject) => {
  const condicion = true;
  if (condicion) {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  } else {
    setTimeout(() => {
      reject("error 404");
    }, 2000);
  }
});
