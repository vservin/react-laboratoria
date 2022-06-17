# Tema 1: JSX
Tema anterior: [README.md principal](./../README.md)
Tema siguiente: [2 Componentes](./../02-components)

La extensión JSX se refiere a Extensión de sintáxis de JavaScript o JavaScript XML, haciendo referencia a la extensión del lenguaje JavaScript que introduce React. JSX puede recoirdarnos a un lenguaje de plantillas, pero con todo el poder y potencial de JS.
React adapta el hecho que la lógica para renderizar esta inherentemente unida con diversa lógica de las interfaces de usuario:
- Cómo los eventos se manejan.
- Cómo el estado cambia a lo largo del tiempo.
- Cómo los datos se preparan o procesan para ser mostrados.

En vez de "artificialmente" separar las tecnologías, poniendo las plantillas y la lógica en lugares separados, React [separa intereses](https://en.wikipedia.org/wiki/Separation_of_concerns) con unidades separadas denominadas "componentes" que contienen ambos, concepto que tomaremos en la siguiente sección, [Componentes](./../02-components).
JSX produce "elementos" React, que se pueden renderizar en el DOM. Veamos el siguiente ejemplo.
```jsx
const nombre = 'Samantha Reyes';
const elemento = <h1>Hola, {nombre}</h1>;
```
Nuestra variable `elemento` pareciera que tiene un sintáxis extraño, que no es ni `HTML`, ni un `string`. Podemos poner **cualquier** expresión válida de JavaScript dentro de las llaves `{}`, siendo algunos ejemplos: `5 + 8`, `usuario.nombre`, `traeNombre(usuario)`, etc.

JSX nos introduce un mundo de alternativas con sus "elementos React", pudiéndolos usar como expresiones, teniendo atributos y teniendo elementos hijos:

```jsx
function convierteNombre(usuario) {
  return `${usuario.nombre} ${usuario.apellido}`;
}

const usuario = {
  nombre: 'Spencer',
  apellido: 'Hastings',
};

const elemento = (
  <h5>
    Hola extraño.
  </h5>
);

function traeSaludo(persona) {
  if (persona) {
    return <h5>Hola, {convierteNombre(persona)}</h5>;
  }
  return elemento;
}
```

Internamente, [Babel](https://babeljs.io/docs/en/) compila todo nuestro código JSX a llamadas de creación de objetos de React, un ejemplo de lo anterior con 2 resultados idénticos serían:
```jsx
const elemento = (
  <h1 className="saludo">
    ¡Hola mundo!
  </h1>
);
```
Que equivaldría al mismo resultado que:
```jsx
const elemento = React.createElement(
  'h1',
  {className: 'saludo'},
  '¡Hola mundo!'
);
```
---
### [Saber más](https://es.reactjs.org/docs/introducing-jsx.html)
Ir al tema siguiente: [2 Componentes](./../02-components)
