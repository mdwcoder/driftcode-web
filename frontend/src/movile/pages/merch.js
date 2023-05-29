import React from 'react'
import { BarraSuperior } from '../components/BarraSuperior';
import NeonSquare from '../../pages/models_pages/NeonSquare'
import Shop from '../../components/shop'
import './merch.css'

export const merch = () => {
  const carpetaContext = require.context(
    '../../materiales/shop/merch',
    true,
    /^\.\/(?!.*\.(svg|txt|png|jpeg)).*$/
  );

    return (
        <div>
            <BarraSuperior/>
            <div className='NeonSquare'><NeonSquare name={'merch => SHOP'}/></div>
            <div className='shop'>
              <Shop carpetaContext={carpetaContext} /></div>
        </div>
      )
    }
    