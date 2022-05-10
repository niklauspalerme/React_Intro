//////////////////////////////////////////////////////////////////////////////////////////////
/// Importaciones


import React from 'react';


//////////////////////////////////////////////////////////////////////////////////////////////
/// Componentes


const Producto = ({product, car, setCar, products}) => {

    const {name,price,id} = product

    const seleccionarProducto = (id) =>{
       const productx = products.filter(product => product.id === id)
       setCar([
           ...car,
           productx[0]
       ]);
    }

    const eliminarProducto = (id)=>{
        const carProdutcx = car.filter (carProduct => carProduct.id  !== id);
        setCar(carProdutcx);
    }

    return(
       <div>
           <h2>Product: {name}</h2>
           <h3>Price: {price}</h3>
          
           {products
           ? ( <button type='button' onClick={()=>seleccionarProducto(id)}>
                Add
               </button>
            )
           :( <button type='button' onClick={()=>eliminarProducto(id)}>
               Delete
              </button>
           )}  
       </div>
    )

}


//////////////////////////////////////////////////////////////////////////////////////////////
/// Exportamos

export default Producto;
