const tezina = 250;
if (tezina > 500) {
  console.log("Liftot e preoptovaren");
} else {
  console.log("liftot moze da trgne");
}

//

const cenaA = 100;
const cenaB = 80;
if (cenaA < cenaB) {
  console.log("prodavnicata A e poevtina");
} else if (cenaB < cenaA) {
  console.log("prodavnicata B e poevtina");
} else {
  console.log("Cenite se isti");
}

//

const casovi = 4;
if (casovi <= 1) {
  console.log("40 denari");
} else if (casovi <= 3) {
  console.log("100 denari");
} else {
  console.log("150 denari");
}

//

const imaSlobodenVelosiped = true;
const imaKaciga = false;
if (imaSlobodenVelosiped && imaKaciga) {
  console.log("moze da iznajmis");
} else {
  console.log("nemoze da iznajmis");
}

//

const statusNaNaracka = "dostavena";
switch (statusNaNaracka) {
  case "nova":
    console.log("narackata e primena")
    break;
  case "ispratena":
    console.log("pratkata e na pat")
    break;
  case "dostavena":
    console.log("pratkata e dostavena")
    break;
    default:
      console.log("nepoznat status");
}

//

const mesec = 7;
switch (mesec) {
  case 12:
  case 1:
  case 2:
    console.log("zimski meseci")
    break;
  case 3:
  case 4:
  case 5:
    console.log("proletni meseci")
    break;
  case 6:
  case 7:
  case 8:
    console.log("letni meseci");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Esenski meseci")
    break;
    default:
      console.log("Nevaliden mesec");
}