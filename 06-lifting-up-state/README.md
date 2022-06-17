# Tema 6: Estado del componente
Tema anterior: [5 Renderizado condicional](./../05-conditional-rendering)
Tema siguiente: [7 Hooks](./../07-hooks)

---
Frecuentemente nos encontraremos con la necesidad de "cambiar" nuestro estado de la UI, esto se refiere a hacer una actualización a cómo estamos mostrando la información en la interfaz de usuario, puede ser que hagamos una llamada a una API, traer datos y mostrarlos al usuario, o realizar el conteo de segundos que han pasado desde que el usuario ha estado en nuestra aplicación, etc. Estos cambios puede que impliquen un cambio en los componentes, que eso fue lo visualizado en el tema anterior, renderizado condicional, sin embargo, es posible que queramos cambiar el estado de los componentes actuales, sin necesidad de destruirlos o reconstruirlos y que sean capaces de almacenar y reaccionar a dichos cambios.

En esta sección haremos una explicación práctica con una aplicación para hacer un cronómetro, los requerimientos que debemos tomar en cuenta son:
1. Debemos poder iniciar y detener el cronómetro a voluntad.
2. Si detenemos el cronómetro, debemos poder reiniciar el conteo a 0 o continuar con el conteo actual.
3. Nuestro cronómetro debe tener resolución de décimas de segundo.

Para el ejemplo de estado utilizaremos componentes de clase, dado que para mantener el estado en un componente funcional, éste utilizará un hook, que es tema de la siguiente sección.

### Solución
Vamos a pensar inicialmente en los componentes necesarios para nuestro cronómetro.
- Nuestro componente principal mantendrá el estado, dicho estado contendrá el tiempo en décimas de segundo
- Necesitaremos de un componente adicional que muestre estas décimas de segundo apropiadamente.
- Por último, necesitaremos un componente que contenga los controles que permitan iniciar, detener, reiniciar, etc. el tiempo.

Comencemos por el componente para mostrar nuestro reloj, dicho componente podemos hacerlo con lo visto anteriormente
```jsx
function FormateaNumero(numero) {
  return numero.toString().padStart(2, '0');
}

function MuestraCronometro(props) {
  const { tiempo } = props;
  const segundos = Math.floor(tiempo / 10);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  return <h1>
    {FormateaNumero(horas)}
    :
    {FormateaNumero(minutos % 60)}
    :
    {FormateaNumero(segundos % 60)}
    .
    {tiempo % 10}
  </h1>;
}
```
Nuestro componente llamado `MuestraCronometro`, tomará como prop únicamente el tiempo, dicho tiempo lo seccionaremos para poder mostrar de forma dividida horas, minutos, segundos y décimas, quedando en un formato del siguiente tipo: `hh:mm:ss.d`, se agregó una pequeña función denominada `FormateaNumero` cuyo único propósito es mantener el formato de las horas, minutos y segundos a 2 dígitos (mínimo para las horas) siempre.

Para el componente para mostrar los controles, tenemos varias posibles acciones con nuestro cronómetro, las cuales pueden ser:
- Activar el cronómetro.
- Detener el cronómetro.
- Reiniciar el cronómetro.

Pero depende del estado activo de nuestra aplicación, tomando en cuenta:
- Si el cronómetro está siendo ejecutado (está activo), debemos mostrar únicamente el botón "Detener" y el botón "Reiniciar".
- Si el cronómetro está detenido y está mostrando 00:00:00.0, debemos mostrar únicamente el botón de "Activar".
- Si el cronómetro está detenido y muestra un valor diferente de 0, debemos mostrar el botón "Reanudar" (que pudiera hacer lo mismo que activar) y el botón "Reiniciar".

Con los casos anteriores, podemos construir:

```jsx
function Controles(props) {
  const { tiempo, continuar, reiniciar, detener, activo } = props;
  if (activo) {
    return <div>
      <button onClick={detener}>Detener</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>;
  }
  if (tiempo === 0) {
    return <div>
      <button onClick={continuar}>Iniciar</button>
    </div>;
  }
  return <div>
    <button onClick={continuar}>Continuar</button>
    <button onClick={reiniciar}>Reiniciar</button>
  </div>;
}
```

El componente `Cronómetro`, debe contar con las acciones necesarias para activar, detener y reiniciar el cronómetro, así como guardar en el estado si el intervalo está activo o no actualmente, empecemos por asignar el estado inicial y mostrar los componentes creados anteriormente.

```jsx
class Cronometro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decimasDeSegundo: 0,
      intervalo: null,
    };
  }

  iniciaIntervalo() {}

  incrementaTiempo() {}

  detieneIntervalo() {}

  render() {
    return <div>
      <MuestraCronometro tiempo={this.state.decimasDeSegundo} />
      <Controles tiempo={this.state.decimasDeSegundo}
        continuar={this.iniciaIntervalo.bind(this)}
        reiniciar={this.reiniciaTiempo.bind(this)}
        detener={this.detieneIntervalo.bind(this)}
        activo={this.state.intervalo}
      />
    </div>;
  }
}
```

Iniciamos el estado de forma que el conteo de tiempo, guardado en la propiedad `decimasDeSegundo` comience en 0 y no tenemos un intervalo activo, por lo que podemos iniciar la propeidad `intervalo` como `null`.

El método `reiniciaTiempo` parece ser bastante sencillo, simplemente debería reiniciar el conteo a 0 de nuestras `decimasDeSegundo`:

```jsx
class Cronometro extends React.Component {
  //...
  reiniciaTiempo() {
    this.setState({ decimasDeSegundo: 0 });
  }
  //...
}
```

Nótese que para mostrar o utilizar el estado, pero no modificarlo, puedo acceder a él mediante `this.state` que ya está constituido dentro de un componente clase de React. Para modificar el state, es necesario mandar a llamar el método `this.setState`, este método puede tener 2 posibles parámetros:
- Una versión "parcial" del estado completo, es decir, una de las llaves del objeto completo, en el ejemplo de `reiniciaTiempo` únicamente necesitamos pasar la propiedad o propiedades que queremos modificar.
- Una función o "callback" del estado, este sería el caso cuando dependemos del estado actual para generar un nuevo estado, este sería el caso para un método que crearemos únicamente destinado para incrementar en 1 el tiempo.

```jsx
class Cronometro extends React.Component {
  //...
  incrementaTiempo() {
    this.setState((estado) => {
      return { decimasDeSegundo: estado.decimasDeSegundo + 1 };
    });
  }
  //...
}
```

En el caso anterior, el nuevo estado será tomado de lo que estemos retornando en la función dentro de `setState`. En el caso de `incrementaTiempo`, lo que está haciendo es incrementar el valor de `decimasDeSegundo` en 1 unidad.

Lo único que resta es implementar los métodos `iniciaIntervalo` y `detieneIntervalo` para iniciar y detener un intervalo de tiempo respectivamente:

```jsx
class Cronometro extends React.Component {
  //...
  iniciaIntervalo() {
    const tiempo = 100;
    if (!this.state.intervalo) {
      this.setState({ intervalo: setInterval(() => this.incrementaTiempo(), tiempo) });
    }
  }

  detieneIntervalo() {
    if (this.state.intervalo) {
      clearInterval(this.state.intervalo);
      this.setState({ intervalo: null });
    }
  }
  //...
}
```

En el método `iniciaIntervalo` estamos creando un intervalo que se repetirá cada 100 milisegundos o cada décima de segundo, este intervalo cada vez que se ejecute, mandará a llamar al método `incrementaTiempo`.

En el método `detieneIntervalo` estamos deteniendo la ejecución del intervalo de tiempo y posteriormente eliminando el intervalo de la memoria de nuestro estado.

Quedando como resultado una clase completa como la siguiente:

```jsx
class Cronometro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decimasDeSegundo: 0,
      intervalo: null,
    };
  }

  reiniciaTiempo() {
    this.setState({ decimasDeSegundo: 0 });
  }

  incrementaTiempo() {
    this.setState((estado) => {
      return { decimasDeSegundo: estado.decimasDeSegundo + 1 };
    });
  }

  iniciaIntervalo() {
    const tiempo = 100;
    if (!this.state.intervalo) {
      this.setState({ intervalo: setInterval(() => this.incrementaTiempo(), tiempo) });
    }
  }

  detieneIntervalo() {
    if (this.state.intervalo) {
      clearInterval(this.state.intervalo);
      this.setState({ intervalo: null });
    }
  }

  render() {
    return <div>
      <MuestraCronometro tiempo={this.state.decimasDeSegundo} />
      <Controles tiempo={this.state.decimasDeSegundo}
        continuar={this.iniciaIntervalo.bind(this)}
        reiniciar={this.reiniciaTiempo.bind(this)}
        detener={this.detieneIntervalo.bind(this)}
        activo={this.state.intervalo}
      />
    </div>;
  }
}
```


---
### [Saber más](https://es.reactjs.org/docs/lifting-state-up.html)
Ir al tema siguiente: [7 Hooks](./../07-hooks)
