const ordenesDelUsuario = [
  { id: 'd4dde888', nombre: 'Gaseosa', variante: '500ml', cantidad: 2 },
  { id: '66ae1c9e', nombre: 'Hamburguesa', variante: 'doble', cantidad: 1, notas: 'sin cebolla' },
  { id: 'ea531e91', nombre: 'Hamburguesa', variante: 'sencilla', cantidad: 1 },
  { id: '55d7ced1', nombre: 'Papas Fritas', variante: 'mediana', cantidad: 1 },
  { id: '02bc9b48', nombre: 'Helado', cantidad: 1, notas: 'vainilla' },
];

function ElementoDeOrden(props) {
  const { id, nombre, variante, cantidad, notas } = props.orden;
  const verOrden = () => {
    alert(`${cantidad} ${nombre} tiene ID: ${id}`);
  };

  return <div className="orden" onClick={verOrden}>
    <div className="cantidad">
      <h1>{cantidad}</h1>
    </div>
    <div className="descripcion">
      <h3>{nombre}</h3>
      <p>{variante}</p>
      <small>Notas: {notas}</small>
    </div>
  </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div className="ordenes">
  {ordenesDelUsuario.map(elemento => <ElementoDeOrden key={elemento.id} orden={elemento} />)}
</div>);
