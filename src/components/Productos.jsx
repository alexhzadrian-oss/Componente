import { useState } from 'react';

export default function Productos() {
  const [productos, setProductos] = useState([
    regProduct(1, 'Pan Rollo', 500, 40),
    regProduct(2, 'Pan de Bono', 1200, 25),
    regProduct(3, 'Almojábana', 1500, 30),
  ]);

  function regProduct(id, nombre, precio, stock) {
    return { id, nombre, precio, stock };
  }

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');

  const agregarProducto = (e) => {
    e.preventDefault();
    if (!nombre || !precio || !stock) return alert('Por favor completa todos los campos');
    
    const nuevo = { id: Date.now(), nombre, precio: Number(precio), stock: Number(stock) };
    setProductos([...productos, nuevo]);
    setNombre(''); setPrecio(''); setStock('');
  };

  return (
    <div style={styles.container}>
      <h2>Gestión de Productos</h2>
      
      <form onSubmit={agregarProducto} style={styles.form}>
        <input type="text" placeholder="Nombre del producto" value={nombre} onChange={(e) => setNombre(e.target.value)} style={styles.input} />
        <input type="number" placeholder="Precio ($)" value={precio} onChange={(e) => setPrecio(e.target.value)} style={styles.input} />
        <input type="number" placeholder="Stock inicial" value={stock} onChange={(e) => setStock(e.target.value)} style={styles.input} />
        <button type="submit" style={styles.btn}>Registrar Producto</button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr style={styles.trHead}>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Nombre</th>
            <th style={styles.th}>Precio</th>
            <th style={styles.th}>Stock</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td style={styles.td}>{p.id}</td>
              <td style={styles.td}>{p.nombre}</td>
              <td style={styles.td}>${p.precio}</td>
              <td style={styles.td}>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: { padding: '2rem', maxWidth: '800px', margin: '0 auto' },
  form: { display: 'flex', gap: '10px', marginBottom: '2rem', flexWrap: 'wrap' },
  input: { padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: '1' },
  btn: { backgroundColor: '#5c3a21', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' },
  table: { width: '100%', borderCollapse: 'collapse', marginTop: '1rem' },
  trHead: { backgroundColor: '#f4e3d7' },
  th: { border: '1px solid #ddd', padding: '10px', textAlign: 'left' },
  td: { border: '1px solid #ddd', padding: '10px' }
};