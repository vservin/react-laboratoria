function Controles(props) {
  const { tiempo, continuar, reiniciar, detener, activo } = props;
  if (activo) {
    return <div>
      <button onClick={detener}>Detener</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>;
  }
  if (tiempo === 0) {
    return <div>
      <button onClick={continuar}>Iniciar</button>
    </div>;
  }
  return <div>
    <button onClick={continuar}>Continuar</button>
    <button onClick={reiniciar}>Reiniciar</button>
  </div>;
}

function FormateaNumero(numero) {
  return numero.toString().padStart(2, '0');
}

function MuestraCronometro(props) {
  const { tiempo } = props;
  const segundos = Math.floor(tiempo / 10);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  return <h1>
    {FormateaNumero(horas)}
    :
    {FormateaNumero(minutos % 60)}
    :
    {FormateaNumero(segundos % 60)}
    .
    {tiempo % 10}
  </h1>;
}

class Cronometro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decimasDeSegundo: 0,
      intervalo: null,
    };
  }

  reiniciaTiempo() {
    this.setState({ decimasDeSegundo: 0 });
  }

  incrementaTiempo() {
    this.setState((estado) => {
      return { decimasDeSegundo: estado.decimasDeSegundo + 1 };
    });
  }

  iniciaIntervalo() {
    const tiempo = 100;
    if (!this.state.intervalo) {
      this.setState({ intervalo: setInterval(() => this.incrementaTiempo(), tiempo) });
    }
  }

  detieneIntervalo() {
    if (this.state.intervalo) {
      clearInterval(this.state.intervalo);
      this.setState({ intervalo: null });
    }
  }

  render() {
    return <div>
      <MuestraCronometro tiempo={this.state.decimasDeSegundo} />
      <Controles tiempo={this.state.decimasDeSegundo}
        continuar={this.iniciaIntervalo.bind(this)}
        reiniciar={this.reiniciaTiempo.bind(this)}
        detener={this.detieneIntervalo.bind(this)}
        activo={this.state.intervalo}
      />
    </div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Cronometro />);
