function prikaziPoraka() {
  console.log("Dobrodojde Vo JavaScript");
}

/*prikaziPoraka();
prikaziPoraka();
prikaziPoraka();
prikaziPoraka();*/

/*function pozdravi(ime) {
  console.log(`Zdravo, ${ime}`);
}

pozdravi("Stojce");
pozdravi("Mirka");

function info(ime, grad) {
  console.log(`${ime} e od ${grad}`)
}

info("Trajce", "Kumanovo");
info("David", "Stip");

function soberi(a, b){
  return a + b;
}

const zbir = soberi(2, 3);
const zbir1 = soberi(5, 3);
console.log(zbir, zbir1);
console.log(soberi(10, 7));

function samoPechati(a, b) {
  console.log(a + b);
}

const rezultat = samoPechati(10, 5);
console.log(rezultat);

//1.f
function soberiDeklaracija(a, b) {
  return a + b;
}
console.log(soberiDeklaracija(2, 3));

//2.f
const soberiIzraz = function (a, b) {
  return a + b;
}

console.log(soberiIzraz(10, 20));

//3.f
const soberiArrow = (a, b) => {
  return a + b;
}

const primerArrow = (a, b) => a - b;

console.log(soberiArrow(2, 3));
console.log(primerArrow(10, 5));*/

/////////////////////////////////////////

/*function scopeDeclaration(a, b) {
  return a + b;
}

const primerDeclaration = scopeDeclaration(2, 10);
console.log(primerDeclaration);

const testFunkcija = function (a, b) {
  return a + b
};
console.log(testFunkcija(10, 20)); 

const napraviPozdrav = function (ime = "Zorka") {
  return `Zdravo, ${ime}`;
}
console.log(napraviPozdrav());
console.log(napraviPozdrav("Mirko"));
console.log(napraviPozdrav(undefined));
console.log(napraviPozdrav(null));
console.log(napraviPozdrav(""));

function proveriPoeni(poeni) {
  if(poeni < 0 || poeni > 100) {
    return "Nevalidni poeni"
  }
  if(poeni >= 60) {
    return "Polozi"
  }
  return "Ne polozi"
}

console.log(proveriPoeni(80));
console.log(proveriPoeni(40));
console.log(proveriPoeni(110));

const ime = "Ana";

function lokalnaPoraka() {
  const ime = "Elena";
  const tekst = `Zdravo, ${ime}`;
  return tekst;
}

console.log(lokalnaPoraka());

function zbirNaNiza(broevi) {
  let vkupno = 0;
  for (let i = 0; i < broevi.length; i++) {
   vkupno += broevi[i];
  }
  return vkupno;
}
console.log(zbirNaNiza([10, 20, 30]));
console.log(zbirNaNiza([30, 20, 30]));*/

const iznosi = [40, 80, 120];
const vkupno = iznosi.reduce((zbir, iznos) => {
  return zbir + iznos;
}, 0);
console.log(vkupno);

function pozdrav() {
  console.log("Zdravo")
};
function pozdrav1() {
  console.log("Zdravo1")
};
function izvrshi(callback) {
  callback();
}
izvrshi(pozdrav);
izvrshi(pozdrav1);

/*<button id="presmetaj">Presmetaj</button>

addEventListener(kalkuliraj(a, b))*/

function ceZaKolicina(cena, kolicina) {
  return cena * kolicina;
}
function vkupnoZaDostava(cena, kolicina, dostava = 100){
  return ceZaKolicina(cena, kolicina) + dostava;
}
console.log(vkupnoZaDostava(200, 3));
console.log(vkupnoZaDostava(500, 3, 300));