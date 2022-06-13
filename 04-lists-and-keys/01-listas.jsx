const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

const items = ["Leche", "Jamón", "Vino tinto", "Queso suizo", "Croutones"];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
  <ul>
    {/* 😨 Funciona pero da un error? 😨 */}
    {/* {items.map(item => <li>{item}</li>)} */}

    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
</div>);
