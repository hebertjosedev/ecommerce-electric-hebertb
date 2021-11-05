const products = [
  {
    id: 1,
    producto: "patinete",
    img: "https://i.ibb.co/3dDdDFw/patinete-electricojpeg.jpg",
    nombre: "Patinete-smart 2.0",
    color: "negro",
    autonomia: "25km",
    velocidadMaxima: "25 km/h",
    pesoMaximoUsuario: "80 kg",
    bateria: "22 V, 2600 mAh",
    tiempoDeCarga: "2.5 horas",
    pesoPatinete: "9 kg",
    edadRecomendada: "14 años en adelante",
    stock: "70",
    precio: 199000,
  },

  {
    id: 2,
    producto: "bicicleta",
    img: "https://i.ibb.co/LR5LWqC/bicicleta-electrica.jpg",
    nombre: "bicicleta-smart",
    stock: "50",
    precio: 399000,
  },
  {
    id: 3,
    producto: "motocicleta",
    img: "https://i.ibb.co/8BVNVTh/motocicleta-electrica.png",
    nombre: "motocicleta-smart",
    stock: "20",
    precio: 1999000,
  },
  {
    id: 4,
    producto: "auto",
    img: "https://i.ibb.co/qYhXkPd/auto-electrico.jpg",
    nombre: "auto-smart",
    stock: "10",
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
