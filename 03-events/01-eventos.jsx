function getRandomNumber() {
  return Math.round(Math.random() * 255);
}

function CambiaColor(props) {
  const getNumber = props.getRandomNumberFn;
  const cambiaFondo = () => {
    const body = document.querySelector('body');
    const r = getNumber();
    const g = getNumber();
    const b = getNumber();
    body.style.backgroundColor = `rgb(${r},${g},${b})`;
  };
  return <button onClick={cambiaFondo}>Cambia el color de fondo</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
  <CambiaColor getRandomNumberFn={getRandomNumber} />
</div>);
