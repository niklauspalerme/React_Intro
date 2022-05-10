//////////////////////////////////////////////////////////////////////////////////////////////
/// Importaciones


import React from 'react';


//////////////////////////////////////////////////////////////////////////////////////////////
/// Componentes


const Producto = ({product}) => {

    const {name,price,id} = product

    const seleccionarProducto = (id) =>{
        console.log(`Comprando el producto con ID: ${id}`);
    }

    return(
       <div>
           <h2>Product: {name}</h2>
           <h3>Price: {price}</h3>
           <button type='button' onClick={()=>seleccionarProducto(id)}>
                Comprar
           </button>
       </div>
    )

}


//////////////////////////////////////////////////////////////////////////////////////////////
/// Exportamos

export default Producto;
