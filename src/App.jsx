import React from 'react'; // Asegúrate de agregar esta línea
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Crissacio Shop!" />
    </>
  );
}

export default App;
