# Tema 5: Renderizado condicional
Tema anterior: [4 Listas y llaves](./../04-lists-and-keys)
Tema siguiente: [6 Estado del componente](./../06-lifting-up-state)

---
En el segundo tema, mencionamos qué es un componente y algo denominado "ciclo de vida", sin embargo, no hemos visualizado aún un uso que podamos tener para el "montar" o "desmontar" un componente, esto lo veremos en este tema.

Durante el ciclo de vida de nuestra aplicación, podemos crear, destruir, recrear múltiples componentes a la medida, dependiendo lo que necesitemos en el momento de visualización del usuario.

El renderizado condicional en React funciona de la misma forma que lo hacen las condiciones en JavaScript. Usa operadores de JavaScript como if o el operador condicional para crear elementos representando el estado actual, y deja que React actualice la interfaz de usuario para emparejarlos.

Consideremos 2 componentes de ejemplo, indicando una bienvenida dependiendo si el usuario está autenticado o no:

```jsx
function BienvenidaUsuario(props) {
  return <h1>¡Bienvenido de vuelta {props.nombre}!</h1>;
}
function BienvenidaInvitado() {
  return <h1>Por favor, inicia sesión.</h1>;
}
```
Vamos a crear un componente que, dependiendo si hay un usuario o no, muestre una bienvenida:
```jsx
function Bienvenida(props) {
  const { usuario } = props;
  if (usuario) {
    return <BienvenidaUsuario nombre={usuario.nombre} />;
  }
  return <BienvenidaInvitado />;
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<Bienvenida usuario={{ nombre: 'Emily' }} />);
root.render(<Bienvenida />);
```

También podemos usar operadores lógicos para condicionar el renderizado de un componente, por ejemplo, queremos un componente que nos muestre los mensajes sin leer, pero no muestre nada si no tenemos mensajes nuevos:
```jsx
function Correspondencia(props) {
  const { mensajesSinLeer } = props;
  return <div>
    <h2>Bienvenidx!</h2>
    { mensajesSinLeer.length > 0 &&
      <p>¡Parece que tienes {mensajesSinLeer.length} mensajes sin leer!</p>
    }
  </div>;
}
```

También podemos usar un operador ternario o if-else de una línea, para condicionar el renderizado de un componente y con un valor predeterminado, por ejemplo, a nuestro componente anterior, quisiéramos añadirle un mensaje cuando no tenemos mensajes nuevos, si usáramos un `if-else` quedaría de la siguiente manera:
```jsx
function Correspondencia(props) {
  const { mensajesSinLeer } = props;
  let mensaje;
  if (mensajesSinLeer.length > 0) {
    mensaje = <p>¡Parece que tienes {mensajesSinLeer.length} mensajes sin leer!</p>;
  } else {
    mensaje = <p>No tienes ningún mensaje nuevo 😺</p>;
  }
  return <div>
    <h2>Bienvenidx!</h2>
    {mensaje}
  </div>;
}
```

Sin embargo, podemos simplificar lo anterior con un operador ternario, teniendo como resultado:
```jsx
function Correspondencia(props) {
  const { mensajesSinLeer } = props;
  return <div>
    <h2>Bienvenidx!</h2>
    { mensajesSinLeer.length > 0
      ? <p>¡Parece que tienes {mensajesSinLeer.length} mensajes sin leer!</p>
      : <p>No tienes ningún mensaje nuevo 😺</p>
    }
  </div>;
}
```

---
### [Saber más](https://es.reactjs.org/docs/conditional-rendering.html)
Ir al tema siguiente: [6 Estado del componente](./../06-lifting-up-state)
