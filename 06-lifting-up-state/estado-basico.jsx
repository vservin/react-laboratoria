class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  reiniciar() {
    this.setState({ count: 0 });
  }

  agregarOQuitar(valor) {
    this.setState((s) => ({ count: s.count + valor }));
  }

  render() {
    return <div>
      <h1>{this.state.count}</h1>
      <button onClick={() => this.agregarOQuitar(-1)}>Quitar</button>
      <button onClick={() => this.reiniciar()}>Reiniciar</button>
      <button onClick={() => this.agregarOQuitar(1)}>Añadir</button>
    </div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Contador />);
