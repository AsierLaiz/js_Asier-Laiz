document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("cargarDatos");
  const resultado = document.getElementById("resultado");

  boton.addEventListener("click", () => {
    fetch("datos.json")
      .then(respuesta => {
        if (!respuesta.ok) {
          throw new Error("Error al cargar el archivo JSON");
        }
        return respuesta.json();
      })
      .then(data => {
        mostrarUsuarios(data);
      })
      .catch(error => {
        resultado.innerHTML = `<p style="color:red;">${error.message}</p>`;
      });
  });

  function mostrarUsuarios(usuarios) {
    resultado.innerHTML = ""; 
    usuarios.forEach(usuario => {
      const div = document.createElement("div");
      div.style.border = "1px solid #ccc";
      div.style.padding = "10px";
      div.style.marginBottom = "10px";
      div.style.borderRadius = "8px";
      div.innerHTML = `
        <strong>Nombre:</strong> ${usuario.nombre}<br>
        <strong>Edad:</strong> ${usuario.edad}<br>
        <strong>Email:</strong> ${usuario.email}
      `;
      resultado.appendChild(div);
    });
  }
});
