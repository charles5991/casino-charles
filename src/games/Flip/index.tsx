import React from 'react'
import image from './image.png'

export default {
  name: 'Flip',
  short_name: 'flip',
  description: '',
  creator: '2yWGEWW5hMtMbvGAKsqVxurQTKqTmSNBLTYUozG5Qdd7',
  image,
  theme_color: '#ad6bff',
  app: React.lazy(() => import('./App')),
}
