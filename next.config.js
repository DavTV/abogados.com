/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    // Configuración para entorno de desarrollo (local)
    // Aquí se utiliza localhost:1337 para las imágenes en el entorno local
    // Asegúrate de ajustar el puerto y el hostname según tu configuración de desarrollo
    domains: ['localhost:1337'],
    // Configuración para entorno de producción (servidor remoto)
    // Aquí puedes agregar el dominio de tu servidor remoto para las imágenes en producción
    // Asegúrate de ajustar el protocolo, hostname y cualquier otro detalle según tu configuración de producción
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://abogadosdb.onrender.com", // Reemplaza "tudominio.com" con tu dominio real
        pathname: "/**"
      }
    ]
  }
};
