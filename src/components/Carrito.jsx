//////////////////////////////////////////////////////////////////////////////////////////////
/// Importaciones


import React from 'react';
import './carrito.css'
import Producto from './Producto';

//////////////////////////////////////////////////////////////////////////////////////////////
/// Componentes


const Carrito = ({car}) => {

    return(
       <div className='carrito'>
           <h2>Tu Carrito de Compras</h2>
           {car.length ===0
            ? <p>There is not element in the Kart</p>
            : car.map( carProduct =>(
                    <Producto
                    key={carProduct.id}
                    product= {carProduct} />
                ))}
       </div>
    )

}


//////////////////////////////////////////////////////////////////////////////////////////////
/// Exportamos

export default Carrito;
