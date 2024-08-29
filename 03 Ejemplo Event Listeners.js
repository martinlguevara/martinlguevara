// Añadiendo un event listener para un botón
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  alert('Button was clicked!');
});

// Event listener para el movimiento del ratón
document.addEventListener('mousemove', function(event) {
  console.log(`Mouse moved to (${event.clientX}, ${event.clientY})`);
});


// En el primer ejemplo, un event listener detecta cuando se hace clic en un botón y muestra una alerta. En el segundo, detecta el movimiento del ratón y registra la posición actual.

