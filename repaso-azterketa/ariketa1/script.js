document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("erregistroa");
  const mezua = document.getElementById("mezua");
  const mezuaTestua = document.getElementById("mezuaTestua");
  const okBotoia = document.getElementById("okBotoia");
  const zuzendubtn = document.getElementById("zuzenduBotoia");

  const izena = document.getElementById("izena");
  const abizena1 = document.getElementById("abizena1");
  const abizena2 = document.getElementById("abizena2");
  const jaioteguna = document.getElementById("jaioteguna");
  const telefonoa = document.getElementById("telefonoa");
  const email = document.getElementById("email");

  const soloLetras = /^[A-Za-zÀ-ÿ\s]+$/;
  const formatoFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telefonoValido = /^\d{9}$/;

  // === Validación al perder foco ===
  telefonoa.addEventListener("blur", () => {
    if (telefonoa.value !== "" && !telefonoValido.test(telefonoa.value)) {
      telefonoa.style.backgroundColor = "#f8d7da";
    } else {
      telefonoa.style.backgroundColor = "";
    }
  });

  email.addEventListener("blur", () => {
    if (email.value.trim() !== "" && !emailValido.test(email.value)) {
      email.style.backgroundColor = "#f8d7da";
    } else {
      email.style.backgroundColor = "";
    }
  });

  // === Validación principal al enviar ===
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let akatsak = [];

    // --- Izena (obligatorio)
    if (izena.value.trim() === "" || !soloLetras.test(izena.value.trim())) {
      akatsak.push("Izena");
      izena.style.backgroundColor = "#f8d7da";
    } else izena.style.backgroundColor = "";

    // --- Lehen abizena (obligatorio)
    if (abizena1.value.trim() === "" || !soloLetras.test(abizena1.value.trim())) {
      akatsak.push("Lehen abizena");
      abizena1.style.backgroundColor = "#f8d7da";
    } else abizena1.style.backgroundColor = "";

    // --- Bigarren abizena (opcional)
    if (abizena2.value.trim() !== "" && !soloLetras.test(abizena2.value.trim())) {
      akatsak.push("Bigarren abizena");
      abizena2.style.backgroundColor = "#f8d7da";
    } else abizena2.style.backgroundColor = "";

    // --- Jaioteguna (obligatorio, formato DD/MM/YYYY y fecha válida)
    if (!formatoFecha.test(jaioteguna.value.trim())) {
      akatsak.push("Jaioteguna (formato okerra)");
      jaioteguna.style.backgroundColor = "#f8d7da";
    } else {
      const [eguna, hilabetea, urtea] = jaioteguna.value.split("/").map(Number);
      const data = new Date(urtea, hilabetea - 1, eguna);
      const gaur = new Date();
      if (isNaN(data.getTime()) || data >= gaur) {
        akatsak.push("Jaioteguna (gaur baino lehenago izan behar du)");
        jaioteguna.style.backgroundColor = "#f8d7da";
      } else jaioteguna.style.backgroundColor = "";
    }

    // --- Telefonoa (opcional)
    if (telefonoa.value.trim() !== "" && !telefonoValido.test(telefonoa.value.trim())) {
      akatsak.push("Telefonoa");
      telefonoa.style.backgroundColor = "#f8d7da";
    } else telefonoa.style.backgroundColor = "";

    // --- Emaila (obligatorio)
    if (email.value.trim() === "" || !emailValido.test(email.value.trim())) {
      akatsak.push("Emaila");
      email.style.backgroundColor = "#f8d7da";
    } else email.style.backgroundColor = "";

    // === Mostrar cuadro de diálogo ===
    if (akatsak.length === 0) {
      // Todo correcto
      mezuaTestua.textContent = "Formularioa behar bezala bete da.";
      okBotoia.style.display = "inline-block";
      zuzendubtn.style.display = "none";
    } else {
      // Hay errores
      mezuaTestua.innerHTML =
        "Akatsak aurkitu dira eremu hauetan:<br> - " + akatsak.join("<br> - ");
      okBotoia.style.display = "none";
      zuzendubtn.style.display = "inline-block";
    }

    mezua.style.display = "block";
  });

  // === Botones del cuadro ===
  okBotoia.addEventListener("click", () => {
    formulario.reset();
    [izena, abizena1, abizena2, jaioteguna, telefonoa, email].forEach((el) => {
      el.style.backgroundColor = "";
    });
    mezua.style.display = "none";
  });

  zuzendubtn.addEventListener("click", () => {
    mezua.style.display = "none";
    // No se limpia nada, mantiene valores con errores en rojo
  });
});
