Checkpoint 15 

**1. ¿Qué es Axios?**

**Axios** es una biblioteca de JavaScript que permite hacer solicitudes HTTP desde el navegador o Node.js. Se utiliza principalmente para interactuar con APIs, lo que te permite enviar y recibir datos del servidor sin necesidad de recargar la página. Axios es una alternativa popular a fetch por su simplicidad y sus características adicionales, como la interceptación de solicitudes, el manejo de errores y la configuración de cabeceras predeterminadas.

**Beneficios de Axios:**

- **Fácil de usar:** Su sintaxis es simple y clara.
- **Soporte para promesas:** Utiliza promesas nativas, lo que facilita el manejo de operaciones asíncronas.
- **Configuración automática de cabeceras:** Permite configurar fácilmente las cabeceras que se envían en las solicitudes.
- **Intercepción de solicitudes/respuestas:** Puedes modificar o manejar solicitudes y respuestas antes de que se completen.
- **Manejo automático de JSON:** Serializa y deserializa JSON automáticamente.
- **Soporte para Cancelaciones:** Puedes cancelar solicitudes fácilmente si ya no son necesarias.

**Cuándo usar Axios:**

- **Integración con APIs REST:** Ideal cuando necesitas interactuar con un backend que sigue el modelo REST.
- **Operaciones CRUD (Crear, Leer, Actualizar, Eliminar):** Facilita la comunicación con APIs para realizar estas operaciones.
- **Solicitudes con configuración compleja:** Como la necesidad de configurar múltiples cabeceras o interceptar solicitudes.

**Ejemplo de Uso:**

import axios from 'axios';

// Haciendo una solicitud GET

axios.get('https://jsonplaceholder.typicode.com/posts')

.then(response => {

`    `console.log(response.data);

`  `})

.catch(error => {

`    `console.error('Error fetching data:', error);

`  `});

// Haciendo una solicitud POST

axios.post('https://jsonplaceholder.typicode.com/posts', {

`  `title: 'Nuevo Post',

`  `body: 'Este es el contenido del post',

`  `userId: 1

})

.then(response => {

`  `console.log('Post creado:', response.data);

})

.catch(error => {

`  `console.error('Error creando el post:', error);

});

**Mejores Prácticas con Axios:**

- **Usar instancias de Axios:** Permiten configurar una instancia con una URL base y cabeceras comunes.

  const api = axios.create({

  `  `baseURL: 'https://jsonplaceholder.typicode.com',

  `  `timeout: 1000,

  `  `headers: { 'X-Custom-Header': 'foobar' }

  });

- **Intercepciones:** Utilizar interceptores para manejar errores de forma centralizada o para añadir lógica antes de que una solicitud sea enviada.

  javascript

  Copiar código

  axios.interceptors.response.use(response => {

  `  `return response;

  }, error => {

  `  `if (error.response.status === 401) {

  `    `// Manejar error de autenticación

  `  `}

  `  `return Promise.reject(error);

  });

**Errores Comunes y Cómo Resolverlos:**

- **Error CORS:** Asegúrate de que el servidor esté configurado para permitir solicitudes desde tu origen.
- **Errores en el manejo de promesas:** Siempre usa .catch() para manejar errores en las solicitudes.
- **Configurar mal las cabeceras:** Verifica que las cabeceras se configuren correctamente, especialmente Content-Type.

**Casos de Uso Avanzados:**

- **Manejo de Subidas de Archivos:** Puedes utilizar axios para subir archivos al servidor con soporte para mostrar el progreso de la carga.

  const formData = new FormData();

  formData.append('file', file);

  axios.post('/upload', formData, {

  `  `headers: { 'Content-Type': 'multipart/form-data' },

  `  `onUploadProgress: progressEvent => {

  `    `console.log(`Progress: ${(progressEvent.loaded / progressEvent.total) \* 100}%`);

  `  `}

  });

- **Cancelación de Solicitudes:** Si una solicitud ya no es necesaria (por ejemplo, al cambiar de página), puedes cancelarla.

  const source = axios.CancelToken.source();

  axios.get('/user/12345', {

  `  `cancelToken: source.token

  }).catch(thrown => {

  `  `if (axios.isCancel(thrown)) {

  `    `console.log('Request canceled', thrown.message);

  `  `}

  });

  source.cancel('Operation canceled by the user.');

-----
**2. ¿Por qué es útil React DevTools?**

**React DevTools** es una extensión para navegadores que permite inspeccionar la estructura de componentes de una aplicación React. Esta herramienta es esencial para desarrolladores que trabajan con React porque facilita el debugging y la optimización de aplicaciones complejas.

**Beneficios de React DevTools:**

- **Inspección de componentes:** Puedes ver la jerarquía de componentes, sus propiedades (props) y su estado (state) en tiempo real.
- **Edición en vivo:** Permite modificar el estado o las props de un componente directamente desde la herramienta para probar cambios sin actualizar la página.
- **Depuración eficiente:** Identifica fácilmente los cuellos de botella en el renderizado o problemas de rendimiento.
- **Visualización del tiempo de renderizado:** Ayuda a identificar qué componentes se están renderizando innecesariamente.

**Cuándo usar React DevTools:**

- **Debugging:** Cuando necesitas solucionar problemas en la interacción o renderizado de componentes.
- **Optimización:** Para analizar y mejorar el rendimiento de tu aplicación React.
- **Desarrollo:** Útil durante la construcción de la UI para verificar que los datos fluyen correctamente entre los componentes.

**Ejemplo de Uso:**

En React DevTools, puedes seleccionar un componente en la jerarquía y observar sus propiedades y estado:

function Counter() {

`  `const [count, setCount] = React.useState(0);

`  `return (

`    `<div>

`      `<p>Count: {count}</p>

`      `<button onClick={() => setCount(count + 1)}>Increment</button>

`    `</div>

`  `);

}

Usando React DevTools, podrías:

- Inspeccionar el componente Counter.
- Ver el valor del estado count.
- Modificar el valor del estado directamente desde la herramienta para ver cómo cambia la UI en tiempo real.

**Mejores Prácticas con React DevTools:**

- **Usa las etiquetas de renderizado:** Activa la opción "Highlight updates when components render" para ver qué partes de tu UI se actualizan con cada cambio de estado o props.
- **Profundiza en las causas de re-renderizados:** Examina las dependencias de los efectos (useEffect) para entender mejor por qué un componente se re-renderiza.

**Errores Comunes y Cómo Resolverlos:**

- **Renderizados innecesarios:** Si ves que un componente se re-renderiza constantemente, revisa las dependencias de los hooks y asegúrate de que solo se actualicen cuando sea necesario.
- **Falta de optimización:** Si tienes problemas de rendimiento, considera utilizar React.memo o useMemo para evitar renders innecesarios.

**Casos de Uso Avanzados:**

- **Profiling de rendimiento:** Utiliza la pestaña "Profiler" para grabar interacciones y analizar cuánto tiempo tarda cada componente en renderizarse.
- **Debugging de aplicaciones grandes:** En aplicaciones con muchas dependencias y jerarquías complejas de componentes, React DevTools puede ayudarte a aislar y corregir problemas más rápidamente.

**Configuración y Personalización:**

React DevTools es altamente configurable. Puedes activar o desactivar características como el "Component Filters" para filtrar componentes específicos y hacer el debugging más eficiente.

-----
**3. ¿Qué es un Event Listener?**

Un **event listener** es una función en JavaScript que espera y responde a eventos específicos en el DOM, como clics de ratón, movimientos de teclado, o la carga de la página. Los event listeners permiten a los desarrolladores crear interacciones dinámicas en una página web.

**Beneficios de los Event Listeners:**

- **Interactividad:** Hacen que las páginas web sean dinámicas y responsivas.
- **Modularidad:** Permiten manejar eventos específicos de forma separada y ordenada.
- **Facilidad de uso:** Son fáciles de implementar y muy flexibles.

**Ejemplo de Uso:**

// Añadiendo un event listener para un botón

const button = document.getElementById('myButton');

button.addEventListener('click', function() {

`  `alert('Button was clicked!');

});

// Event listener para el movimiento del ratón

document.addEventListener('mousemove', function(event) {

`  `console.log(`Mouse moved to (${event.clientX}, ${event.clientY})`);

});

En el primer ejemplo, un event listener detecta cuando se hace clic en un botón y muestra una alerta. En el segundo, detecta el movimiento del ratón y registra la posición actual.

**Tipos de Eventos y Ejemplos:**

- **Eventos de ratón (mouse events):** click, dblclick, mousemove, mouseover
- **Eventos de teclado (keyboard events):** keydown, keyup, keypress
- **Eventos de formulario:** submit, change, input
- **Eventos de ventana:** load, resize, scroll

**Ejemplo avanzado:**

// Manejo de múltiples tipos de eventos en un solo listener

function handleEvent(event) {

`  `switch(event.type) {

`    `case 'click':

`      `console.log('Element clicked');

`      `break;

`    `case 'mouseover':

`      `console.log

