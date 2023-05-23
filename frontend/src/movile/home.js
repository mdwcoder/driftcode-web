import React from 'react'
import { BarraSuperior } from './components/BarraSuperior'
import { Galeria } from './components/Galeria'

export const home = () => {
  return (
    <div>
      <BarraSuperior/>
      <Galeria/>
    </div>
  )
}
