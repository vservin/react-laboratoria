const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map((num) => num * 2);
console.log(dobles);

function ListaDeSuper(props) {
  const { porComprar } = props
  const elementosDeLista = porComprar.map((item, index) => 
    <li key={`${index}${item}`}>{item}</li>
  );
  return <ul>{elementosDeLista}</ul>;
}

const miLista = ["Leche", "Jamón", "Vino tinto", "Queso suizo", "Croutones"];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* 😨 Funciona pero... ¿Da un error en consola? 😨 */}
    {/* <ul>{miLista.map(item => <li>{item}</li>)}</ul> */}

    <ListaDeSuper porComprar={miLista} />
  </div>
);
