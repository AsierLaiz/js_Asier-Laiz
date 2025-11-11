window.onload = function() {
  const usuario = document.getElementById("usuario");
  const password = document.getElementById("password");
  const boton = document.getElementById("meterPassword");

  usuario.onblur = function() {
    if (usuario.value.length < 7 || usuario.value.length > 15) {
      alert("El usuario debe tener entre 7 y 15 caracteres.");
    }
  };

  password.onfocus = function() {
    password.value = "";
  };

  password.onblur = function() {
    const tieneLetra = /[a-zA-Z]/.test(password.value);
    const tieneNumero = /[0-9]/.test(password.value);
    if (!tieneLetra || !tieneNumero) {
      alert("La contraseña debe contener al menos una letra y un número.");
    }
  };

  let aviso = setTimeout(() => {
    alert("¡Corre, mete ya el password!");
  }, 10000);

  boton.onclick = function() {
    clearTimeout(aviso);
  };
};