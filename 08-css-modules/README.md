# Tema 8: Módulos CSS
Tema anterior: [7 Hooks](./../07-hooks)
Tema siguiente: [9 Pruebas unitarias](./../09-unit-tests)

---
Acerca de los módulos CSS se denomina a la posibilidad de importar archivos CSS a nuestros componentes de React y la posibilidad de usar sus clases, utilizaremos un ejemplo básico de nuestra app.

Necesitaremos tener instalado en nuestra máquina la última versión estable o LTS de node en nuestra máquina, para hacerlo, hay que seguir los pasos [en la página de node](https://nodejs.org).

Una vez instalada debemos confirmar en nuestra `terminal` o `cmd` la instalación ejecutando los comandos:

```bash
node --version
npm --version
npx --version
```

Una vez verificada la instalación generaremos una app nueva con el comando create-react-app, por lo que ejecutaremos:

```bash
npx create-react-app mi-primer-app
```

este comando creará una app nueva de React con muchos archivos base que no nos detendremos mucho a explicar dado que podemos indagar mucho en ellos, por ahora, los archivos que nos interesarán son los archivos dentro de la carpeta `src` que comienzan con `index` y `App`.

Si visualizamos el archivo `index.js` nos está creando el render principal de nuestra aplicación de react que vimos anteriormente y este archivo está haciendo una importación de otro archivo js como componente de la siguiente forma:
```js
import App from './App';
```

De esta forma podemos incluir un archivo React en otro.

Sin embargo, podemos observar que también tenemos un import de un archivo css de la siguiente forma:
```js
import './index.css';
```

Esto lo que está causando es literalmente agregar a nuestro componente una hoja de estilo regular, similar a como lo haríamos directamente en HTML con una etiqueta `link`.

Además podemos hacer una especie de "encapsulamiento" de las hojas de estilos, por lo que haremos el siguiente cambio:

Crearemos un archivo nuevo llamado `App.module.css` dentro de la carpeta `src`.

Dentro de el archivo `App.js` eliminaremos todo el contenido del componente, dejando únicamente una etiqueta `p` con un saludo:
```jsx
import './App.css';

function App() {
  return (
    <p>Hola desde mi componente App!!!</p>
  );
}

export default App;
```

Dentro de `App.css` eliminaremos todo el contenido y dejaremos un estilo que modifique nustro `body`:
```css
body {
  background-color: aliceblue;
}
```

Dentro de `App.module.css` meteremos una clase que modifique un poco nuestro párrafo, con unos estilos de ejemplo:
```css
.pruebaTexto {
  color: teal;
  font-size: large;
  font-weight: bold;
}
```

Finalmente utilizaremos nuestra hoja de estilos "encapsulada" dentro de nuestro componente `App`:
```jsx
import './App.css';
import styles from './App.module.css';

function App() {
  return (
    <p className={styles.pruebaTexto}>Hola desde mi componente App!!!</p>
  );
}

export default App;
```

El ejemplo anterior se compilará y la clase se generará con un HASH único para que efectivamente, solo afecte a los componentes adecuados:
```html
<p class="App_pruebaTexto__R4eQA">Hola desde mi componente App!!!</p>
```

Notas para usar módulos CSS:
- Si usamos un import general de la forma "`import './App.css';`", los estilos ingresados aplicarán a todos los elementos de la página, independientemente de dónde se importe.
- Si usamos un import modularizado, debemos tener cuidado que siempre tenga la forma: `[name].module.css`.
- Al utilizar un "módulo" CSS, debemos hacer referencia a clases, preferentemente manteniendo los nombres de las clases en pascalCase, dónde una clase en CSS `.estaEsUnaClaseDePrueba` se importaría `import styles from './Button.module.css';` y se utilizaría de la siguiente forma: `<button className={styles.estaEsUnaClaseDePrueba}>Botón de prueba</button>`.


---
### [Saber más de Create React App](https://github.com/facebook/create-react-app).
### [Saber más de CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

Ir al tema siguiente: [9 Pruebas unitarias](./../09-unit-tests)

## Scripts posibles a ejecutar

### `npm install`
Instalar dependencias de nuestra aplicación basándonos en el archivo `package.json`

### `npm start`
Esto ejecutará la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para visualizarlo en tu navegador.

Esta página cuenta con un ServiceWorker para recargar cuando guardas tus cambios!\

### `npm test`
Ejecuta el trabajador de pruebas.\
Para saber más acerca de ejecutar pruebas visita [este link]((https://facebook.github.io/create-react-app/docs/running-tests))

### `npm run build`
Este comando ejecutará la construcción para producción de la app en una carpeta `build`, este comando integrará todos los archivos para el mejor desempeño.

# Documentos Relevantes

## Aprende más

Puedes aprender más en [la documentación de Create React App](https://facebook.github.io/create-react-app/docs/getting-started).
Para aprender react, se recomienda [la documentación oficial de React](https://reactjs.org/).

### Analizando el tamaño de nuestro empaquetado de producción

[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Creando una App Web Progresiva (PWA)

[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Configuración avanzada

[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Despliegues

[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
