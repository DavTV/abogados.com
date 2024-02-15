/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns:[
      {
      protocol:"http",
      hostname:"localhost",
      port:"1337",
      pathname:"/**"
      }  
    ] // Agrega el dominio de tu API o servidor de imágenes aquí
  },
};
