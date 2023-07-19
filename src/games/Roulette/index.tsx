import React from 'react'
import image from './image.png'

export default {
  name: 'Roulette',
  short_name: 'roulette',
  description: '',
  creator: '2yWGEWW5hMtMbvGAKsqVxurQTKqTmSNBLTYUozG5Qdd7',
  image,
  theme_color: '#59ff5f',
  app: React.lazy(() => import('./App')),
}
