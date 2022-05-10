//////////////////////////////////////////////////////////////////////////////////////////////
/// Importaciones

import Header from "./components/Header.";
import Footer from "./components/Footer";
import { Fragment } from "react";


//////////////////////////////////////////////////////////////////////////////////////////////
/// Componentes


const App = () => {

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
        <Header 
          titulo = 'Tienda Virtual de Nico'
        />
        <Footer 
          fecha={fecha}
        />
    </Fragment>
  );
}


//////////////////////////////////////////////////////////////////////////////////////////////
/// Exportamos

export default App;
