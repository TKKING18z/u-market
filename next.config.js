/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  typescript: {
    // !! WARN !!
    // Ignora errores de tipado durante el build (para fines de despliegue)
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignora errores de ESLint durante el build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 