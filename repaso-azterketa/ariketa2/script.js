        function procesarNotas() {
            let tabla = document.getElementById("tablaNotas");
            let notak = [];

            for (let i = 1; i <= 3; i++) {
                let fila = tabla.rows[i].cells;
                notak[i-1] = [];
                for (let j = 1; j <= 4; j++) {
                    notak[i-1][j-1] = parseFloat(fila[j].firstElementChild.value) || 0;
                }
            }

            let batezBestekoMax = 0;
            let ikasleBatezBestekoMax = 0;
            for (let i = 0; i < 3; i++) {
                let suma = notak[i].reduce((a,b)=>a+b,0);
                let batezBesteko = suma/4;
                if (batezBesteko > batezBestekoMax) {
                    batezBestekoMax = batezBesteko;
                    ikasleBatezBestekoMax = i;
                }
            }

            let notaMax = -Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 4; j++) {
                    if (notak[i][j] > notaMax) notaMax = notak[i][j];
                }
            }

            let ikasleInd = parseInt(prompt("Sartu ikasle zenbakia (1-3) nota onena ikusteko:"))-1;
            let notaMaxIkasle = -Infinity;
            let irakasgaiaMaxIkasle = -1;
            for (let j = 0; j < 4; j++) {
                if (notak[ikasleInd][j] > notaMaxIkasle) {
                    notaMaxIkasle = notak[ikasleInd][j];
                    irakasgaiaMaxIkasle = j;
                }
            }

            let irakasgaiaInd = parseInt(prompt("Sartu irakasgaia zenbakia (1-4) nota onena ikusteko:"))-1;
            let notaMaxIrakasgaia = -Infinity;
            let ikasleMaxIrakasgaia = -1;
            for (let i = 0; i < 3; i++) {
                if (notak[i][irakasgaiaInd] > notaMaxIrakasgaia) {
                    notaMaxIrakasgaia = notak[i][irakasgaiaInd];
                    ikasleMaxIrakasgaia = i;
                }
            }

            document.getElementById("resultado").innerHTML = `
                Batez besteko nota onena duen ikaslea: Ikasle ${ikasleBatezBestekoMax+1} (${batezBestekoMax.toFixed(2)})<br>
                Nota guztien notarik altuena: ${notaMax}<br>
                Ikasle ${ikasleInd+1} nota onena: ${notaMaxIkasle} Irakasgaia ${irakasgaiaMaxIkasle+1}<br>
                Irakasgaia ${irakasgaiaInd+1} nota onena: ${notaMaxIrakasgaia} Ikaslea ${ikasleMaxIrakasgaia+1}
            `;
        }