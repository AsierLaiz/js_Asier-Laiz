fetch("pertsonak.json.txt")
  .then(response => response.json())
  .then(data => {
    const results = data.results;

    const denmarkIzenaUl = document.getElementById("denmarkIzena");
    const denmarkIzena = results
      .filter(p => p.location.country === "Denmark")
      .map(p => `${p.name.first} ${p.name.last}`);

    denmarkIzena.forEach(izen => {
      const li = document.createElement("li");
      li.textContent = izen;
      denmarkIzenaUl.appendChild(li);
    });

    const kopurua = {};
    results.forEach(p => {
      const herrialdea = p.location.country;
      if (!kopurua[herrialdea]) kopurua[herrialdea] = 0;
      kopurua[herrialdea]++;
    });

    const tbody = document.querySelector("#herrialdeKopuru tbody");
    Object.entries(kopurua).forEach(([herrialdea, kop]) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${herrialdea}</td><td>${kop}</td>`;
      tbody.appendChild(tr);
    });

  })
  .catch(err => {
    console.error("Errorea JSON fitxategia irakurtzean:", err);
  });
