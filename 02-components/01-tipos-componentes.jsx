function BienvenidaFuncional(props) {
  return <h3>Hola, {props.nombre}!</h3>;
}

class BienvenidaClase extends React.Component {
  render() {
    return <h3>Hola, {this.props.nombre}!</h3>;
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BienvenidaFuncional nombre="Jaime" />
    <BienvenidaClase nombre="Ximena" />
    <BienvenidaFuncional nombre="Hannah" />
    <BienvenidaClase nombre="Ezra" />
  </div>
);
