import React from 'react'
import { BarraSuperior } from '../components/BarraSuperior'
import Shop from '../components/shop'
import './models_pages/general.css'
import NeonSquare from './models_pages/NeonSquare'

export const merch = () => {
    return (
        <div>
            <BarraSuperior/>
            <div className='NeonSquare'><NeonSquare name={'merch => SHOP'}/></div>
            <div className='shop'>
              <Shop section={'merch'} /></div>
        </div>
      )
    }
    