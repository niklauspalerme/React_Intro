//////////////////////////////////////////////////////////////////////////////////////////////
/// Importaciones

import Header from "./components/Header.";
import Footer from "./components/Footer";
import { Fragment, useState } from "react";
import Producto from "./components/Producto";


//////////////////////////////////////////////////////////////////////////////////////////////
/// Componentes


const App = () => {

  const [products, setProducts] = useState([
    {id:1, name: "Angular JS T-shirt", price: 50},
    {id:2, name: "Vue JS T-shirt", price: 30},
    {id:3, name: "React JS T-shirt", price: 40},
    {id:4, name: "Node JS T-shirt", price: 20}
  ]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
        <Header 
          titulo = 'Tienda Virtual de Nico'
        />

    <h1>Listado de Productos</h1>
    {products.map(product => (
      <Producto 
        key = {product.id} 
        product = {product} />
    ))}
        
        <Footer 
          fecha={fecha}
        />
    </Fragment>
  );
}


//////////////////////////////////////////////////////////////////////////////////////////////
/// Exportamos

export default App;
