import '../components/form.css'

export function Form() {
  // Crear un contenedor
  const formContainer = document.createElement('div');

  // Usar innerHTML para insertar el HTML del formulario directamente
  formContainer.innerHTML = `
      <form id="myForm" class="container">
      <div>
        <label for="name">Nombre:</label>
        <input id="name" name="name" placeholder="Agrega tu nombre" />
      </div>
      <div>
        <label for="lastName">Last name:</label>
        <input class="form-control" id="lastName" name="lastName" placeholder="Agrega tu Apellido" />
      </div>
      <div>
        <label for="age">Edad:</label>
        <input type="number" id="age" name="age" placeholder="Agrega tu edad" />
      </div>
      <div>
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" placeholder="Agrega tu Email"/>
      </div>
        <button type="submit">Enviar</button>
      </form>
    `;

  return formContainer;
}
