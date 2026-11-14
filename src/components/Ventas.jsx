JavaScript
import { useState } from 'react';

export default function Ventas() {
  const [productoVenta, setProductoVenta] = useState('Pan Rollo');
  const [cantidad, setCantidad] = useState(1);
  const [ventasRealizadas, setVentasRealizadas] = useState([]);

  const registrarVenta = (e) => {
    e.preventDefault();
    const nuevaVenta = { id: Date.now(), producto: productoVenta, cant: cantidad, total: cantidad * 500 };
    setVentasRealizadas([nuevaVenta, ...ventasRealizadas]);
    setCantidad(1);
  };

  return (
    <div style={styles.container}>
      <h2>Módulo de Facturación y Ventas</h2>
      <form onSubmit={registrarVenta} style={styles.form}>
        <select value={productoVenta} onChange={(e) => setProductoVenta(e.target.value)} style={styles.input}>
          <option value="Pan Rollo">Pan Rollo ($500)</option>
          <option value="Pan de Bono">Pan de Bono ($1200)</option>
          <option value="Almojábana">Almojábana ($1500)</option>
        </select>
        <input type="number" min="1" value={cantidad} onChange={(e) => setCantidad(Number(e.target.value))} style={styles.input} />
        <button type="submit" style={styles.btn}>Registrar Venta</button>
      </form>

      <h3>Historial de Ventas Recientes</h3>
      <ul>
        {ventasRealizadas.map((v) => (
          <li key={v.id}>Venta de {v.cant}x {v.producto} - Total: ${v.total}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { padding: '2rem', maxWidth: '600px', margin: '0 auto' },
  form: { display: 'flex', gap: '10px', marginBottom: '2rem' },
  input: { padding: '8px', flex: 1 },
  btn: { backgroundColor: '#2e7d32', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' }
};