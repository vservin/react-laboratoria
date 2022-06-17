# Tema 4: Listas y llaves
Tema anterior: [[3 Eventos](./../03-events)
Tema siguiente: [5 Renderizado condicional](./../05-conditional-rendering)

---
Hablemos un poco acerca de las listas en JavaScript puro y transformaciones que podemos hacer. Otro nombre que podemos referirnos a una lista es un arreglo o `Array`. Es necesario tener algunos conocimientos básicos de [métodos de Arreglos en ES6](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#m%C3%A9todos_de_instancia).

Imaginemos el siguiente ejemplo:
```js
const numeros = [1, 2, 3, 4, 5];
```

Si yo quisiera tener una lista o arreglo nuevo con el doble de cada uno de los valores anteriores, podría hacer un `map` de cada valor, teniendo:
```js
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map((num) => num * 2);
console.log(dobles);
// [2, 4, 6, 8, 10]
```
Estamos haciendo una operación que afecta a cada uno de los valores de forma iterada, es decir, tomamos cada uno de los números, le sacamos el doble y lo retornamos para crear una nueva lista dónde cada casilla es el doble del valor original de esa misma casila.

Como vimos en la sección 1, cualquier elemento React puede ser tratado como **expresión**, lo cual nos permite hacer operaciones `map` creando una lista de elementos React:
```jsx
const listaDeSuper = ["Leche", "Jamón", "Vino tinto", "Queso suizo", "Croutones"];
root.render(
  <div>
    <h2>Lo que tengo que comprar de super es:</h2>
    <ul>
      {listaDeSuper.map((item) => <li>{item}</li>)}
    </ul>
  </div>
);
```

Sin embargo, si ejecutamos [el código anterior](./01-listas.jsx) observaremos que funciona a la perfección, pero si abrimos la consola de desarrollador, podremos ver un error similar al siguiente: `Warning: Each child in a list should have a unique "key" prop.`, este error nos indica un error en el funcionamiento interno de React, el cual nos pide un **identificador** único por elemento de la lista, de esta forma, si algún elemento cambia, no hará un re-render de todos los elementos, únicamente actualizará el elemento que cambió, por lo que es necesario:

```jsx
function ListaDeSuper(props) {
  const { porComprar } = props
  const elementosDeLista = porComprar.map((item, index) => 
    <li key={`${index}${item}`}>{item}</li>
  );
  return <ul>{elementosDeLista}</ul>;
}

const miLista = ["Leche", "Jamón", "Vino tinto", "Queso suizo", "Croutones"];
root.render(
  <div>
    <h2>Lo que tengo que comprar de super es:</h2>
    <ListaDeSuper porComprar={miLista} />
  </div>
);
```

**Nota**: Es importante mencionar que la key debe identificar únicamente a los elementos de la lista entre sus hermanos, no requiere ser única en toda la aplicación o en todo un componente.

---
### [Saber más](https://es.reactjs.org/docs/lists-and-keys.html)
Ir al tema siguiente: [5 Renderizado condicional](./../05-conditional-rendering)
