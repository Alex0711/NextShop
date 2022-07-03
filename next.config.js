/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'placeing.com', 'source.unsplash.com'],
  } 
  // env: { //puedo agregar variables de entorno
  //   customKey: 'customValue'
  // },
  // basePath: '/dist',
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: 'https://gndx.dev',
  //       permanent: true
  //     }
  //   ]
  // }
}

module.exports = nextConfig
