const number = parseInt(process.argv[2]);

if (isNaN(number)) {
    console.log("Inserisci un numero valido.");
  } else {
    const pariDispari = (item) => ((item % 2) === 0) ? 'Pari' : 'Dispari';
    console.log(pariDispari(number));
  }