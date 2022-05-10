//////////////////////////////////////////////////////////////////////////////////////////////
/// Importaciones


import React from 'react';


//////////////////////////////////////////////////////////////////////////////////////////////
/// Componentes


const Producto = ({product, car, setCar, products}) => {

    const {name,price,id} = product

    const seleccionarProducto = (id) =>{
       const productx = products.filter(product => product.id === id)
       console.log(productx[0]);
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
