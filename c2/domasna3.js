function napraviNaslov(tekst, znak) {
  return `${tekst}${znak}`;
}
console.log(napraviNaslov("bravo", "!"));

/////////////
function cenaNaBilet(godini) {
  if (godini < 0) {
    return "Nevalidna vozrast";
  }
  if (godini <= 7) {
    return 0;
  }
  else if (godini <= 18) {
    return 100;
  }
  else {
    return 200;
  }
}
console.log(cenaNaBilet(17));

//////////////////
const voFarenhajt = (celsius) => (celsius * 9) / 5 + 32;
console.log(voFarenhajt(15));

//////////////////
function korisnickoIme(ime, prezime) {
  const cistoIme = ime.trim().toLowerCase();
  const cistoPrezime = prezime.trim().toLowerCase();
  return `${cistoIme}.${cistoPrezime}`;
}

console.log(korisnickoIme("   IVAN   ", "   PeTrOv    "));

////////////////////
function najdolgZbor(zborovi) {
  if (zborovi.length === 0) {
    return null;
  }
  let najdolg = zborovi[0];
  for (let i = 1; i < zborovi.length; i++) {
    if (zborovi[i].length > najdolg.length){
      najdolg = zborovi[i];
    }
  }
  return najdolg;
}
console.log(najdolgZbor(["lav", "ore", "gul"]));
console.log(najdolgZbor(["sed", "dva", "pet"]));