const products = [
  {
    id: 1,
    producto: "patinetes",
    img: "https://i.ibb.co/3dDdDFw/patinete-electricojpeg.jpg",
    nombre: "patinete N5",
    color: "negro",
    autonomia: "25km",
    velocidadMaxima: "25 km/h",
    pesoMaximoUsuario: "80 kg",
    bateria: "22 V, 2600 mAh",
    tiempoDeCarga: "2.5 horas",
    pesoPatinete: "9 kg",
    edadRecomendada: "14 años en adelante",
    stock: 5,
    precio: 199000,
  },

  {
    id: 2,
    producto: "bicicletas",
    img: "https://i.ibb.co/gSQzZ5x/bicicleta-electrica.webp",
    nombre: "bicicleta X8",
    color: "negro",
    autonomia: "15-20 km",
    velocidadMaxima: "25-30 km/h",
    pesoMaximoUsuario: "100 kg",
    bateria: "36V 4.04aH",
    tiempoDeCarga: "2-3 horas",
    peso: "9 kg",
    edadRecomendada: "14 años en adelante",
    stock: 5,
    precio: 399000,
  },
  {
    id: 3,
    producto: "motocicletas",
    img: "https://i.ibb.co/tZqxSDg/motocicleta-electrica.png",
    nombre: "motocicleta G9",
    color: "rojo",
    autonomia: "30-40 km",
    velocidadMaxima: "45 km/h",
    pesoMaximoUsuario: "110 kg",
    bateria: "48 V",
    tiempoDeCarga: "6 horas",
    peso: "150 kg",
    edadRecomendada: "18 años en adelante",
    stock: 4,
    precio: 1999000,
  },
  {
    id: 4,
    producto: "autos",
    img: "https://i.ibb.co/PNScj5w/auto-electrico.jpg",
    nombre: "auto M5",
    color: "blanco",
    autonomia: "80 km",
    velocidadMaxima: "45 km/h",
    pesoMaximoUsuario: "2 personas",
    bateria: "60v / (10/12/45ah)",
    tiempoDeCarga: "8 a 10 horas",
    peso: "250 kg",
    edadRecomendada: "18 años en adelante",
    stock: 3,
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
