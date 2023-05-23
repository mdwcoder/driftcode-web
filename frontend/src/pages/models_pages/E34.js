import React from 'react'
import { BarraSuperior } from '../../components/BarraSuperior'
import Shop from '../../components/shop'
import './general.css'
import NeonSquare from './NeonSquare'

export const E34 = () => {
  const carpetaContext = require.context(
    '../../materiales/shop/piezas/E34',
    true,
    /^\.\/(?!.*\.(svg|txt|png|jpeg)).*$/
  );

    return (
        <div>
            <BarraSuperior/>
            <div className='NeonSquare'><NeonSquare name={'E34 => SHOP'}/></div>
            <div className='shop'>
              <Shop carpetaContext={carpetaContext} /></div>
        </div>
      )
    }
