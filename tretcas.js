const student = {
  ime: "Ana",
  vozrast: 20,
  nasoka: "JavaScript",
  eAktiven: true,
  pol: null,
};
console.log(student. ime);
console.log(student ["ime"]);
console.log(student.pol);

const izbiranjeNaNasoka = "nasoka";
console.log(student.izbiranjeNaNasoka);
console.log(student[izbiranjeNaNasoka]);

delete student.pol;
console.log(student);
console.log(student.pol);
console.log(Object.hasOwn(student, "ime"));
console.log(Object.hasOwn(student, "grad"));

//

const avtomobil = {
  marka: "Toyota",
  eZapalen: false,
  zapali: function () {
    this.eZapalen = true;
    console.log("avtomobilot e zapalen");
  },
  izgasi: function () {
    this.eZapalen = false;
    console.log("avtomobilot se izgasi");
  },
};


avtomobil.zapali();
avtomobil.izgasi();
console.log(avtomobil);

const proizvod = {
  ime: "Sok",
  cena: 60,
  vkupnaCena: function(kolicina){
    return this.cena * kolicina;
  },
};

const smetka = proizvod.vkupnaCena(5);
const smetka1 = proizvod.vkupnaCena(7);
console.log(smetka, smetka1);


//

//for (let brojac = 1; brojac <= 5; brojac++){
//  console.log(brojac);
//}

//console.log("ucime for loop");
//for (let i = 1; i <= 7; i++){
 // console.log("ucime for loop");
//}

//for (let brojac = 5; brojac >= 1; brojac--){
//  console.log(brojac);
//}

//const studenti = ["Ana", "Marko", "Elena"];

//console.log(studenti);
//console.log(studenti[1]);
//console.log(studenti.length);
//console.log(studenti[studenti.length - 1]);
//console.log(studenti[3]);
//studenti[1] = "Ivan";
//console.log(studenti);
//console.log(Array.isArray(studenti));


//console.log(studenti[0]);
//console.log(studenti[1]);
//console.log(studenti[2]);


//for (let i = 0; i < studenti.length; i++){
//  console.log(i);
//  console.log(studenti[i]);
//}

//const poeniZaProverka = [45, 80, 60, 20];
//  for (let i = 0; i < poeniZaProverka.length; i++) {
//    if(poeniZaProverka[i] >= 60)  {
//      console.log(poeniZaProverka[i]);
//    }
//  }

//

//for (let brojac = 1; brojac <= 10; brojac++){
//  console.log(brojac);
//}

//

//for (let i = 5; i >= 1; i--){
//  console.log(i);
//}
//console.log("start");

//

//for (let f = 5; f <= 15; f++){
//  console.log(f);
//}

const broevi = [10, 20, 30, 40, 50, 60, 70];
let zbir = 0;

for (let i = 0; i < broevi.length; i++) {
  zbir = zbir + broevi[i];
}

console.log(zbir);

const pocetniBroevi = [1, 2, 3, 4, 5, 6, 7];
const zgolemeniBroevi = [];
zgolemeniBroevi[0] = pocetniBroevi[0] + 1;
zgolemeniBroevi[1] = pocetniBroevi[1] + 1;
zgolemeniBroevi[2] = pocetniBroevi[2] + 1;
zgolemeniBroevi[3] = pocetniBroevi[3] + 1;
zgolemeniBroevi[4] = pocetniBroevi[4] + 1;
zgolemeniBroevi[5] = pocetniBroevi[5] + 1;
zgolemeniBroevi[6] = pocetniBroevi[6] + 1;
console.log(zgolemeniBroevi);

for (let i = 0; i < pocetniBroevi.length; i++) {
  zgolemeniBroevi[i] = pocetniBroevi[i] + 1;
}
console.log(zgolemeniBroevi);

const mesaniBroevi = [1, 2, 3, 4, 5, 6, 7];
const parniBroevi = [];
for(let i = 0; i < mesaniBroevi.length; i++){
  if(mesaniBroevi[i] % 2 === 0) {
    parniBroevi[parniBroevi.length] = mesaniBroevi[i];
  }
}
console.log(parniBroevi);