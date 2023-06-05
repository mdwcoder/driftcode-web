import React from 'react'
import { BarraSuperior } from '../../components/BarraSuperior'
import Shop from '../../components/shop'
import './general.css'
import NeonSquare from './NeonSquare'

export const universal = () => {
    return (
        <div>
            <BarraSuperior/>
            <div className='NeonSquare'><NeonSquare name={'Universal => SHOP'}/></div>
            <div className='shop'>
              <Shop section={'universal'} /></div>
        </div>
      )
    }
