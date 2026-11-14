export default function Inicio() {
  return (
    <div style={styles.container}>
      <h2>Bienvenido al Sistema de Gestión - Rico Pan</h2>
      <p>Selecciona un módulo en el menú superior para administrar productos, inventarios y ventas.</p>
      <div style={styles.cardsContainer}>
        <div style={styles.card}><h3>📦 Control de Inventarios</h3><p>Monitoreo de materias primas y productos terminados.</p></div>
        <div style={styles.card}><h3>🥐 Gestión de Productos</h3><p>Registro y actualización del catálogo de panadería.</p></div>
        <div style={styles.card}><h3>💰 Módulo de Ventas</h3><p>Registro de transacciones diarias y facturación rápida.</p></div>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '2rem', textAlign: 'center' },
  cardsContainer: { display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '2rem', flexWrap: 'wrap' },
  card: { backgroundColor: '#fdf8f6', border: '1px solid #e7d7d0', padding: '1.5rem', borderRadius: '8px', width: '250px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }
};