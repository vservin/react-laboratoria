# Tema 2: Componentes
Tema anterior: [1 JSX](./../01-jsx)
Tema siguiente: [3 Eventos](./../03-events)

---
Recapitulando la última sección del tema anterior, para poder incluir React en nuestro proyecto podemos utilizar 2 métodos.
1. Incluir React y Babel [en forma de scripts](https://es.reactjs.org/docs/add-react-to-a-website.html) en nuestro HTML (aunque esta forma se recomienda únicamente como aprendizaje ya que no tiene buen desempeño).
2. Crear una aplicación mediante un comando de `npm` denominado [`create-react-app`](https://es.reactjs.org/docs/create-a-new-react-app.html)

En esta sección utilizaremos a forma de ejemplo el método 1, incluir en un [archivo HTML](./index.html) las librerías que nos permiten ejecutar código JSX e incluir 2 archivos de ejemplo para esta sección:
- [Tipos de componentes](./01-tipos-componentes.jsx)
- [Extracción de componentes](./02-extraccion-componentes.jsx)

---
Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.
Conceptualmente, los componentes se parecen a una función en JS. Aceptan parámetros arbitrarios denominados `props` y retornan un elemento React describiendo lo que aparecería en pantalla.

### Tipos de componentes
Existen 2 tipos de componentes que podemos utilizar en React:
Componentes Funcionales, nombrados por ser una función de JS que retorna un elemento React.
Componentes de clase, nombrado por ser una clase de programación orientada a objetos con al menos un método `render` que retorna un elemento React.

Componente Funcional:
```jsx
function BienvenidaFuncional(props) {
  return <h3>Hola, {props.nombre}!</h3>;
}
```
Componente Clase:
```jsx
class BienvenidaClase extends React.Component {
  render() {
      return <h3>Hola, {this.props.nombre}!</h3>;
  }
}
```
Para mandar "a llamar" un componente basta con escribir su nombre con sus respectivos props como si fueran propiedades HTML:
```jsx
<BienvenidaFuncional nombre="Jaime" />
```

Los componentes pueden ser llamados la cantidad de veces que sea necesaria en nuestra aplicación:
```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div>
		<BienvenidaFuncional nombre="Jaime" />
		<BienvenidaClase nombre="Ximena" />
		<BienvenidaFuncional nombre="Hannah" />
		<BienvenidaClase nombre="Ezra" />
	</div>
);
```
Y un componente puede ser parte de otro componente:
```jsx
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.usuario.avatarUrl}
      alt={props.usuario.nombre}
    />
  );
}

function InfoUsuario(props) {
  return (
    <div className="InfoUsuario">
      <Avatar usuario={props.usuario} />
      <div className="InfoUsuario-nombre">
        {props.usuario.nombre}
      </div>
    </div>
  );
}
```

Nota: Un componente clase puede contener métodos que hacen referencia a algo denominado "ciclo de vida" de un componente, métodos que nos permiten ejecutar lógica cuando un componente se "montó" en el DOM, cuando se "desmontará" del DOM o cuando un parámetro `prop` sea actualizado, etc.
[Saber más](https://es.reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class) del ciclo de vida de un componente.

---
### [Saber más](https://es.reactjs.org/docs/components-and-props.html)
Ir al tema siguiente: [3 Eventos](./../03-events)
