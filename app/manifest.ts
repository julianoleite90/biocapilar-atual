import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Biocapilar - Suplemento Capilar Número 1 do Brasil',
    short_name: 'Biocapilar',
    description: 'Fortaleça seus cabelos e pare a queda com Biocapilar. Fórmula natural que regenera folículos, reduz queda e acelera crescimento.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#8B2C5A',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
} 