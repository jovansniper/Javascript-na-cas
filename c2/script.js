//const test = "Hellow world";
//const test1 = "Semos";
//const test2 = "JavaScript";
//console.log(test, test1, test2);

//let primer = "semos";
//console.log(primer);
//primer = "Javascript";
//console.log(primer);
const strig = "string";
const number = 5;
const boolean = true;

console.log(18 > 18);
console.log(5 === "5");
console.log(5 == "5");
console.log( 5 !== 3);

const vozrastZaVles = 20;
const dozvolenVlez = 20;
const osoba1 = 17;
console.log(osoba1 >= dozvolenVlez);
const osoba2 = 23;
if(osoba1 >= dozvolenVlez) {
  console.log("Dozvolen vlez");
} else {
  console.log("Ne e dozvolen vlez");
}

const pariVoNovcanik = 60;
const cenaNaSok = 60;

if (pariVoNovcanik >= cenaNaSok) {
  console.log("Mozeme da kupime sok");
} else {
  console.log("Nemas dovolno pari");
}

const brojZaProverka = 8;
if(brojZaProverka % 2 == 0) {
  console.log("paren broj")
} else {
  console.log("Neparen broj");
}

const temperatura = 25;
if(temperatura >= 30) {
  console.log("Toplo e")
} else {
  console.log("Ne e toplo");
}

//

const password = "jabva"
if(password === "javascript"){
  console.log("Tocen password")}
else {
  console.log("Ne e tocen")
};

//

const numbertocheck = 80
if(numbertocheck % 2 == 0) {
  console.log("Paren broj")
}else{
  console.log("Ne paren broj")};

  const poeni = 82;

  if(poeni >= 90) {
    console.log("Odlicen uspeh");
  } else if (poeni >= 70) {
    console.log("Mnogu dobar rezultat");
  } else if (poeni >= 60) {
    console.log("Polozeno");
  } else {
    console.log("Nepolozeno");
  }

  //

  const vozrastZaVozacka = 22;
  const imaVozacka = true;

  if(vozrastZaVozacka >= 18 && imaVozacka){
    console.log("Moze da vozi");
  }

  const eSabota = false;
  const eNedela = true;
  if(eSabota || eNedela) {
    console.log("Vikend e");
  }

const eNajaven = true;
if(!eNajaven) {
  console.log("Najavi se");
}

const broj = -3;
if (broj > 0) {
  console.log("pozitiven");
} else if (broj < 0) {
  console.log("negativen");
}else {
  console.log("nula");
}

//

const naracka = 1200;
const eClen = true;
if (naracka >= 1000 && eClen === true) {
  console.log("Ima besplatna dostava");
}else {
  console.log("Nema besplatna dostava");
}

//

const eStudent = true;
const imaKupon = false;
if (eStudent === true || imaKupon === true) {
  console.log("Ima popust");
} else {
  console.log("Nema popust");
}

//

const izborNaPijalok = "voda"
switch(izborNaPijalok) {
  case "kafe":
    console.log("izbra kafe: 100 den.");
    break;
  case "caj":
    console.log("izbra caj: 70 den.");
    break;
  case "voda":
    console.log("izbra voda: 50 den.");
    break;
  default:
    console.log("Nepoznat pijalak");
}

//

const redenBrojNaDen = 2;

switch(redenBrojNaDen) {
  case 6:
  case 7:
    console.log("Vikend")
    break;
  default:
    console.log("Raboten den");
}

//

const semafor = "crveno"

switch(semafor) {
  case "crveno":
    console.log("zastani")
    break;
  case "zolto":
    console.log("podgotvi se")
    break;
  case "zeleno":
    console.log("vozi")
    break;
}

const izbor = 1;
switch (izbor) {
  case 1:
    console.log("dodavanje")
    break;
  case 2:
    console.log("prikazuvanje")
    break;
  case 3:
    console.log("izlez")
    break;
    default: 
    console.log("pogresen izbor, izberete 1, 2 ili 3");
}

const student = {
  ime: "Ana",
  vozrast: 20,
  nasoka: "JavaScript",
  eAktiven: true,
};

console.log(student);
console.log(student.ime);
console.log(student ["vozrast"]);

student.vozrast = 21;
student.grad = "Skopje";
student.prosek = 9;
console.log(student);

//

const mojaKniga = {
  naslov: "Gospodar na bavarija",
  avtor: "D. tomas miller",
  brojNaStranici: 283,
  eProcitana: false
}
console.log(mojaKniga.naslov, mojaKniga.avtor);
mojaKniga.eProcitana = true;