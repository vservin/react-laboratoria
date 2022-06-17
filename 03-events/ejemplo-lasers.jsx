function ComponenteLasers1() {
  const activarLasers = () => {
    alert("Lásers activados!");
  };
  return (
    <button onClick={activarLasers}>
      Activar lásers
    </button>
  );
}

class ComponenteLasers2 extends React.Component {
  mandarAlerta() {
    alert("Lásers activados!");
  }

  activarLasers() {
    this.mandarAlerta();
  }

  render() {
    return (
      // <button onClick={this.activarLasers.bind(this)}>
      <button onClick={() => this.activarLasers()}>
        Activar lásers
      </button>
    );
  }
}
