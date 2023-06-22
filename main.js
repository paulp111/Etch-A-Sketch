  'use strict'
  
  let zeichenfeld = document.getElementById('zeichenfeld');
  let loeschenButton = document.getElementById('loeschen-button');
  let groesseButton = document.getElementById('groesse-button');

  let farben = ['red', 'green', 'blue', 'yellow'];

  rasterFeld(16);

  function rasterFeld(groesse) {
    zeichenfeld.innerHTML = '';

    let gridTemplateColumns = '';
    for (let i = 0; i < groesse; i++) {
      gridTemplateColumns += "1fr ";
    }
    zeichenfeld.style.gridTemplateColumns = gridTemplateColumns;

    for (let i = 0; i < groesse * groesse; i++) {
      let rasterPunkt = document.createElement('div');
      rasterPunkt.classList.add('feld');
      zeichenfeld.appendChild(rasterPunkt);

      rasterPunkt.addEventListener('mouseover', function() {
        rasterPunkt.className = 'feld ' + farben[Math.floor(Math.random() * farben.length)];
      });
    }
  }

  loeschenButton.onclick = function() {
    let alleRasterPunkte = document.querySelectorAll('.feld');
    alleRasterPunkte.forEach(function(punkt) {
      punkt.className = 'feld';
    });
  };

  groesseButton.onclick = function() {
    let neueGroesse = prompt('Bitte geben Sie die gewünschte Gittergröße (bis 100) ein:');
    if (zahlEingabe(neueGroesse)) {
      if (parseInt(neueGroesse) <= 100) {
        rasterFeld(parseInt(neueGroesse));
      } else {
        alert("Bitte geben Sie eine Zahl bis 100 ein.");
      }
    } else {
      alert("Bitte geben Sie eine Nummer ein.");
    }
  };

  function zahlEingabe(string) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] < '0' || string[i] > '9') {
        return false;
      }
    }
    return true;
  }

