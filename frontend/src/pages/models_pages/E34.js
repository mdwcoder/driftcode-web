import React from 'react'
import { BarraSuperior } from '../../components/BarraSuperior'
import Shop from '../../components/shop'
import './general.css'
import NeonSquare from './NeonSquare'

export const E34 = () => {

    return (
        <div>
            <BarraSuperior/>
            <div className='NeonSquare'><NeonSquare name={'E34 => SHOP'}/></div>
            <div className='shop'>
              <Shop section={'E34'} /></div>
        </div>
      )
    }
