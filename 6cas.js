/*const testArray = [2, 5, 7, 9, 20];
const kopiranArray = [...testArray];

const array1 = [23, 12, 21, 41, 12];
console.log(...array1);
const array2 = [1, 1, 2, 4, 5];
const array3 = [...array1, ...array2, 12, 10, 23];
console.log(array3);

const testArrayDrug = [1, 3, 2, 5, 2, 3];
const copyArray = testArrayDrug.slice();

kopiranArray.push(100);

const testArraydrug = testArray;

testArraydrug.push(2);

console.log(testArrayDrug, copyArray);

const persona = {
  name: 'Marko',
  age : 25,
  city: "Skopje",
};
const persona2 = {...persona, exams: true, age:15};
console.log(persona);
console.log(persona2);

let a = 2
let b = a
console.log(a, b);
a = 3
console.log(a, b);
*/
const arr1 = [1, 5, 8];
const [a, b, c] = arr1;
console.log(a);
const arr2 = [50, 100, 200, 300, 400, 500];
const [Element, element2, ...ostanatiElementi] = arr2;
console.log(Element, element2, ostanatiElementi);

const mojObjekt = { produkt: "smoki", cena: 35};
const {produkt, cena} = mojObjekt;
console.log(produkt, cena);



const studenti = [
  { ime: "Bojan", prosek: 7.2, grad: "Skopje"},
  { ime: "Pero", prosek: 8, grad: "Gostivar"},
  { ime: "Janko", prosek: 9, grad: "Tetovo"},
  { ime: "Vesna", prosek: 6, grad: "Kriva Palanka"},
  { ime: "Vancho", prosek: 5.6, grad: "Shtip"},
  { ime: "Ivanka", prosek: 10, grad: "Kumanovo"},
  { ime: "Stanko", prosek: 9.3, grad: "Resen"},
  { ime: "Sandra", prosek: 9.6, grad: "Kichevo"},
  { ime: "Bashkim", prosek: 7.8, grad: "Ohrid"},
]
studenti.forEach((student) => console.log(student.ime));

const studentiPolozile = studenti.filter((student) => student.prosek > 8).sort((a, b) => b.prosek - a.prosek).slice(0, 3);
const studentSoProsekDevet = studenti.find((student) => student.prosek === 9);
console.log(studentiPolozile);
console.log(studentSoProsekDevet);

const godini = 15
const vozrast = godini >= 18 ? "Polnoleten" : "Ne e polnoleten";
console.log(vozrast);

const nagradaStudenti = studenti.map((s) => {
  return {
    ...s, 
    prosek: s.prosek > 8 ? s.prosek + 1 : s.prosek
  }
});
console.log(nagradaStudenti);

const zbirNaProsek = studenti.reduce((acc, s) => acc + s.prosek, 0).toFixed(1);
console.log(zbirNaProsek);
