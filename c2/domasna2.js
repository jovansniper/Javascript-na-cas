const gradovi = ["Skopje", "Bitola", "Ohrid", "Prilep", "Kumanovo"];
for (let i = 0; i < gradovi.length; i++){
  console.log(gradovi[i]);
}

//

const broeviLista = [2, 10, 12, 14, 20, 7, 5, 32, 17];
for (let i = 0; i < broeviLista.length; i++){
  if (broeviLista[i] > 10) {
    console.log(broeviLista[i]);
  }
}

//

const broeviZaProizvod = [5, 10, 20, 3, 8];
let proizvod = 1;
for (let i = 0; i < broeviZaProizvod.length; i++){
  proizvod = proizvod * broeviZaProizvod[i];
}
console.log(proizvod);

//

const ceni = [500, 200, 1800];
for (let i = 0; i < ceni.length; i++){
  ceni[i] = ceni[i] * 0.85;
}
console.log(ceni);

//

const orignalniBroevi = [60, 50, 70, 80, 55, 65, 45];
const novaNiza = [];
for (let i = 0; i < orignalniBroevi.length; i++){
  if (orignalniBroevi[i] > 60){
    novaNiza[novaNiza.length] = orignalniBroevi[i] + 10;
  }
  else {
    novaNiza[novaNiza.length] = orignalniBroevi[i];
  }
}
console.log(novaNiza);