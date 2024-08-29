// Ejemplo Axios

import axios from 'axios';

// Haciendo una solicitud GET
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Haciendo una solicitud POST
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'Nuevo Post',
  body: 'Este es el contenido del post',
  userId: 1
})
.then(response => {
  console.log('Post creado:', response.data);
})
.catch(error => {
  console.error('Error creando el post:', error);
});
