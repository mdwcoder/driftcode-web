import React from 'react'
import { BarraSuperior } from '../../components/BarraSuperior'
import Shop from '../../components/shop'
import './general.css'
import NeonSquare from './NeonSquare'

export const E30 = () => {

    return (
        <div>
            <BarraSuperior/>
            <div className='NeonSquare'><NeonSquare name={'E30 => SHOP'}/></div>
            <div className='shop'>
              <Shop section={'E30'} /></div>
        </div>
      )
    }
    