function datu_per(nan_in, izen_in, telf_in, adin_in) {
  this.nan = nan_in;
  this.izena = izen_in;
  this.telefono = telf_in;
  this.adina = adin_in;
}

const agenda = [];

agenda[0] = new datu_per("11111111A", "Kepa", "677234523", 25);
agenda[1] = new datu_per("22222222B", "Irati", "612345678", 30);
agenda[2] = new datu_per("33333333C", "Jon", "688112233", 42);
agenda[3] = new datu_per("44444444D", "Ane", "699887766", 19);


function mostrarAgenda() {
  const tabla = document.querySelector("#tablaAgenda tbody");
  tabla.innerHTML = ""; 

  agenda.forEach((persona) => {
    const fila = document.createElement("tr");

    const celdaNan = document.createElement("td");
    celdaNan.textContent = persona.nan;
    fila.appendChild(celdaNan);

    const celdaIzena = document.createElement("td");
    celdaIzena.textContent = persona.izena;
    fila.appendChild(celdaIzena);

    const celdaTelefono = document.createElement("td");
    celdaTelefono.textContent = persona.telefono;
    fila.appendChild(celdaTelefono);

    const celdaAdina = document.createElement("td");
    celdaAdina.textContent = persona.adina;
    fila.appendChild(celdaAdina);

    tabla.appendChild(fila);
  });
}

document.addEventListener("DOMContentLoaded", mostrarAgenda);
