function BienvenidaUsuarix(props) {
  return <h1>¡Bienvenidx de vuelta {props.nombre}!</h1>;
}
function BienvenidaInvitadx() {
  return <h1>Por favor, inicia sesión.</h1>;
}

function Bienvenida(props) {
  const { usuarix } = props;
  if (usuarix) {
    return <BienvenidaUsuarix nombre={usuarix.nombre} />;
  }
  return <BienvenidaInvitadx />;
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Bienvenida usuarix={{ nombre: 'Emily' }} />);
// root.render(<Bienvenida />);
