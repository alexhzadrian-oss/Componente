import { useState } from 'react';

export default function Inventario() {
  const [inventario, setInventario] = useState([
    { id: 1, producto: 'Pan Rollo', stock: 40, estado: 'Disponible' },
    { id: 2, producto: 'Pan de Bono', stock: 25, estado: 'Disponible' },
    { id: 3, producto: 'Almojábana', stock: 30, estado: 'Disponible' },
  ]);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Control de Inventario</h2>
      <p>Gestión y control de stock de la Panadería Rico Pan.</p>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4e3d7' }}>
            <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Producto</th>
            <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Stock Actual</th>
            <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {inventario.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.producto}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.stock}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{item.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
