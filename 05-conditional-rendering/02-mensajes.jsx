function Correspondencia(props) {
  const { mensajesSinLeer } = props;
  return <div>
    <h2>Bienvenidx!</h2>
    { mensajesSinLeer.length > 0 &&
      <p>¡Parece que tienes {mensajesSinLeer.length} mensajes sin leer!</p>
    }
  </div>;
}

function Correspondencia2(props) {
  const { mensajesSinLeer } = props;
  return <div>
    <h2>Bienvenidx!</h2>
    { mensajesSinLeer.length > 0
      ? <p>¡Parece que tienes {mensajesSinLeer.length} mensajes sin leer!</p>
      : <p>No tienes ningún mensaje nuevo 😺</p>
    }
  </div>;
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<Correspondencia mensajesSinLeer={['Hola!', 'Adiós!']} />);
// root.render(<Correspondencia mensajesSinLeer={[]} />);
// root.render(<Correspondencia2 mensajesSinLeer={['Hola!', 'Adiós!']} />);
root.render(<Correspondencia2 mensajesSinLeer={[]} />);
