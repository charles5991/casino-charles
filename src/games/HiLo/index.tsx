import React from 'react'
import image from './image.png'

export default {
  name: 'HiLo',
  short_name: 'hilo',
  description: '',
  creator: '2yWGEWW5hMtMbvGAKsqVxurQTKqTmSNBLTYUozG5Qdd7',
  image,
  app: React.lazy(() => import('./App')),
}
