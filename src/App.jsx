import { useState } from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Productos from './components/Productos';
import Inventario from './components/Inventario';
import Ventas from './components/Ventas';
import './App.css';

function App() {
  const [vistaActual, setVistaActual] = useState('inicio');

  return (
    <div className="app-container">
      <Navbar setVistaActual={setVistaActual} vistaActual={vistaActual} />
      
      <main className="contenido-principal">
        {vistaActual === 'inicio' && <Inicio setVistaActual={setVistaActual} />}
        {vistaActual === 'productos' && <Productos />}
        {vistaActual === 'inventario' && <Inventario />}
        {vistaActual === 'ventas' && <Ventas />}
      </main>
    </div>
  );
}

export default App;