# Tema 3: Eventos
Tema anterior: [2 Componentes](./../02-components)
Tema siguiente: [4 Listas y llaves](./../04-lists-and-keys)

---
Para manejo de eventos en elementos de React, se maneja muy similar al manejo de eventos con HTML y VanillaJS, con algunas pequeñas diferencias:
- Los eventos de React se nombran usando [camelCase](https://es.wikipedia.org/wiki/Camel_case), en vez de minúsculas.
- Con JSX pasas una función como el manejador del evento, en vez de un string.

Un ejemplo de lo descrito en los puntos anteriores, veamos el siguiente código:
```html
  <!-- En nuestro HTML -->
  <!-- ... -->
  <button onclick="activarLasers()">
    Activar lásers
  </button>
  <!-- ... -->
```
```js
// En nuestro JavaScript
// ...
function activarLasers() {
	alert("Lásers activados!");
}
// ...
```
El código anterior describe un evento de "click" hacia un botón al cual le damos un valor de un `string`, indicando el nombre de alguna función global de JavaScript definida a ejecutar.

Podemos tener el mismo comportamiento con un componente funcional:
```jsx
function ComponenteLasers() {
  const activarLasers = () => {
    alert("Lásers activados!");
  };
  return (
    <button onClick={activarLasers}>
      Activar lásers
    </button>
  );
}
```
O un componente clase:
```jsx
class ComponenteLasers extends React.Component {
  activarLasers() {
    alert("Lásers activados!");
  }

  render() {
    return (
      <button onClick={() => this.activarLasers()}>
        Activar lásers
      </button>
    );
  }
}
```

Los puntos anteriores para transformar un evento de un elemento HTML del DOM a un elemento React aplica para cualquier evento. En los ejemplos anteriores podemos visualizar un ejemplo para el evento `onclick`, pero si quisiéramos aplicarlo para otro evento como el cambio de un `input` o un `select`, aplicarían las mismas reglas:
```html
<select onchange="myFunction()">
<!-- ... -->
</select>
```
```jsx
<select onChange={myFunction}>
// ...
</select>
```

## Ejercicio
Vamos a hacer un ejercicio rápido acerca de lo aprendido hasta ahora, intenta realizar un componente que contenga simplemente un botón, que al darle click, debemos cambiar el color de fondo de nuestra página o `body` a un color completamente aleatorio.
[Spoiler de la solución](./01-eventos.jsx)

---
### [Saber más](https://es.reactjs.org/docs/handling-events.html)
Ir al tema siguiente: [4 Listas y llaves](./../04-lists-and-keys)
