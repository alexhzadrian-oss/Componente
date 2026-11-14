export default function Navbar({ setVistaActual, vistaActual }) {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Panadería Rico Pan</h2>
      <div style={styles.links}>
        <button onClick={() => setVistaActual('inicio')} style={styles.btn}>Inicio</button>
        <button onClick={() => setVistaActual('productos')} style={styles.btn}>Productos</button>
        <button onClick={() => setVistaActual('inventario')} style={styles.btn}>Inventario</button>
        <button onClick={() => setVistaActual('ventas')} style={styles.btn}>Ventas</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#5c3a21', padding: '1rem 2rem', color: '#fff' },
  logo: { margin: 0, fontSize: '1.5rem' },
  links: { display: 'flex', gap: '10px' },
  btn: { backgroundColor: 'transparent', border: '1px solid #fff', color: '#fff', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }
};