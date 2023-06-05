import React from 'react'
import { BarraSuperior } from '../../components/BarraSuperior'
import Shop from '../../components/shop'
import './general.css'
import NeonSquare from './NeonSquare'

export const E36 = () => {

    return (
        <div>
            <BarraSuperior/>
            <div className='NeonSquare'><NeonSquare name={'E36 => SHOP'}/></div>
            <div className='shop'>
              <Shop section={'E36'} /></div>
        </div>
      )
    }
