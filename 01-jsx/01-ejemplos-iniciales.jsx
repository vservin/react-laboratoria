const elementoRoot = document.getElementById('root');
const root = ReactDOM.createRoot(elementoRoot);

function convierteNombre(usuario) {
  return `${usuario.nombre} ${usuario.apellido}`;
}

const usuario = {
  nombre: 'Spencer',
  apellido: 'Hastings',
  avatarUrl: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
};

const elemento = (
  <h1>
    Hola, extraño!
  </h1>
);

function traeSaludo(usuario) {
  if (usuario) {
    return <h1>Hola, {convierteNombre(usuario)}!</h1>;
  }
  return elemento;
}

// Si una etiqueta está vacía, puedes cerrarla inmediatamente con />, como en XML:
const elementoImagen = <img src={usuario.avatarUrl} />;

root.render(
  <div>
    {traeSaludo(usuario)}
    {elementoImagen}
  </div>
);
